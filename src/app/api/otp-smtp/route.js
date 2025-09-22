import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import otpGenerator from "otp-generator";
import { transporter } from "../../[locale]/config/nodemailer";
import {
  chineseOtpEmailTemplate,
  englishOtpEmailTemplate,
  getArabicOtpTemplate,
  portugueseOtpEmailTemplate,
  russianOtpEmailTemplate,
  spanishOtpEmailTemplate,
} from "./templetes";

export async function POST(req) {
  const { email, first_name, locale } = await req.json();
  const otp = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
    digits: true,
    lowerCaseAlphabets: false,
  });
  const mailData = {
    from: '"GTC" <portal@mx4.gtcmail.com>',
    to: email,
    subject:  
    data?.locale == "ar"
        ? "تم تسجيلك في مسابقة التداول التجريبي من GTC"
        : data?.locale == "zh"
            ? "您已注册参加 GTC 演示竞赛"
            : data?.locale == "es"
                ? "Se ha registrado para el concurso de demostración de GTC"
                : data?.locale == "pt"
                    ? "Inscreveu-se para a Competição de Demonstração do GTC"
                    : data?.locale == "ru"
                        ? "Ваши учетные данные для турнира GTC"
                        : data?.locale == "vi"
                            ? "Bạn đã đăng ký tham gia Cuộc thi demo GTC"
                            : "You’ve Registered for the GTC Demo Competition",
    text: `Your OTP is ${otp}`,
    html:
      locale == "ar"
        ? `${getArabicOtpTemplate(first_name, otp)}`
        : locale == "zh"
        ? chineseOtpEmailTemplate(first_name, otp)
        : locale == "es"
        ? spanishOtpEmailTemplate(first_name, otp)
        : locale == "pt"
        ? portugueseOtpEmailTemplate(first_name, otp)
        : locale == "ru"
        ? russianOtpEmailTemplate(first_name, otp)
        : englishOtpEmailTemplate(first_name, otp),
  };
  try {
    await transporter.sendMail(mailData);
    return NextResponse.json({ message: `5649${otp}632` }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error Sending OTP" }, { status: 500 });
  }
}

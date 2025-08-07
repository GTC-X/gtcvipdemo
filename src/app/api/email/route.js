import { NextResponse } from "next/server";
import { transporter, mailOptions } from "../../[locale]/config/nodemailer";
import { chineseEmailTemplate, englishEmailTemplate, getArabicEmailTempletes, portugueseEmailTemplate, russianEmailTemplate, spanishEmailTemplate } from "./templetes";

const generateEmailContent = (data) => {
  if (data?.locale == "ar") {
    return {
      html: getArabicEmailTempletes(data),
    };
  }
  if (data?.locale == "zh") {
    return {
      html: chineseEmailTemplate(data),
    };
  }
  if (data?.locale == "es") {
    return {
      html: spanishEmailTemplate(data),
    };
  }
  if (data?.locale == "pt") {
    return {
      html: portugueseEmailTemplate(data),
    };
  }
  if (data?.locale == "ru") {
    return {
      html: russianEmailTemplate(data),
    };
  }
  if (data?.locale == "en") {
    return {
      html: englishEmailTemplate(data),
    };
  }
};

export async function POST(req) {
  const reqBody = await req.json();
  const mailOption = {
    from: '"GTCFX" <portal@mx4.gtcmail.com>',
    to: reqBody?.email,
  };
  try {
    await transporter.sendMail({
      ...mailOption,
      ...generateEmailContent(reqBody),
      subject: `Thank you for registering with GTC`,
    });
    return NextResponse.json(
      { message: "Success", email: reqBody?.email },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}

import { NextResponse } from "next/server";
import { transporter, mailOptions } from "../../[locale]/config/nodemailer";
import {
    chineseEmailMT5Template,
    englishEmailMT5Template,
    getArabicEmailMT5Templetes,
    portugueseEmailMT5Template,
    russianEmailMT5Template,
    spanishEmailMT5Template,
} from "./template";

const getLocalizedMessage = (key, locale) => {
  const messages = {
    success: {
        en: "Send Successfully!",
        ar: "تم الإرسال بنجاح!",
        zh: "发送成功！",
        es: "¡Enviado con éxito!",
        pt: "Enviado com sucesso!",
        ru: "Успешно отправлено!",
        vi: "Gửi thành công!",
    },
    error: {
        en: "Error Sending Mail",
        ar: "حدث خطأ أثناء إرسال البريد",
        zh: "发送邮件出错",
        es: "Error al enviar el correo",
        pt: "Erro ao enviar o e-mail",
        ru: "Ошибка при отправке письма",
        vi: "Lỗi khi gửi thư",
    },
};

    return messages[key][locale] || messages[key]["en"];
};


export async function POST(req) {
    const data = await req.json();
    const mailData = {
        from: '"GTC" <portal@mx4.gtcmail.com>',
        to: data?.email,
      subject:
    data?.locale == "ar"
        ? "لقد انضممت إلى القائمة! سيتم فتح التسجيل قريباً"
        : data?.locale == "zh"
            ? "您已加入名单！注册即将重新开启"
            : data?.locale == "es"
                ? "¡Estás en la lista! El registro se reabrirá pronto"
                : data?.locale == "pt"
                    ? "Você está na lista! O registro será reaberto em breve"
                    : data?.locale == "ru"
                        ? "Ваши учетные данные для турнира GTC"
                        : data?.locale == "vi"
                            ? "Bạn đã có trong danh sách! Việc đăng ký sẽ sớm được mở lại"
                            : "You’re on the List! Registration Reopens Soon",
        html:
            data?.locale == "ar"
                ? `${getArabicEmailMT5Templetes(data)}`
                : data?.locale == "zh"
                    ? chineseEmailMT5Template(data)
                    : data?.locale == "es"
                        ? spanishEmailMT5Template(data)
                        : data?.locale == "pt"
                            ? portugueseEmailMT5Template(data)
                            : data?.locale == "ru"
                                ? russianEmailMT5Template(data)
                                : englishEmailMT5Template(data),
    };
    try {
        await transporter.sendMail(mailData);
        return NextResponse.json(
            { message: getLocalizedMessage("success", data?.locale) },
            { status: 200 }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { message: getLocalizedMessage("error", data?.locale) },
            { status: 500 }
        );
    }
}

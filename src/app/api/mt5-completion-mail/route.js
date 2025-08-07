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

export async function POST(req) {
    const data = await req.json();
    const mailData = {
        from: '"GTC" <portal@mx4.gtcmail.com>',
        to: data?.email,
        subject: "Your GTC Tournament Credentials",
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
            { message: "Send Successfully!" },
            { status: 200 }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { message: "Error Sending Mail" },
            { status: 500 }
        );
    }
}

import { NextResponse } from 'next/server';
import { transporter, mailOptions } from "../../[locale]/config/nodemailer";
import { TraderCompletionMail } from './template';

export async function POST(req) {
    const data = await req.json();
    const mailData = {
        from: '"GTC" <portal@mx4.gtcmail.com>',
        to: data?.email,
        subject: "Your GTC Tournament Credentials",
        html: TraderCompletionMail(data)
    };
    try {
        await transporter.sendMail(mailData);
        return NextResponse.json({ message: "Send Successfully!" }, { status: 200 })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: 'Error Sending Mail' }, { status: 500 })
    }
}
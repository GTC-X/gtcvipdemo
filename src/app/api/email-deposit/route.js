import { NextResponse } from "next/server";
import { transporter, mailOptions } from "../../[locale]/config/nodemailer";
const generateEmailContent = (data) => {

    return {
        html: `
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8" />
    <title>Thanks for your registration</title>
  </head>
  <body style="margin:0;padding:0;background:#ffffff;">
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
      <tr>
        <td align="left" style="padding:24px;font-family:Arial,Helvetica,sans-serif;color:#000;font-size:14px;line-height:22px;">
          <p style="margin:0 0 12px;">Hello ${data?.email || "Trader"},</p>

          <p style="margin:0 0 12px;">Thanks for your registration!</p>

          <p style="margin:0 0 12px;">
            You’ve successfully secured your spot in the <strong>GTC Demo Trading Competition</strong>, and we’re excited to have you with us.
          </p>

          <p style="margin:0 0 12px;">Here’s what happens next:</p>

          <ul style="margin:0 0 12px 20px;padding:0;">
            <li style="margin-bottom:6px;">✅ You’ll receive your $10,000 demo account credentials soon</li>
            <li style="margin-bottom:6px;">✅ Compete for a $5,000 prize pool, no risk, just reward</li>
            <li style="margin-bottom:6px;">✅ We’ll keep you updated with important competition details</li>
          </ul>

          <p style="margin:0 0 12px;">Start planning your trading strategy, the leaderboard awaits!</p>

          <p style="margin:0 0 12px;">Good luck,</p>
          <p style="margin:0;">Your GTC Family</p>
        </td>
      </tr>
    </table>
  </body>
</html>
`,
    };
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
            subject: `🎉 You're In! Welcome to GTC's $5,000 Demo Trading Competition`,
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

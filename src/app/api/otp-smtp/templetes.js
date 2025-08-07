export const getArabicOtpTemplate = (first_name, otp) => {
    return `
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <title>رمز التحقق GTC</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@400;700&display=swap');
  </style>
</head>
<body dir="rtl" style="margin:0;padding:0;background-color:#ffffff;font-family:'Noto Kufi Arabic', sans-serif; direction: rtl;">
  <table dir="rtl" width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Noto Kufi Arabic', sans-serif; padding: 20px;">
    <tr>
      <td align="center">
        <table width="900" cellpadding="0" cellspacing="0" style="border:1px solid #e0e0e0;border-radius:8px;padding:30px;">
          <tr>
            <td align="right" style="padding-bottom: 20px;">
              <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/email-test.png" alt="شعار GTC" style="width: 120px;" />
            </td>
          </tr>
          <tr>
            <td style="font-size:20px;font-weight:600;color:#000000;padding-bottom:10px;">
              رمز التحقق الخاص بك من GTC
            </td>
          </tr>
          <tr>
            <td style="font-size:14px;color:#000000;padding-bottom:20px;">
              شكرًا لاختيارك GTC.
            </td>
          </tr>
          <tr>
            <td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td>
          </tr>
          <tr>
            <td style="font-size:14px;color:#000000;padding-bottom:10px;">
              عزيزي ${first_name || "العميل"},
            </td>
          </tr>
          <tr>
            <td style="font-size:14px;color:#000000;padding-bottom:10px;">
              يرجى استخدام رمز التحقق لمرة واحدة التالي لإكمال العملية.
            </td>
          </tr>
          <tr>
            <td style="font-size:24px;font-weight:600;color:#2e2e2e;padding-bottom:20px;">
              ${otp}
            </td>
          </tr>
          <tr>
            <td style="font-size:14px;color:#000000;padding-bottom:20px;">
              إذا كانت لديك أي أسئلة أو تحتاج إلى مساعدة إضافية، فلا تتردد في التواصل معنا عبر
              <a href="mailto:support@gtcfx.com" style="color:#0066cc;text-decoration:none;">support@gtcfx.com</a>.
            </td>
          </tr>
          <tr>
            <td style="font-size:14px;color:#000000;padding-bottom:30px;">
              نتمنى لك يومًا سعيدًا،<br>
              فريق GTC
            </td>
          </tr>
          <tr>
            <td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td>
          </tr>
          <tr>
            <td style="padding-top: 0px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="right">
                    <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/email-test.png" alt="شعار GTC" style="width: 100px;" />
                  </td>
                  <td align="right" dir="rtl" style="font-size: 13px; color: #192055; line-height: 25px;">
                    📞 الهاتف: <span dir="ltr">+971 800 667788</span><br />
                    ✉️ البريد الإلكتروني: <a href="mailto:support@gtcfx.com" style="color: #192055; text-decoration: none;">support@gtcfx.com</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="font-size: 11px; color: #666; padding: 20px 0px; line-height: 1.5; text-align: right;" dir="rtl">
              <!-- Legal Disclaimer here -->
              هذا الموقع مملوك ومدار من قبل GTC Global Ltd ... جميع الحقوق محفوظة.
              <br><br>
              <strong>تحذير من المخاطر:</strong> ... استشارة مستشار مستقل عند الحاجة.
            </td>
          </tr>
          <tr>
            <td style="padding-top: 30px; text-align: center;">
              <table align="center" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 0 5px;"><a href="https://www.facebook.com/GTCFXGlobalTradeCapital"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="20" /></a></td>
                  <td style="padding: 0 5px;"><a href="https://x.com/GTC_fx"><img src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png" alt="X" width="20" /></a></td>
                  <td style="padding: 0 5px;"><a href="https://www.youtube.com/channel/UCnKWakjm1b9Bm63xgwNFXHA"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" width="20" /></a></td>
                  <td style="padding: 0 5px;"><a href="https://linkedin.com/company/gtcfx-official"><img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" width="20" /></a></td>
                  <td style="padding: 0 5px;"><a href="https://www.instagram.com/gtcfxofficial/"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" width="20" /></a></td>
                  <td style="padding: 0 5px;"><a href="https://api.whatsapp.com/send/?phone=448000488461"><img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" width="20" /></a></td>
                  <td style="padding: 0 5px;"><a href="https://t.me/gtc_vip_signal"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="Telegram" width="20" /></a></td>
                  <td style="padding: 0 5px;"><a href="https://www.tiktok.com/@gtcgroup_official"><img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" alt="TikTok" width="20" /></a></td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" dir="rtl" style="font-size: 12px; color: #666666; padding-top: 15px; padding-bottom: 30px;">
              &copy; حقوق النشر 2025 GTCFX – جميع الحقوق محفوظة
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
};
export const englishOtpEmailTemplate = (first_name, otp) => {
    return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>You’ve Registered for the GTC Demo Competition</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
    </style>
  </head>
  <body style="margin:0;padding:0;background-color:#ffffff;font-family:'Poppins',sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Poppins', sans-serif; padding: 20px;">
      <tr>
        <td align="center">
          <table width="650" cellpadding="0" cellspacing="0" style="border:1px solid #e0e0e0;border-radius:8px;padding:30px;">
            <tr>
              <td align="center" style="padding-bottom: 20px;">
                <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg" alt="GTC Logo" style="width: 160px;" />
              </td>
            </tr>
            <tr>
              <td align="center" style="font-size:20px;font-weight:600;color:#000000;padding-bottom:10px;">
                You’ve Registered for the <br>GTC Demo Competition
              </td>
            </tr>
            <tr>
              <td align="center" style="font-size:14px;color:#000000;padding-bottom:20px;">
                Confirm your email by entering the OTP that’s in this email.
              </td>
            </tr>
            <tr><td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td></tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                Dear ${first_name || "Client"},
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                Thanks again for registering for the GTC Demo Trading Competition.
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                Here’s the OTP that you’ll need to enter into the form.
              </td>
            </tr>
            <tr>
              <td style="font-size:24px;font-weight:600;color:#2e2e2e;padding-bottom:20px;">
                ${otp}
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:20px;">
                If you need any help or assistance, simply reach out to our amazing Customer Care team via our Live Chat feature that’s on our website, 
                <a href="https://GTCVIP.com">https://GTCVIP.com</a>.
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                We hope you’re excited about the upcoming GTC Demo Trading Tournament!
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:30px;">
                Have a great day,<br>Your GTC Family
              </td>
            </tr>
            <tr><td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td></tr>
            <tr>
              <td style="padding-top: 0px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="left">
                      <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg" alt="GTC Logo" style="width: 160px;" />
                    </td>
                    <td align="right" style="font-size: 13px; color: #192055; line-height: 25px;">
                      📞 Phone: +971 800 667788<br/>
                      ✉️ Email: <a href="mailto:support@gtcfx.com" style="color: #192055; text-decoration: none;">support@gtcfx.com</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- Add Legal + Social sections here if needed -->
            <tr>
              <td align="center" style="font-size: 12px; color: #666666; padding-top: 15px; padding-bottom: 30px;">
                &copy; Copyright 2025 GTCVIP – All Rights Reserved
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
};

export const chineseOtpEmailTemplate = (first_name, otp) => {
    return `<!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <title>您已注册 GTC 模拟交易大赛</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
    </style>
  </head>
  <body style="margin:0;padding:0;background-color:#ffffff;font-family:'Poppins',sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Poppins', sans-serif; padding: 20px;">
      <tr>
        <td align="center">
          <table width="650" cellpadding="0" cellspacing="0" style="border:1px solid #e0e0e0;border-radius:8px;padding:30px;">
            <tr>
              <td align="center" style="padding-bottom: 20px;">
                <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg" alt="GTC Logo" style="width: 160px;" />
              </td>
            </tr>
            <tr>
              <td align="center" style="font-size:20px;font-weight:600;color:#000000;padding-bottom:10px;">
                您已注册<br>GTC 模拟交易大赛
              </td>
            </tr>
            <tr>
              <td align="center" style="font-size:14px;color:#000000;padding-bottom:20px;">
                请通过输入此邮件中的 OTP 验证您的邮箱。
              </td>
            </tr>
            <tr><td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td></tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                尊敬的 ${first_name || "客户"},
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                感谢您注册 GTC 模拟交易大赛。
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                以下是您需要输入到表单中的 OTP：
              </td>
            </tr>
            <tr>
              <td style="font-size:24px;font-weight:600;color:#2e2e2e;padding-bottom:20px;">
                ${otp}
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:20px;">
                如果您需要任何帮助，请通过我们网站的在线客服与客户服务团队联系： 
                <a href="https://GTCVIP.com">https://GTCVIP.com</a>。
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                我们希望您对即将到来的 GTC 模拟交易大赛感到兴奋！
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:30px;">
                祝您交易愉快，<br>您的 GTC 团队
              </td>
            </tr>
            <tr><td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td></tr>
            <tr>
              <td style="padding-top: 0px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="left">
                      <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg" alt="GTC Logo" style="width: 160px;" />
                    </td>
                    <td align="right" style="font-size: 13px; color: #192055; line-height: 25px;">
                      📞 电话: +971 800 667788<br/>
                      ✉️ 邮箱: <a href="mailto:support@gtcfx.com" style="color: #192055; text-decoration: none;">support@gtcfx.com</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td align="center" style="font-size: 12px; color: #666666; padding-top: 15px; padding-bottom: 30px;">
                &copy; 版权所有 2025 GTCVIP – 保留所有权利
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
};

export const spanishOtpEmailTemplate = (first_name, otp) => {
    return `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>Te has registrado para la Competencia Demo de GTC</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
    </style>
  </head>
  <body style="margin:0;padding:0;background-color:#ffffff;font-family:'Poppins',sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Poppins', sans-serif; padding: 20px;">
      <tr>
        <td align="center">
          <table width="650" cellpadding="0" cellspacing="0" style="border:1px solid #e0e0e0;border-radius:8px;padding:30px;">
            <!-- Logo -->
            <tr>
              <td align="center" style="padding-bottom: 20px;">
                <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg" alt="Logo GTC" style="width: 160px;" />
              </td>
            </tr>

            <!-- Heading -->
            <tr>
              <td align="center" style="font-size:20px;font-weight:600;color:#000000;padding-bottom:10px;">
                Te has registrado para la <br>Competencia Demo de GTC
              </td>
            </tr>
            <tr>
              <td align="center" style="font-size:14px;color:#000000;padding-bottom:20px;">
                Confirma tu correo electrónico ingresando el código OTP incluido en este correo.
              </td>
            </tr>

            <tr><td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td></tr>

            <!-- Greeting & OTP -->
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                Estimado/a ${first_name || "Cliente"},
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                Gracias nuevamente por registrarte en la Competencia Demo de GTC.
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                Este es el código OTP que deberás ingresar en el formulario:
              </td>
            </tr>
            <tr>
              <td style="font-size:24px;font-weight:600;color:#2e2e2e;padding-bottom:20px;">
                ${otp}
              </td>
            </tr>

            <!-- Support Info -->
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:20px;">
                Si necesitas ayuda o asistencia, no dudes en contactar a nuestro equipo de Atención al Cliente a través del chat en vivo en nuestro sitio web: 
                <a href="https://GTCVIP.com">https://GTCVIP.com</a>.
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                ¡Esperamos que estés emocionado por el torneo de trading demo de GTC!
              </td>
            </tr>

            <!-- Signoff -->
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:30px;">
                Que tengas un excelente día,<br>
                Tu familia GTC
              </td>
            </tr>

            <tr><td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td></tr>

            <!-- Contact Info -->
            <tr>
              <td style="padding-top: 0px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="left">
                      <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg" alt="Logo GTC" style="width: 160px;" />
                    </td>
                    <td align="right" style="font-size: 13px; color: #192055; line-height: 25px;">
                      📞 Teléfono: +971 800 667788<br/>
                      ✉️ Correo: <a href="mailto:support@gtcfx.com" style="color: #192055; text-decoration: none;">support@gtcfx.com</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td align="center" style="font-size: 12px; color: #666666; padding-top: 15px; padding-bottom: 30px;">
                &copy; Derechos reservados 2025 GTCVIP – Todos los derechos reservados
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
};
export const portugueseOtpEmailTemplate = (first_name, otp) => {
    return `<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8" />
    <title>Você se registrou na Competição Demo da GTC</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
    </style>
  </head>
  <body style="margin:0;padding:0;background-color:#ffffff;font-family:'Poppins',sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Poppins', sans-serif; padding: 20px;">
      <tr>
        <td align="center">
          <table width="650" cellpadding="0" cellspacing="0" style="border:1px solid #e0e0e0;border-radius:8px;padding:30px;">
            <!-- Logo -->
            <tr>
              <td align="center" style="padding-bottom: 20px;">
                <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg" alt="Logo da GTC" style="width: 160px;" />
              </td>
            </tr>

            <!-- Heading -->
            <tr>
              <td align="center" style="font-size:20px;font-weight:600;color:#000000;padding-bottom:10px;">
                Você se registrou na <br>Competição Demo da GTC
              </td>
            </tr>
            <tr>
              <td align="center" style="font-size:14px;color:#000000;padding-bottom:20px;">
                Confirme seu e-mail inserindo o código OTP fornecido abaixo.
              </td>
            </tr>

            <tr><td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td></tr>

            <!-- Greeting & OTP -->
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                Prezado(a) ${first_name || "Cliente"},
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                Obrigado novamente por se registrar na Competição Demo de Trading da GTC.
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                Aqui está o seu código OTP para inserir no formulário:
              </td>
            </tr>
            <tr>
              <td style="font-size:24px;font-weight:600;color:#2e2e2e;padding-bottom:20px;">
                ${otp}
              </td>
            </tr>

            <!-- Support Info -->
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:20px;">
                Se precisar de ajuda ou suporte, entre em contato com a nossa equipe de Atendimento ao Cliente através do chat ao vivo disponível em nosso site: 
                <a href="https://GTCVIP.com">https://GTCVIP.com</a>.
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                Esperamos que você esteja animado para o torneio demo de trading da GTC!
              </td>
            </tr>

            <!-- Signoff -->
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:30px;">
                Tenha um ótimo dia,<br>
                Sua família GTC
              </td>
            </tr>

            <tr><td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td></tr>

            <!-- Contact Info -->
            <tr>
              <td style="padding-top: 0px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="left">
                      <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg" alt="Logo da GTC" style="width: 160px;" />
                    </td>
                    <td align="right" style="font-size: 13px; color: #192055; line-height: 25px;">
                      📞 Telefone: +971 800 667788<br/>
                      ✉️ E-mail: <a href="mailto:support@gtcfx.com" style="color: #192055; text-decoration: none;">support@gtcfx.com</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td align="center" style="font-size: 12px; color: #666666; padding-top: 15px; padding-bottom: 30px;">
                &copy; Direitos Autorais 2025 GTCVIP – Todos os direitos reservados
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
};
export const russianOtpEmailTemplate = (first_name, otp) => {
    return `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Вы зарегистрировались на демо-турнир GTC</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
    </style>
  </head>
  <body style="margin:0;padding:0;background-color:#ffffff;font-family:'Poppins',sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Poppins', sans-serif; padding: 20px;">
      <tr>
        <td align="center">
          <table width="650" cellpadding="0" cellspacing="0" style="border:1px solid #e0e0e0;border-radius:8px;padding:30px;">
            <!-- Logo -->
            <tr>
              <td align="center" style="padding-bottom: 20px;">
                <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg" alt="Логотип GTC" style="width: 160px;" />
              </td>
            </tr>

            <!-- Heading -->
            <tr>
              <td align="center" style="font-size:20px;font-weight:600;color:#000000;padding-bottom:10px;">
                Вы зарегистрировались на <br>Демо-турнир GTC
              </td>
            </tr>
            <tr>
              <td align="center" style="font-size:14px;color:#000000;padding-bottom:20px;">
                Подтвердите свой адрес электронной почты, введя OTP-код, указанный ниже.
              </td>
            </tr>

            <tr><td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td></tr>

            <!-- Greeting & OTP -->
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                Уважаемый(ая) ${first_name || "Клиент"},
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                Благодарим за регистрацию на демо-турнир по трейдингу от GTC.
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                Ниже вы найдете одноразовый код подтверждения (OTP), который необходимо ввести в форму:
              </td>
            </tr>
            <tr>
              <td style="font-size:24px;font-weight:600;color:#2e2e2e;padding-bottom:20px;">
                ${otp}
              </td>
            </tr>

            <!-- Support Info -->
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:20px;">
                Если вам нужна помощь, пожалуйста, свяжитесь с нашей службой поддержки через онлайн-чат на сайте <a href="https://GTCVIP.com">https://GTCVIP.com</a>.
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                Желаем вам удачи в предстоящем демо-турнире от GTC!
              </td>
            </tr>

            <!-- Signoff -->
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:30px;">
                Хорошего дня!<br>
                Ваша команда GTC
              </td>
            </tr>

            <tr><td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td></tr>

            <!-- Contact Info -->
            <tr>
              <td style="padding-top: 0px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="left">
                      <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg" alt="GTC Logo" style="width: 160px;" />
                    </td>
                    <td align="right" style="font-size: 13px; color: #192055; line-height: 25px;">
                      📞 Телефон: +971 800 667788<br/>
                      ✉️ Email: <a href="mailto:support@gtcfx.com" style="color: #192055; text-decoration: none;">support@gtcfx.com</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td align="center" style="font-size: 12px; color: #666666; padding-top: 15px; padding-bottom: 30px;">
                &copy; Авторское право 2025 GTCVIP – Все права защищены
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
};

export const getArabicEmailMT5Templetes = (data) => {
  return `
 <!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <title>تفاصيل تسجيلك في مسابقة GTC</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@400;700&display=swap');
    </style>
  </head>
  <body style="margin:0;padding:0;background-color:#ffffff;font-family:'Noto Kufi Arabic', sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="padding:20px;">
      <tr>
        <td align="center">
          <table width="650" cellpadding="0" cellspacing="0" style="border:1px solid #e0e0e0;border-radius:8px;padding:30px;">
            <!-- Logo -->
            <tr>
              <td align="center" style="padding-bottom:20px;">
                <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg" alt="شعار GTC" style="width:160px;" />
              </td>
            </tr>

            <!-- Heading -->
            <tr>
              <td align="center" style="font-size:20px;font-weight:600;color:#000000;padding-bottom:10px;">
                بيانات تسجيلك في مسابقة GTC
              </td>
            </tr>
            <tr>
              <td align="center" style="font-size:14px;color:#000000;padding-bottom:20px;">
                إليك كافة التفاصيل للوصول إلى حسابك التجريبي والمشاركة!
              </td>
            </tr>

            <tr><td style="border-top:2px solid #e0e0e0;padding:15px 0;"></td></tr>

            <!-- Greeting -->
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                مرحباً ${data?.name}،
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                أنت الآن مستعد لتُثبت للعالم أنك أفضل متداول على الإطلاق!
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                لقد تم إنشاء حساب التداول التجريبي الخاص بك بنجاح، وإليك طريقة الوصول إليه.
              </td>
            </tr>

            <!-- Account Info -->
            <tr>
              <td style="padding:20px 0;">
                <h3 style="color:#b68756;font-size:18px;margin-bottom:16px;">تفاصيل حساب التداول التجريبي الخاص بك</h3>
                <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#fdf6ee;font-size:14px;color:#000;border-radius:10px;">
                  <tr>
                    <td width="45%" style="font-weight:600;color:#7c4e00;padding:12px;">عملة الحساب</td>
                    <td style="padding:5px;">
                      <div style="background:#fff;padding:10px 14px;border-radius:8px;">USD</div>
                    </td>
                  </tr>
                  <tr>
                    <td style="font-weight:600;color:#7c4e00;padding:12px;">رقم الحساب</td>
                    <td style="padding:5px;">
                      <div style="background:#fff;padding:10px 14px;border-radius:8px;">${data?.user}</div>
                    </td>
                  </tr>
                  <tr>
                    <td style="font-weight:600;color:#7c4e00;padding:12px;">كلمة المرور</td>
                    <td style="padding:5px;">
                      <div style="background:#fff;padding:10px 14px;border-radius:8px;">${data?.password}</div>
                    </td>
                  </tr>
                  <tr>
                    <td style="font-weight:600;color:#7c4e00;padding:12px;">كلمة مرور المستثمر</td>
                    <td style="padding:5px;">
                      <div style="background:#fff;padding:10px 14px;border-radius:8px;border:2px solid #a076f9;">${data?.invest_password}</div>
                    </td>
                  </tr>
                  <tr>
                    <td style="font-weight:600;color:#7c4e00;padding:12px;">المنصة</td>
                    <td style="padding:5px;">
                      <div style="background:#fff;padding:10px 14px;border-radius:8px;">MT5</div>
                    </td>
                  </tr>
                  <tr>
                    <td style="font-weight:600;color:#7c4e00;padding:12px;">الخادم</td>
                    <td style="padding:5px;">
                      <div style="background:#fff;padding:10px 14px;border-radius:8px;">GTCGlobalTrade-Server</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- CTA -->
            <tr>
              <td align="center" style="padding-bottom:20px;">
                <p style="font-size:16px;color:#202a6b;font-weight:600;margin-bottom:20px;">الوصول إلى منصة التداول</p>
                <table cellpadding="0" cellspacing="0" role="presentation">
                  <tr>
                    <td style="padding:0 10px;">
                      <a href="https://download.mql5.com/cdn/web/gtc.global.trade/mt5/gtcglobaltrade5setup.exe"
                         style="background:#fff;border:2px solid #b68756;border-radius:8px;color:#b68756;font-weight:600;padding:12px 20px;text-decoration:none;">
                        GTC على الحاسوب
                      </a>
                    </td>
                    <td style="padding:0 10px;">
                      <a href="https://download.mql5.com/cdn/mobile/mt5/android?server=GTCGlobalTrade-Server"
                         style="background:linear-gradient(to right,#b68756,#7b6036);border-radius:8px;color:#fff;font-weight:600;padding:12px 20px;text-decoration:none;">
                        GTC على الهاتف
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Contact -->
            <tr>
              <td style="font-size:16px;color:#000000;padding-bottom:10px;font-weight:600;">هل تحتاج مساعدة؟</td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:20px;">
                لا تتردد في التواصل معنا عبر: <a href="mailto:support@gtcfx.com" style="color:#000;text-decoration:underline;">support@gtcfx.com</a>
              </td>
            </tr>

            <!-- Signature -->
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:30px;">
                بالتوفيق!<br/>
                فريق GTC
              </td>
            </tr>

            <!-- Divider -->
            <tr>
              <td style="border-top:2px solid #e0e0e0;padding:15px 0;"></td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="font-size:12px;color:#666666;text-align:center;">
                &copy; 2025 جميع الحقوق محفوظة لشركة GTC
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`
};

export const chineseEmailMT5Template = (data) => {
  return `
  <!DOCTYPE html>
<html lang="zh">
  <head>
    <meta charset="UTF-8" />
    <title>您的 GTC 竞赛登录凭证</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
    </style>
  </head>
  <body style="margin:0;padding:0;background-color:#ffffff;font-family:'Poppins',sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="font-family:'Poppins',sans-serif;padding:20px;">
      <tr>
        <td align="center">
          <table width="650" cellpadding="0" cellspacing="0" style="border:1px solid #e0e0e0;border-radius:8px;padding:30px;">
            <!-- Logo -->
            <tr>
              <td align="center" style="padding-bottom:20px;">
                <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg"
                     alt="GTC 徽标" style="width:160px;" />
              </td>
            </tr>

            <!-- 主题标题 -->
            <tr>
              <td align="center" style="font-size:20px;font-weight:600;color:#000000;padding-bottom:10px;">
                您的 GTC 大赛登录凭证
              </td>
            </tr>
            <tr>
              <td align="center" style="font-size:14px;color:#000000;padding-bottom:20px;">
                我们已经将所有凭证整理在本邮件中，助您一臂之力！
              </td>
            </tr>

            <tr><td style="border-top:2px solid #e0e0e0;padding:15px 0;"></td></tr>

            <!-- 问候与说明 -->
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                您好，${data?.name}，
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                您已准备好迎接世界级挑战，向天下证明您才是真正的顶级交易员！
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                您的新 GTC 模拟交易账户已创建，请查看以下方式以登录账户。
              </td>
            </tr>

            <!-- 账户信息框 -->
            <tr>
              <td style="padding:20px 0;">
                <h3 style="color:#b68756;font-size:18px;margin:0 0 16px 0;">您的 GTC 模拟交易账户信息</h3>
                <table width="100%" cellpadding="0" cellspacing="0"
                       style="border-radius:10px;background-color:#fdf6ee;font-size:14px;color:#000;">
                  <tr>
                    <td width="45%" style="font-weight:600;color:#7c4e00;padding:12px;">账户货币</td>
                    <td style="padding:5px;">
                      <div style="background-color:#ffffff;padding:10px 14px;border-radius:8px;">USD</div>
                    </td>
                  </tr>
                  <tr>
                    <td style="font-weight:600;color:#7c4e00;padding:12px;">GTC 交易账号</td>
                    <td style="padding:5px;">
                      <div style="background-color:#ffffff;padding:10px 14px;border-radius:8px;">
                        ${data?.user}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="font-weight:600;color:#7c4e00;padding:12px;">登录密码</td>
                    <td style="padding:5px;">
                      <div style="background-color:#ffffff;padding:10px 14px;border-radius:8px;">
                        ${data?.password}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="font-weight:600;color:#7c4e00;padding:12px;">投资者密码</td>
                    <td style="padding:5px;">
                      <div style="background-color:#ffffff;padding:10px 14px;border-radius:8px;border:2px solid #a076f9;">
                        ${data?.invest_password}
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="font-weight:600;color:#7c4e00;padding:12px;">交易平台</td>
                    <td style="padding:5px;">
                      <div style="background-color:#ffffff;padding:10px 14px;border-radius:8px;">MT5</div>
                    </td>
                  </tr>
                  <tr>
                    <td style="font-weight:600;color:#7c4e00;padding:12px;">服务器名称</td>
                    <td style="padding:5px;">
                      <div style="background-color:#ffffff;padding:10px 14px;border-radius:8px;">GTCGlobalTrade-Server</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- CTA 按钮 -->
            <tr>
              <td align="center" style="padding-bottom:20px;">
                <p style="font-size:16px;color:#202a6b;font-weight:600;margin-bottom:20px;">
                  登录您的 GTC 客户端专区
                </p>
                <table cellpadding="0" cellspacing="0" role="presentation">
                  <tr>
                    <td style="padding:0 10px;">
                      <a href="https://download.mql5.com/cdn/web/gtc.global.trade/mt5/gtcglobaltrade5setup.exe"
                         style="background-color:#ffffff;border:2px solid #b68756;border-radius:8px;color:#b68756;font-weight:600;padding:12px 20px;text-decoration:none;display:inline-block;">
                        桌面端 GTC 客户区
                      </a>
                    </td>
                    <td style="padding:0 10px;">
                      <a href="https://download.mql5.com/cdn/mobile/mt5/android?server=GTCGlobalTrade-Server"
                         style="background:linear-gradient(to right,#b68756,#7b6036);border-radius:8px;color:#ffffff;font-weight:600;padding:12px 20px;text-decoration:none;display:inline-block;">
                        移动端 GTC 客户区
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- 帮助说明 -->
            <tr>
              <td style="font-size:16px;color:#000000;padding-bottom:10px;font-weight:600;">
                需要帮助？
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                如果您有任何疑问或需要进一步帮助，请随时联系我们：<a href="mailto:support@gtcfx.com">support@gtcfx.com</a>。我们在此为您提供支持，确保您享有最佳体验。
              </td>
            </tr>

            <!-- 致敬语 -->
            <tr>
              <td style="font-size:16px;color:#000000;padding-bottom:10px;font-weight:600;">
                致敬，
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:30px;">
                您最棒，很快就会向世界证明！<br/>
                您的 GTC 家人
              </td>
            </tr>

            <tr><td style="border-top:2px solid #e0e0e0;padding:15px 0;"></td></tr>

            <!-- 联系方式 & 公司说明 -->
            <tr>
              <td style="padding-top:0;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="left">
                      <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg"
                           alt="GTC 徽标" style="width:160px;" />
                    </td>
                    <td align="right" style="font-size:13px;color:#192055;line-height:25px;">
                      📞 电话：+971 800 667788<br/>
                      ✉️ 邮箱：<a href="mailto:support@gtcfx.com" style="color:#192055;text-decoration:none;">support@gtcfx.com</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- 法律声明 -->
            <tr>
              <td style="font-size:11px;color:#666;padding:20px 0;line-height:1.5;">
                <strong>请妥善保管您的账户和密码。请勿与他人共享，确保账户安全。</strong><br/><br/>
                <strong>您为所有账户信息和交易所使用的安全凭证或设备承担全部责任。</strong><br/><br/>
                本网站由 GTC Global Ltd（毛里求斯注册，注册号 C188049）拥有并运营，持有毛里求斯金融服务委员会颁发的证券交易牌照（编号：GB22200292）。注册地址：Cyberati Lounge，The Catalyst，Silicon Avenue，40 Cybercity，72201 Ebene，毛里求斯共和国。金融服务及产品由 GTC Global Ltd 和 GTC Global Trade Capital Co. Limited 提供，后者持有瓦努阿图金融服务委员会授权（牌照号：40354）。<br/><br/>
                GTC Global Ltd 和 GTC Global Trade Capital Co. Limited 均为 GTC 金融集团的成员，该集团在全球拥有多家子公司。以杠杆进行的衍生品交易具有高风险，可能不适合所有投资者。在交易外汇或差价合约前，请全面评估您的投资目标、经验与风险承受能力，并仅使用可承受损失的资金。如有疑问，请咨询独立的财务或税务顾问。<br/><br/>
                GTC Global Ltd 和 GTC Global Trade Capital Co. Limited 不向某些特定司法辖区的居民提供服务。<br/><br/>
                其他集团实体：GTC Group LLC‑FZ 为设于阿联酋迪拜的控股公司（商务许可：2311147.01）。GTC Multi Trading DMCC 为设于 DMCC 的注册公司（编号 DMCC‑312687），并获阿联酋证券商品管理局授权（编号 202200000007）提供商品经纪服务。<br/><br/>
                各实体独立运营。本网站上的金融服务仅由 GTC Global Ltd 及 GTC Global Trade Capital Co. Limited 提供。<br/><br/>
                所有商标归其合法拥有者所有。GTC Global Ltd 为 GTC 金融集团成员之一。<br/><br/>
                <strong>风险提示：</strong>杠杆产品具有高风险，可能导致资金损失，非所有投资者均适用。请确保完全理解这些风险并酌情寻求独立建议。
              </td>
            </tr>

            <!-- 社交媒体图标 -->
            <tr>
              <td style="padding-top:30px;text-align:center;">
                <table align="center" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:0 5px;"><a href="https://www.facebook.com/GTCFXGlobalTradeCapital" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="20" height="20" style="display:block;"></a></td>
                    <td style="padding:0 5px;"><a href="https://x.com/GTC_fx" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png" alt="X" width="20" height="20" style="display:block;"></a></td>
                    <td style="padding:0 5px;"><a href="https://www.youtube.com/channel/UCnKWakjm1b9Bm63xgwNFXHA" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" width="20" height="20" style="display:block;"></a></td>
                    <td style="padding:0 5px;"><a href="https://linkedin.com/company/gtcfx-official" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" width="20" height="20" style="display:block;"></a></td>
                    <td style="padding:0 5px;"><a href="https://www.instagram.com/gtcfxofficial/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" width="20" height="20" style="display:block;"></a></td>
                    <td style="padding:0 5px;"><a href="https://api.whatsapp.com/send/?phone=448000488461&text&type=phone_number&app_absent=0" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" width="20" height="20" style="display:block;"></a></td>
                    <td style="padding:0 5px;"><a href="https://t.me/gtc_vip_signal" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="Telegram" width="20" height="20" style="display:block;"></a></td>
                    <td style="padding:0 5px;"><a href="https://www.tiktok.com/@gtcgroup_official" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" alt="TikTok" width="20" height="20" style="display:block;"></a></td>
                  </tr>
                </table>
              </td>
            </tr>
            <!-- Copyright -->
            <tr>
              <td align="center" style="font-size:12px;color:#666666;padding-top:15px;padding-bottom:30px;">
                &copy; 2025 GTCVIP – 版权所有
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`
};

export const spanishEmailMT5Template = (data) => {
  return `
  <!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>¡Te has registrado en la Competencia Demo de GTC!</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
    </style>
  </head>
  <body style="margin:0;padding:0;background-color:#ffffff;font-family:'Poppins',sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="padding: 20px;">
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
                Tus credenciales de competencia GTC
              </td>
            </tr>
            <tr>
              <td align="center" style="font-size:14px;color:#000000;padding-bottom:20px;">
                ¡Aquí tienes toda la información para empezar a operar!
              </td>
            </tr>

            <tr><td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td></tr>

            <!-- Greeting -->
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                Hola ${data?.name},
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                ¡Estás listo para demostrar al mundo que eres el mejor trader del planeta!
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                Tu cuenta demo de GTC ya está creada. Aquí tienes los detalles para acceder:
              </td>
            </tr>

            <!-- Account Info -->
            <tr>
              <td style="padding: 20px 0;">
                <h3 style="color: #b68756; font-size: 18px; margin-bottom: 16px;">Detalles de tu cuenta Demo GTC</h3>
                <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #fdf6ee; font-size: 14px; color: #000; border-radius: 10px;">
                  <tr>
                    <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px;">Moneda de la cuenta</td>
                    <td style="padding: 5px;"><div style="background-color: #fff; padding: 10px 14px; border-radius: 8px;">USD</div></td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600; color: #7c4e00; padding: 12px;">Número de cuenta GTC</td>
                    <td style="padding: 5px;"><div style="background-color: #fff; padding: 10px 14px; border-radius: 8px;">${data?.user}</div></td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600; color: #7c4e00; padding: 12px;">Tu contraseña</td>
                    <td style="padding: 5px;"><div style="background-color: #fff; padding: 10px 14px; border-radius: 8px;">${data?.password}</div></td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600; color: #7c4e00; padding: 12px;">Contraseña de inversionista</td>
                    <td style="padding: 5px;"><div style="background-color: #fff; padding: 10px 14px; border-radius: 8px; border: 2px solid #a076f9;">${data?.invest_password}</div></td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600; color: #7c4e00; padding: 12px;">Plataforma</td>
                    <td style="padding: 5px;"><div style="background-color: #fff; padding: 10px 14px; border-radius: 8px;">MT5</div></td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600; color: #7c4e00; padding: 12px;">Servidor</td>
                    <td style="padding: 5px;"><div style="background-color: #fff; padding: 10px 14px; border-radius: 8px;">GTCGlobalTrade-Server</div></td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- CTA Buttons -->
            <tr>
              <td align="center" style="padding-bottom: 20px;">
                <p style="font-size: 16px; color: #202a6b; font-weight: 600; margin-bottom: 20px;">Accede a tu zona de cliente GTC</p>
                <table cellpadding="0" cellspacing="0" role="presentation">
                  <tr>
                    <td align="center" style="padding: 0 10px;">
                      <a href="https://download.mql5.com/cdn/web/gtc.global.trade/mt5/gtcglobaltrade5setup.exe"
                         style="background-color: #fff; border: 2px solid #b68756; border-radius: 8px; color: #b68756; font-weight: 600; padding: 12px 20px; text-decoration: none;">
                        Cliente GTC para Escritorio
                      </a>
                    </td>
                    <td align="center" style="padding: 0 10px;">
                      <a href="https://download.mql5.com/cdn/mobile/mt5/android?server=GTCGlobalTrade-Server"
                         style="background: linear-gradient(to right, #b68756, #7b6036); border-radius: 8px; color: #fff; font-weight: 600; padding: 12px 20px; text-decoration: none;">
                        Cliente GTC para Móvil
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Help -->
            <tr>
              <td style="font-size:16px;color:#000000;padding-bottom:10px; font-weight: 600">
                ¿Necesitas ayuda?
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                Si tienes alguna duda o necesitas asistencia, contáctanos en <a href="mailto:support@gtcfx.com">support@gtcfx.com</a>. ¡Estamos aquí para ayudarte!
              </td>
            </tr>

            <!-- Signoff -->
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:30px;">
                ¡Mucha suerte y felices operaciones!<br/>
                Tu familia GTC
              </td>
            </tr>

            <!-- Divider -->
            <tr><td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td></tr>

            <!-- Footer -->
            <tr>
              <td align="center" style="font-size: 12px; color: #666666; padding-top: 15px; padding-bottom: 30px;">
                &copy; 2025 GTCVIP – Todos los derechos reservados
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`
};
export const portugueseEmailMT5Template = (data) => {
  return `
  <!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8" />
    <title>Você se registrou na Competição Demo da GTC!</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
    </style>
  </head>
  <body style="margin:0;padding:0;background-color:#ffffff;font-family:'Poppins',sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="padding: 20px;">
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
                Suas Credenciais da Competição GTC
              </td>
            </tr>
            <tr>
              <td align="center" style="font-size:14px;color:#000000;padding-bottom:20px;">
                Reunimos todas as informações necessárias neste e-mail para você começar!
              </td>
            </tr>

            <tr><td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td></tr>

            <!-- Greeting -->
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                Olá ${data?.name},
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                Agora você está pronto para mostrar ao mundo que é o melhor trader do planeta!
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                Sua nova conta demo de negociação GTC foi criada. Veja abaixo como acessá-la:
              </td>
            </tr>

            <!-- Account Info -->
            <tr>
              <td style="padding: 20px 0;">
                <h3 style="color: #b68756; font-size: 18px; margin-bottom: 16px;">Informações da sua Conta Demo GTC</h3>
                <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #fdf6ee; font-size: 14px; color: #000; border-radius: 10px;">
                  <tr>
                    <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px;">Moeda da Conta</td>
                    <td style="padding: 5px;"><div style="background-color: #fff; padding: 10px 14px; border-radius: 8px;">USD</div></td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600; color: #7c4e00; padding: 12px;">Número da Conta GTC</td>
                    <td style="padding: 5px;"><div style="background-color: #fff; padding: 10px 14px; border-radius: 8px;">${data?.user}</div></td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600; color: #7c4e00; padding: 12px;">Sua Senha</td>
                    <td style="padding: 5px;"><div style="background-color: #fff; padding: 10px 14px; border-radius: 8px;">${data?.password}</div></td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600; color: #7c4e00; padding: 12px;">Senha de Investidor</td>
                    <td style="padding: 5px;"><div style="background-color: #fff; padding: 10px 14px; border-radius: 8px; border: 2px solid #a076f9;">${data?.invest_password}</div></td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600; color: #7c4e00; padding: 12px;">Plataforma</td>
                    <td style="padding: 5px;"><div style="background-color: #fff; padding: 10px 14px; border-radius: 8px;">MT5</div></td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600; color: #7c4e00; padding: 12px;">Servidor</td>
                    <td style="padding: 5px;"><div style="background-color: #fff; padding: 10px 14px; border-radius: 8px;">GTCGlobalTrade-Server</div></td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- CTA Buttons -->
            <tr>
              <td align="center" style="padding-bottom: 20px;">
                <p style="font-size: 16px; color: #202a6b; font-weight: 600; margin-bottom: 20px;">Acesse sua Área do Cliente GTC</p>
                <table cellpadding="0" cellspacing="0" role="presentation">
                  <tr>
                    <td align="center" style="padding: 0 10px;">
                      <a href="https://download.mql5.com/cdn/web/gtc.global.trade/mt5/gtcglobaltrade5setup.exe"
                         style="background-color: #fff; border: 2px solid #b68756; border-radius: 8px; color: #b68756; font-weight: 600; padding: 12px 20px; text-decoration: none;">
                        Área do Cliente para Desktop
                      </a>
                    </td>
                    <td align="center" style="padding: 0 10px;">
                      <a href="https://download.mql5.com/cdn/mobile/mt5/android?server=GTCGlobalTrade-Server"
                         style="background: linear-gradient(to right, #b68756, #7b6036); border-radius: 8px; color: #fff; font-weight: 600; padding: 12px 20px; text-decoration: none;">
                        Área do Cliente para Celular
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Help -->
            <tr>
              <td style="font-size:16px;color:#000000;padding-bottom:10px; font-weight: 600">
                Precisa de Ajuda?
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                Se tiver dúvidas ou precisar de assistência, entre em contato conosco via <a href="mailto:support@gtcfx.com">support@gtcfx.com</a>. Estamos aqui para ajudar você!
              </td>
            </tr>

            <!-- Signoff -->
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:30px;">
                Boa sorte e ótimas negociações!<br/>
                Sua Família GTC
              </td>
            </tr>

            <!-- Divider -->
            <tr><td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td></tr>

            <!-- Footer -->
            <tr>
              <td align="center" style="font-size: 12px; color: #666666; padding-top: 15px; padding-bottom: 30px;">
                &copy; 2025 GTCVIP – Todos os direitos reservados
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`
};
export const russianEmailMT5Template = (data) => {
  return `
 <!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Вы зарегистрировались в Демо-турнире GTC!</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
    </style>
  </head>
  <body style="margin:0;padding:0;background-color:#ffffff;font-family:'Poppins',sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="padding: 20px;">
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
                Ваши данные для турнира GTC
              </td>
            </tr>
            <tr>
              <td align="center" style="font-size:14px;color:#000000;padding-bottom:20px;">
                Мы собрали всю необходимую информацию в этом письме, чтобы вы были готовы!
              </td>
            </tr>

            <tr><td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td></tr>

            <!-- Greeting -->
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                Привет, ${data?.name},
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                Вы готовы доказать, что вы лучший трейдер на планете!
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                Ваша новая демо-торговая учетная запись GTC создана. Вот как получить к ней доступ:
              </td>
            </tr>

            <!-- Account Info -->
            <tr>
              <td style="padding: 20px 0;">
                <h3 style="color: #b68756; font-size: 18px; margin-bottom: 16px;">Информация о вашей демо-учетной записи GTC</h3>
                <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #fdf6ee; font-size: 14px; color: #000; border-radius: 10px;">
                  <tr>
                    <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px;">Валюта счета</td>
                    <td style="padding: 5px;"><div style="background-color: #fff; padding: 10px 14px; border-radius: 8px;">USD</div></td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600; color: #7c4e00; padding: 12px;">Номер торгового счета GTC</td>
                    <td style="padding: 5px;"><div style="background-color: #fff; padding: 10px 14px; border-radius: 8px;">${data?.user}</div></td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600; color: #7c4e00; padding: 12px;">Ваш пароль</td>
                    <td style="padding: 5px;"><div style="background-color: #fff; padding: 10px 14px; border-radius: 8px;">${data?.password}</div></td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600; color: #7c4e00; padding: 12px;">Инвесторский пароль</td>
                    <td style="padding: 5px;"><div style="background-color: #fff; padding: 10px 14px; border-radius: 8px; border: 2px solid #a076f9;">${data?.invest_password}</div></td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600; color: #7c4e00; padding: 12px;">Платформа</td>
                    <td style="padding: 5px;"><div style="background-color: #fff; padding: 10px 14px; border-radius: 8px;">MT5</div></td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600; color: #7c4e00; padding: 12px;">Имя сервера</td>
                    <td style="padding: 5px;"><div style="background-color: #fff; padding: 10px 14px; border-radius: 8px;">GTCGlobalTrade-Server</div></td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- CTA Buttons -->
            <tr>
              <td align="center" style="padding-bottom: 20px;">
                <p style="font-size: 16px; color: #202a6b; font-weight: 600; margin-bottom: 20px;">Перейти в Личный Кабинет GTC</p>
                <table cellpadding="0" cellspacing="0" role="presentation">
                  <tr>
                    <td align="center" style="padding: 0 10px;">
                      <a href="https://download.mql5.com/cdn/web/gtc.global.trade/mt5/gtcglobaltrade5setup.exe"
                         style="background-color: #fff; border: 2px solid #b68756; border-radius: 8px; color: #b68756; font-weight: 600; padding: 12px 20px; text-decoration: none;">
                        Версия для ПК
                      </a>
                    </td>
                    <td align="center" style="padding: 0 10px;">
                      <a href="https://download.mql5.com/cdn/mobile/mt5/android?server=GTCGlobalTrade-Server"
                         style="background: linear-gradient(to right, #b68756, #7b6036); border-radius: 8px; color: #fff; font-weight: 600; padding: 12px 20px; text-decoration: none;">
                        Мобильная версия
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Help -->
            <tr>
              <td style="font-size:16px;color:#000000;padding-bottom:10px; font-weight: 600">
                Нужна помощь?
              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                Если у вас есть вопросы или требуется помощь, пожалуйста, свяжитесь с нами по адресу <a href="mailto:support@gtcfx.com">support@gtcfx.com</a>. Мы всегда рады помочь!
              </td>
            </tr>

            <!-- Signoff -->
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:30px;">
                Удачи в торговле!<br/>
                Ваша команда GTC
              </td>
            </tr>

            <!-- Divider -->
            <tr><td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td></tr>

            <!-- Footer -->
            <tr>
              <td align="center" style="font-size: 12px; color: #666666; padding-top: 15px; padding-bottom: 30px;">
                &copy; 2025 GTCVIP – Все права защищены
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`
};

export const englishEmailMT5Template = (data) => {
  return `
 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>You’ve Registered for the GTC Demo Competition
</title>
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
                <img src="https://gtcfx-bucket.s3.ap-southeast-1.amazonaws.com/logo-email.jpg" alt="GTC Logo" style="width: 160px;" />
              </td>
            </tr>

            <!-- Heading -->
            <tr>
              <td align="center" style="font-size:20px;font-weight:600;color:#000000;padding-bottom:10px;">
               Your GTC Tournament Credentials



              </td>
            </tr>
            <tr>
              <td align="center" style="font-size:14px;color:#000000;padding-bottom:20px;">
                We’ve added all your credentials into this email so that you’re ready!
              </td>
            </tr>

            <tr>
  <td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td>
</tr>

            <!-- Greeting & OTP -->
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
                Hi ${data?.name},
              </td>
            </tr>
             <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
             You’re now ready to take on the world and prove that you really are the best trader on earth!
              </td>
            </tr>
             <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
            Your brand-new GTC Demo Trading Account has been created and here’s how you access it.

              </td>
            </tr>
            
        <!-- Account Info Box -->
<!-- Account Info Box -->
<tr>
  <td style="padding: 20px 0;">
    <h3 style="color: #b68756; font-size: 18px; margin: 0 0 16px 0;">Your GTC Demo Trading Account Info</h3>
    <table width="100%" cellpadding="0" cellspacing="0" style="border-radius: 10px; background-color: #fdf6ee; font-size: 14px; color: #000;">
      <tr>
        <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">Account Currency</td>
        <td style="padding: 5px;">
          <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px;">USD</div>
        </td>
      </tr>
      <tr>
        <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">GTC Trading Account Number</td>
        <td style="padding: 5px;">
          <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px;">${data?.user}</div>
        </td>
      </tr>
      <tr>
        <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">Your Password</td>
        <td style="padding: 5px;">
          <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px;">${data?.password}</div>
        </td>
      </tr>
      <tr>
        <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">Investor Password</td>
        <td style="padding: 5px;">
          <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px; border: 2px solid #a076f9;">${data?.invest_password}</div>
        </td>
      </tr>
      <tr>
        <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">Trading Platform</td>
        <td style="padding: 5px;">
          <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px;">MT5</div>
        </td>
      </tr>
      <tr>
        <td width="45%" style="font-weight: 600; color: #7c4e00; padding: 12px 12px;">Server Name</td>
        <td style="padding: 5px;">
          <div style="background-color: #ffffff; padding: 10px 14px; border-radius: 8px;">GTCGlobalTrade-Server</div>
        </td>
      </tr>
    </table>
  </td>
</tr>


<!-- CTA Buttons -->
<tr>
  <td align="center" style="padding: 0px 0 20px 0;">
    <p style="font-size: 16px; color: #202a6b; font-weight: 600; margin-bottom: 20px;">Access Your GTC Client Zone</p>
    <table cellpadding="0" cellspacing="0" role="presentation">
      <tr>
        <td align="center" style="padding: 0 10px;">
          <a href="https://download.mql5.com/cdn/web/gtc.global.trade/mt5/gtcglobaltrade5setup.exe" style="background-color: #ffffff; border: 2px solid #b68756; border-radius: 8px; color: #b68756; font-weight: 600; padding: 12px 20px; text-decoration: none; display: inline-block;">
            Desktop GTC Client Zone
          </a>
        </td>
        <td align="center" style="padding: 0 10px;">
          <a href="https://download.mql5.com/cdn/mobile/mt5/android?server=GTCGlobalTrade-Server" style="background: linear-gradient(to right, #b68756, #7b6036); border-radius: 8px; color: #ffffff; font-weight: 600; padding: 12px 20px; text-decoration: none; display: inline-block;">
            Mobile GTC Client Zone
          </a>
        </td>
      </tr>
    </table>
  </td>
</tr>

          <tr>
              <td style="font-size:16px;color:#000000;padding-bottom:10px; font-weight: 600">


Need Help?
              </td>
            </tr>
               <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:10px;">
           If you’ve got any questions or need further assistance, please don’t hesitate to contact us at <a href="mailto:support@gtcfx.com">support@gtcfx.com</a> . We are here to support you and ensure your experience with us is the best you’ve ever experienced.

              </td>
            </tr>
            
            <!-- Signoff -->
            <tr>
              <td style="font-size:16px;color:#000000;padding-bottom:10px; font-weight: 600;">
                <br>
             Best Regard,

              </td>
            </tr>
            <tr>
              <td style="font-size:14px;color:#000000;padding-bottom:30px;">
                You’re the best, and soon, you’ll show the world you are!
<br>
                Your GTC Family

              </td>
            </tr>

             <tr>
  <td style="border-top: 2px solid #e0e0e0; padding: 15px 0;"></td>
</tr>

            <!-- Contact Info -->
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

            <!-- Legal Footer -->
<tr>
  <td style="font-size: 11px; color: #666; padding: 20px 0px; line-height: 1.5;">
  <strong>Your login account and password must be kept confidential at all times. Passwords should never be shared or exposed to others. You should never let anyone else access your GTC trading account, or do anything else that might jeopardize the security of your account.</strong><br/><br/>
    <strong>You’re responsible for the confidentiality and use of all IDs, passwords, and other security data, methods, and devices in connection with the GTC client zone and the GTC trading platform(s).</strong> 
    <br/><br/>
    This website is owned and operated by GTC Global Ltd, a limited company incorporated in Mauritius (company number: C188049) and licensed by the Financial Services Commission, Mauritius (No. GB22200292) to trade as an SEC-2.1B Investment Dealer. Registered Address: Cyberati Lounge, Ground Floor, The Catalyst, Silicon Avenue, 40 Cybercity, 72201 Ebene, Republic of Mauritius. The financial services and products promoted on this website are offered by GTC Global Ltd and GTC Global Trade Capital Co. Limited, a company authorised by the Vanuatu Financial Services Commission of the Republic of Vanuatu, Company License Number: 40354.
    <br/><br/>
    <stong style="font-weight: 600p; color: #000;">GTC Global Ltd and GTC Global Trade Capital Co. Limited</stong> belong to the GTC Financial Group, which consists of a group of entities across the globe.
    <br/><br/>
    Investing in derivative products carries significant risks and may not be suitable for all investors. Leveraging in these instruments can increase the level of risk and potential loss exposure. Before making any decision to engage in foreign exchange trading or CFDs, it is essential to carefully assess your investment objectives, level of experience, and risk tolerance. You should only invest funds that you can afford to lose. We strongly encourage you to educate yourself thoroughly about the associated risks and, if you have any questions, seek advice from an independent financial or tax advisor.
    <br/><br/>
    <stong style="font-weight: 600p; color: #000;">GTC Global Ltd and GTC Global Trade Capital Co. Limited</stong> do not provide services to individuals residing in specific jurisdictions and/or jurisdictions where distribution of such services would be contrary to local law or regulation.
    <br/><br/>
    <strong style="font-weight: 600p; color: #000;">Other Group Entities:</strong><br/>
    The financial products and services offered on this website are <u>NOT</u> provided by the following group entities, and no recourse against the following entities is available. If you are interested in the products and services offered by each of the following entities, please visit their respective websites.
    <br/><br/>
    <strong style="font-weight: 600p; color: #000;">GTC Group LLC-FZ</strong> is a holding company incorporated in Dubai, United Arab Emirates with Business License Number: 2311147.01. Its registered office is at Business Center 1, M Floor, Meydan Hotel, Nad Al Sheba, Dubai, United Arab Emirates.
    <br/><br/>
    <strong style="font-weight: 600p; color: #000;">GTC Multi Trading DMCC</strong> is a limited company licensed and incorporated under the laws of the Dubai Multi Commodities Centre (No. DMCC-312687) and licensed by the Securities and Commodities Authority, United Arab Emirates (No. 202200000007) to practice the activity of Commodity Brokerage - Trading and Clearing. Registered Address: Unit No: 1501, 1 Lake Plaza, Plot No: JLT-PH2-T2A, Jumeirah Lakes Towers, Dubai, United Arab Emirates.
    <br/><br/>
    Each of the entities within the GTC Financial Group is managed separately. The financial products and services offered on this website are ONLY provided by GTC Global Ltd and GTC Global Trade Capital Co. Limited.
    <br/><br/>
    All trademarks are the property of their respective owners. All rights reserved. GTC Global Ltd is part of the GTC Financial Group, which consists of a group of entities across the globe.
    <br/><br/>
    <strong>Risk Warning:</strong> Trading leveraged products such as forex and derivatives may not be suitable for all investors as they carry a high degree of risk to your capital. Please ensure that you fully understand the risks involved and seek independent advice if necessary.
  </td>
</tr>

<!-- Social Media Footer -->
<tr>
  <td style="padding-top: 30px; text-align: center;">
    <table align="center" cellpadding="0" cellspacing="0">
      <tr>
        <td style="padding: 0 5px;">
          <a href="https://www.facebook.com/GTCFXGlobalTradeCapital" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="20" height="20" style="display:block;">
          </a>
        </td>
        <td style="padding: 0 5px;">
          <a href="https://x.com/GTC_fx" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png" alt="X" width="20" height="20" style="display:block;">
          </a>
        </td>
        <td style="padding: 0 5px;">
          <a href="https://www.youtube.com/channel/UCnKWakjm1b9Bm63xgwNFXHA" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" width="20" height="20" style="display:block;">
          </a>
        </td>
        <td style="padding: 0 5px;">
          <a href="https://linkedin.com/company/gtcfx-official" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" width="20" height="20" style="display:block;">
          </a>
        </td>
        <td style="padding: 0 5px;">
          <a href="https://www.instagram.com/gtcfxofficial/" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" width="20" height="20" style="display:block;">
          </a>
        </td>
        <td style="padding: 0 5px;">
          <a href="https://api.whatsapp.com/send/?phone=448000488461&text&type=phone_number&app_absent=0" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" width="20" height="20" style="display:block;">
          </a>
        </td>
        <td style="padding: 0 5px;">
          <a href="https://t.me/gtc_vip_signal" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="Telegram" width="20" height="20" style="display:block;">
          </a>
        </td>
        <td style="padding: 0 5px;">
          <a href="https://www.tiktok.com/@gtcgroup_official" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" alt="TikTok" width="20" height="20" style="display:block;">
          </a>
        </td>
      </tr>
    </table>
  </td>
</tr>

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
</html>
 `
};
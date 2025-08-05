const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'oplevish66@gmail.com',         // заміни на свій email
    pass: 'hans nsxi scff esgt'             // пароль додатку з Gmail
  }
});

const mailOptions = {
  from: '"Фармаско Маркетинг" <oplevish66@gmail.com>',   // email відправника
  to: 'pavlo@example.com',                               // твоє тестове email
  subject: 'Тестове завдання на тиждень',
  html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.5;">
      <p>Добрий день, Павло,</p>
      <p>На цьому тижні Вам необхідно написати відгук за наступним посиланням:</p>
      <a href="https://example.com" style="display: inline-block; padding: 10px 20px; background-color: #2D9CDB; color: white; text-decoration: none; border-radius: 4px;">Надіслати відгук</a>
      <p style="margin-top: 20px;">З повагою,<br>команда маркетингу компанії Фармаско</p>
    </div>
  `
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('❌ Помилка надсилання:', error);
  } else {
    console.log('✅ Лист надіслано успішно:', info.response);
  }
});

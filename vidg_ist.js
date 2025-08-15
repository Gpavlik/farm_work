const nodemailer = require('nodemailer');
const cron = require('node-cron');

// Дані з email ↔ ім'я
const users = { "i.luzan@pharmasco.com": "Інга Лузан",
  "l.prysiazhniuk@pharmasco.com": "Людмила Присяжнюк",
  "v.bilous@pharmasco.com": "Вадим Білоус",
  "y.levchenko@pharmasco.com": "Єлизавета Левченко",
  "o.krasnikov@pharmasco.com": "Олександр Красніков",
  "a.onischuk@pharmasco.com": "Антоніна Онищук",
  "m.pohribna@pharmasco.com": "Марина Погрібна",
  "n.pylypchuk@pharmasco.com": "Наталія Пилипчук",
  "a.haievska@pharmasco.com": "Анна Гаєвська",
  "i.bohuslavets@pharmasco.com": "Ірина Богуславець",
  "m.krishtalyan@pharmasco.com": "Мілена Криштальян",
  "k.skriabina@pharmasco.com": "Катерина Скрябіна",
  "a.alekseenko@pharmasco.com": "Антон Алєксєєнко",
  "a.priadko@pharmasco.com": "Анастасія Прядко",
  "o.hovorukha@pharmasco.com": "Олена Говоруха",
  "t.demus@pharmasco.com": "Тетяна Демус",
  "o.dykonenko@pharmasco.com": "Оксана Диконенко",
  "v.rainov@pharmasco.com": "Валерій Райнов",
  "h.bilousova@pharmasco.com": "Ганна Білоусова",
  "s.ratushnenko@pharmasco.com": "Сергій Ратушненко",
  "o.leonova@pharmasco.com": "Ольга Леонова",
  "t.sazonova@pharmasco.com": "Тетяна Сазонова",
  "i.babenko@pharmasco.com": "Ілона Бабенко",
  "i.melnychuk@pharmasco.com": "Ірина Мельничук",
  "t.klimenko@pharmasco.com": "Тетяна Клименко",
  "i.pryhodko@pharmasco.com": "Ірина Приходько",
  "d.zahorodnyy@pharmasco.com": "Дем'ян Загородній",
  "k.vyderko@pharmasco.com": "Катерина Видерко", };

// Завдання на тижні
const taskData = {"Інга Лузан": {33: "https://maps.app.goo.gl/r8w8FmJxcS2Ex1gB9", 42: "https://apteka.rozetka.com.ua/ua/citolab-4820235550561/p520404669/", 49: "https://makeup.com.ua/ua/product/1389730/" },
        "Людмила Присяжнюк": {32: "https://apteka.rozetka.com.ua/ua/cito_test_4820235550141/p311942798/", 38: "https://makeup.com.ua/ua/product/914944/", 46: "https://apteka.rozetka.com.ua/ua/cito_test_4820235550035/p311952710/" },
        "Вадим Білоус": {33: "https://liki24.com/uk/p/cito-test-step-bystryj-test-dlya-diagnostiki-streptokokkovoj-anginy-ista-rc81/", 36: "https://apteka.rozetka.com.ua/ua/cito_test_4820235550110/p311943908/", 39: "https://apteka.rozetka.com.ua/ua/cito_test_4820235550219/p311954609/" },
        "Олександр Красніков": {32: "https://maps.app.goo.gl/r8w8FmJxcS2Ex1gB9", 37: "https://apteka.rozetka.com.ua/ua/cito_test_4820235550097/p311912678/", 41: "https://apteka.rozetka.com.ua/ua/cito_test_4820235550219/p311954609/" },
        "Єлизавета Левченко": {34: "https://apteka.rozetka.com.ua/ua/ultra_4820058671115/p311961329/",39:  "https://makeup.com.ua/ua/product/1389751/", 43:  "https://apteka.rozetka.com.ua/ua/cito_test_4820235550226/p311954732/" },
        "Антоніна Онищук": {34: "https://maps.app.goo.gl/r8w8FmJxcS2Ex1gB9", 41: "https://apteka.rozetka.com.ua/ua/cito_test_4820235550141/p311942798/", 46: "https://makeup.com.ua/ua/product/1467983/" },
        "Марина Погрібна": {35: "https://apteka.rozetka.com.ua/ua/duet_4820058670910/p311959100/", 36: "https://maps.app.goo.gl/r8w8FmJxcS2Ex1gB9", 42: "https://makeup.com.ua/ua/product/1389751/", 48: "https://makeup.com.ua/ua/product/1389734/" },
        "Наталія Пилипчук": {37: "https://makeup.com.ua/ua/product/1491989/", 38: "https://maps.app.goo.gl/r8w8FmJxcS2Ex1gB9", 44: "https://makeup.com.ua/ua/product/1389730/" },
        "Анна Гаєвська": {34: "https://apteka.rozetka.com.ua/ua/citolab_4820058671191/p311944658/", 37: "https://maps.app.goo.gl/r8w8FmJxcS2Ex1gB9", 40: "https://apteka.rozetka.com.ua/ua/cito_test_4820235550011/p311951960/", 50: "https://makeup.com.ua/ua/product/1389730/" },
        "Ірина Богуславець": {37: "https://apteka.rozetka.com.ua/ua/cito_test_4820235550011/p311951960/", 38: "https://apteka.rozetka.com.ua/ua/citolab_4820235550059/p311947322/", 39: "https://maps.app.goo.gl/r8w8FmJxcS2Ex1gB9", 46: "https://apteka.rozetka.com.ua/ua/citolab-4820235550578/p520404909/" },
        "Мілена Криштальян": {34: "https://liki24.com/uk/p/cito-test-hcv-test-sistema-dlya-opredeleniya-virusa-gepatita-c-test/review/", 40: "https://maps.app.goo.gl/r8w8FmJxcS2Ex1gB9", 48: "https://apteka.rozetka.com.ua/ua/citolab-4820235550561/p520404669/" },
        "Катерина Скрябіна": {36: "https://apteka.rozetka.com.ua/ua/sniper_4820058671139/p311958344/", 41: "https://maps.app.goo.gl/r8w8FmJxcS2Ex1gB9", 51: "розетка Citolab ph №1" },
        "Антон Алєксєєнко": {42: "https://makeup.com.ua/ua/product/1389697/", 43: "https://apteka.rozetka.com.ua/ua/sniper_4820058671139/p311958344/", 50: "https://maps.app.goo.gl/r8w8FmJxcS2Ex1gB9", 51: "https://apteka.rozetka.com.ua/ua/cito_test_4820235550141/p311942798/" },
        "Анастасія Прядко": {39: "https://apteka.rozetka.com.ua/ua/cito_test_4820235550035/p311952710/", 42: "https://maps.app.goo.gl/r8w8FmJxcS2Ex1gB9", 46: "https://apteka.rozetka.com.ua/ua/citolab-4820235550578/p520404909/" },
        "Олена Говоруха": {35: "https://liki24.com/uk/p/test-poloska-dlya-analiza-mochi-citolab-k-50-dfi/", 44: "https://apteka.rozetka.com.ua/ua/sniper_4820058671122/p311958329/", 45: "https://maps.app.goo.gl/r8w8FmJxcS2Ex1gB9", 46: "https://liki24.com/uk/p/vaginalnyj-ph-test-citolab-test-poloska-dfi/" },
        "Тетяна Демус": {35: "https://liki24.com/uk/p/vaginalnyj-ph-test-citolab-test-poloska-25/", 40: "https://apteka.rozetka.com.ua/ua/cito_test_4820235550011/p311951960/", 44: "https://maps.app.goo.gl/r8w8FmJxcS2Ex1gB9", 49: "make up Citolab K №25" },
        "Оксана Диконенко": {35: "https://apteka.rozetka.com.ua/ua/sniper_4820058671122/p311958329/", 42: "https://makeup.com.ua/ua/product/1389738/", 46: "https://maps.app.goo.gl/r8w8FmJxcS2Ex1gB9", 47: "розетка Citolab ph №1" },
        "Валерій Райнов": {38: "https://liki24.com/uk/p/cito-test-hbsag-test-sistema-dlya-vyyavleniya-hbsag-virusa-gepatita-b/", 47: "https://maps.app.goo.gl/r8w8FmJxcS2Ex1gB9", 49: "https://makeup.com.ua/ua/product/1389806/" },
        "Ганна Білоусова": {34: "https://apteka.rozetka.com.ua/ua/cito_test_4820235550028/p311954819/", 37: "https://makeup.com.ua/ua/product/1389810/", 39: "https://apteka.rozetka.com.ua/ua/cito_test_4820235550103/p311951528/", 48: "https://maps.app.goo.gl/r8w8FmJxcS2Ex1gB9" },
        "Сергій Ратушненко": {38: "https://liki24.com/uk/p/test-mnogoprofilnyj-do-narkotikov-v-moche-sniper10-amp-mor-coc-met-mtd-mdma-thc-k2-tra-bu/", 44: "https://liki24.com/uk/p/cito-test-rota-test-sistema-dlya-opredeleniya-antigenov-rotavirusov-test-farmasko-ooo/", 49: "https://maps.app.goo.gl/r8w8FmJxcS2Ex1gB9", 52: "https://apteka.rozetka.com.ua/ua/cito_test_4820235550141/p311942798/" },
        "Ольга Леонова": {36: "https://makeup.com.ua/ua/product/914938/", 45: "https://liki24.com/uk/p/test-mnogoprofilnyj-do-narkotikov-v-moche-sniper5-mor-coc-amp-met-thc/", 50: "https://maps.app.goo.gl/r8w8FmJxcS2Ex1gB9" },
        "Тетяна Сазонова": {32: "https://liki24.com/uk/p/cito-test-rota-test-sistema-dlya-opredeleniya-antigenov-rotavirusov-test-farmasko-ooo/", 41: "https://makeup.com.ua/ua/product/914952/", 51: "https://liki24.com/uk/p/cito-test-hpylori-ag-test-dlya-opredeleniya-antigenov-hpylori-certest-biotec/", 52: "https://maps.app.goo.gl/r8w8FmJxcS2Ex1gB9" },
        "Ілона Бабенко": {42: "https://makeup.com.ua/ua/product/1389735/", 47: "https://liki24.com/uk/p/cito-test-hpylori-ag-test-dlya-opredeleniya-antigenov-hpylori-certest-biotec/", 50: "https://maps.app.goo.gl/r8w8FmJxcS2Ex1gB9" },
        "Тетяна Романовська": {35: "https://maps.app.goo.gl/r8w8FmJxcS2Ex1gB9", 36: "https://makeup.com.ua/ua/product/1389749/", 39: "https://makeup.com.ua/ua/product/1389734/", 42: "https://apteka.rozetka.com.ua/ua/secret_4820058670996/p311971184/" },
        "Ірина Мельничук": {33: "https://makeup.com.ua/ua/product/914916/", 36: "https://makeup.com.ua/ua/product/1400581/", 41: "https://makeup.com.ua/ua/product/914916/" },
        "Тетяна Клименко": {37: "https://apteka.rozetka.com.ua/ua/cito_test_4820235550028/p311954819/", 43: "https://maps.app.goo.gl/r8w8FmJxcS2Ex1gB9", 50: "https://liki24.com/uk/p/test-ultra-dlya-opredeleniya-beremennosti-v-moche-poloska-ultra-abon-biopharm/" },
        "Ірина Приходько": {34: "https://liki24.com/uk/p/test-poloski-solo-mini-dlya-opredeleniya-ovulyacii-5/", 42: "https://makeup.com.ua/ua/product/1400581/", 46: "https://apteka.rozetka.com.ua/ua/cito_test_4820235550219/p311954609/" },
        "Дем`ян Загородний": {32: "https://maps.app.goo.gl/r8w8FmJxcS2Ex1gB9", 36: "https://apteka.rozetka.com.ua/ua/cito_test_4820235550035/p311952710/", 40: "https://liki24.com/uk/p/test-dlya-opredeleniya-beremennosti-v-moche-poloska-secret-2-abon-biopharm/" },
        "Катерина Видерко": {33: "https://apteka.rozetka.com.ua/ua/cito_test_4820235550219/p311954609/", 35: "https://maps.app.goo.gl/r8w8FmJxcS2Ex1gB9", 49: "https://apteka.rozetka.com.ua/ua/cito_test_4820235550226/p311954732/" }
    };

// Побудова employeeData
const employeeData = {};
for (const [email, rawName] of Object.entries(users)) {
  const normalizedName = rawName.trim();
  employeeData[email] = {
    name: normalizedName,
    tasks: taskData[normalizedName] || {}
  };
}

// Налаштування транспорту
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'oplevish66@gmail.com',
    pass: 'hans nsxi scff esgt'
  }
});

// 📤 Функція для надсилання листів
function sendWeeklyEmails() {
  const currentWeek = getISOWeek(new Date());
  for (const [email, { name, tasks }] of Object.entries(employeeData)) {
    const taskLink = tasks[currentWeek];
    if (!taskLink) continue;

    const mailOptions = {
      from: '"Фармаско Маркетинг" <oplevish66@gmail.com>',
      to: email,
      subject: `Завдання на тиждень ${currentWeek}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <p>Добрий день, <strong>${name}</strong>,</p>
          <p>На цьому тижні Вам необхідно написати відгук за наступним посиланням:</p>
          <a href="${taskLink}" style="display: inline-block; padding: 10px 20px; background-color: #68ff63ff; color: white; text-decoration: none; border-radius: 10px;">Надіслати відгук</a>
          <p style="margin-top: 20px;">З повагою,<br>команда маркетингу компанії Фармаско</p>
        </div>
      `
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(`Помилка надсилання для ${name}:`, error);
      } else {
        console.log(`Лист надіслано ${name}: ${info.response}`);
      }
    });
  }
}

// Альтернатива для визначення ISO week (якщо немає .getWeek())
function getISOWeek(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}

// Автоматичний запуск щопонеділка о 9:00
cron.schedule('0 9 * * 1', sendWeeklyEmails);

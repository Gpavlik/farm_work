const users = {
  "P.yyy@lkj.com": "Оберіть менеджера",
  "P.xxx@lkj.com": "Оберіть співробітника",
  "i.luzan@pharmasco.com": "Інга Лузан",
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
  "k.vyderko@pharmasco.com": "Катерина Видерко",
  "y.holovan@pharmasco.com": "Ярослав Головань",
  "s.nemesh@pharmasco.com": "Станіслав Нємеш",
  "o.polishchuk@pharmasco.com": "Олена Поліщук",
  "d.minenko@pharmasco.com": "Данило Міненко",
  "d.prykhodko@pharmasco.com": "Дмитро Приходько",
  "a.volaniuk@pharmasco.com": "Олександр Воланюк",
  "v.tuluchenko@pharmasco.com": "Вероніка Тулученко",
  "i.shlapak@pharmasco.com": "Інна Шлапак",
  "o.levchenko@pharmasco.com": "Оксана Левченко",
  "p.hrytsenko@pharmasco.com": "Павло Гриценко",
  "s.komashko@pharmasco.com": "Сергій Комашко",
  "u.oleynik@pharmasco.com": "Юлія Олійник",
  "v.skopichenko@pharmasco.com": "Вадим Скопіченко",
  "svitlanaskopychenko@gmail.com": "Світлана Скопиченко",
  "g.kuznetsova@pharmasco.com": "Галина Кузнецова"
};

const managerToEmployees = {
  'P.yyy@lkj.com' : ['P.xxx@lkj.com'],
  'a.onischuk@pharmasco.com': ['m.pohribna@pharmasco.com', 'n.pylypchuk@pharmasco.com', 'a.haievska@pharmasco.com', 'i.bohuslavets@pharmasco.com'],
  'i.luzan@pharmasco.com': ['l.prysiazhniuk@pharmasco.com', 'v.bilous@pharmasco.com', 'y.levchenko@pharmasco.com', 'o.krasnikov@pharmasco.com'],
  'm.krishtalyan@pharmasco.com': ['k.skriabina@pharmasco.com', 'a.alekseenko@pharmasco.com', 'a.priadko@pharmasco.com', 'o.hovorukha@pharmasco.com', 't.demus@pharmasco.com', 'o.dykonenko@pharmasco.com'],
  'v.rainov@pharmasco.com': ['h.bilousova@pharmasco.com', 's.ratushnenko@pharmasco.com', 'o.leonova@pharmasco.com', 't.sazonova@pharmasco.com'],
  'i.babenko@pharmasco.com': ['i.melnychuk@pharmasco.com', 't.klimenko@pharmasco.com', 'i.pryhodko@pharmasco.com', 'd.zahorodnyy@pharmasco.com', 'k.vyderko@pharmasco.com'],
  'y.holovan@pharmasco.com': ['i.luzan@pharmasco.com','l.prysiazhniuk@pharmasco.com', 'v.bilous@pharmasco.com', 'y.levchenko@pharmasco.com', 'o.krasnikov@pharmasco.com', 'a.onischuk@pharmasco.com', 'm.pohribna@pharmasco.com', 'n.pylypchuk@pharmasco.com', 'a.haievska@pharmasco.com', 'i.bohuslavets@pharmasco.com', 'm.krishtalyan@pharmasco.com', 'k.skriabina@pharmasco.com', 'a.alekseenko@pharmasco.com', 'a.priadko@pharmasco.com', 'o.hovorukha@pharmasco.com', 't.demus@pharmasco.com', 'o.dykonenko@pharmasco.com', 'v.rainov@pharmasco.com', 'h.bilousova@pharmasco.com', 's.ratushnenko@pharmasco.com', 'o.leonova@pharmasco.com', 't.sazonova@pharmasco.com', 'i.babenko@pharmasco.com', 'i.melnychuk@pharmasco.com', 't.klimenko@pharmasco.com', 'i.pryhodko@pharmasco.com', 'd.zahorodnyy@pharmasco.com', 'k.vyderko@pharmasco.com'],
  'p.hrytsenko@pharmasco.com': ['i.luzan@pharmasco.com','l.prysiazhniuk@pharmasco.com', 'v.bilous@pharmasco.com', 'y.levchenko@pharmasco.com', 'o.krasnikov@pharmasco.com', 'a.onischuk@pharmasco.com', 'm.pohribna@pharmasco.com', 'n.pylypchuk@pharmasco.com', 'a.haievska@pharmasco.com', 'i.bohuslavets@pharmasco.com', 'm.krishtalyan@pharmasco.com', 'k.skriabina@pharmasco.com', 'a.alekseenko@pharmasco.com', 'a.priadko@pharmasco.com', 'o.hovorukha@pharmasco.com', 't.demus@pharmasco.com', 'o.dykonenko@pharmasco.com', 'v.rainov@pharmasco.com', 'h.bilousova@pharmasco.com', 's.ratushnenko@pharmasco.com', 'o.leonova@pharmasco.com', 't.sazonova@pharmasco.com', 'i.babenko@pharmasco.com', 'i.melnychuk@pharmasco.com', 't.klimenko@pharmasco.com', 'i.pryhodko@pharmasco.com', 'd.zahorodnyy@pharmasco.com', 'k.vyderko@pharmasco.com']
};

const SupervisorToManager = {

  'y.holovan@pharmasco.com': ['i.luzan@pharmasco.com', 'a.onischuk@pharmasco.com', 'm.krishtalyan@pharmasco.com','v.rainov@pharmasco.com', 'i.babenko@pharmasco.com'],
  'p.hrytsenko@pharmasco.com': ['i.luzan@pharmasco.com', 'a.onischuk@pharmasco.com', 'm.krishtalyan@pharmasco.com','v.rainov@pharmasco.com', 'i.babenko@pharmasco.com']
}
const users = {
  "P.yyy@lkj.com": "Оберіть менеджера",
  "P.xxx@lkj.com": "Оберіть співробітника",
  "o.krasnikov@pharmasco.com": "Олександр Красніков",
  "m.pohribna@pharmasco.com": "Марина Погрібна",
  "i.bohuslavets@pharmasco.com": "Ірина Богуславець",
  "k.skriabina@pharmasco.com": "Катерина Скрябіна",
  "a.alekseenko@pharmasco.com": "Антон Алєксєєнко",
  "t.demus@pharmasco.com": "Тетяна Демус",
  "o.leonova@pharmasco.com": "Ольга Леонова",
  "t.sazonova@pharmasco.com": "Тетяна Сазонова",
  "i.babenko@pharmasco.com": "Ілона Бабенко",
  "i.melnychuk@pharmasco.com": "Ірина Мельничук",
  "t.klimenko@pharmasco.com": "Тетяна Клименко",
  "i.pryhodko@pharmasco.com": "Ірина Приходько",
  "d.zahorodnyy@pharmasco.com": "Дем'ян Загородній",
  "t.romanovska@pharmasco.com": "Тетяна Романовська",
  "m.kulynska@pharmasco.com": "Мар'яна Кулинська",
  "o.polishchuk@pharmasco.com": "Олена Поліщук",
  "d.prykhodko@pharmasco.com": "Дмитро Приходько",
  "a.volaniuk@pharmasco.com": "Олександр Волянюк",
  "v.tuluchenko@pharmasco.com": "Вероніка Тулученко",
  "i.shlapak@pharmasco.com": "Інна Шлапак",
  "o.levchenko@pharmasco.com": "Оксана Левченко",
  "p.hrytsenko@pharmasco.com": "Павло Гриценко",
  "u.oleynik@pharmasco.com": "Юлія Олійник",
  "v.skopichenko@pharmasco.com": "Вадим Скопіченко",
  "m.skopichenko@pharmasco.com": "Микола Скопіченко",
  "s.skopychenko@pharmasco.com": "Світлана Скопиченко",
  "g.kuznetsova@pharmasco.com": "Галина Кузнецова",
  "v.popadiuk@pharmasco.com": "Вікторія Попадюк",
  "v.torishnyak@pharmasco.com": "Віталій Торішняк",
  "t.yakovets@pharmasco.com": "Тетяна Яковець",
  "y.bebko@pharmasco.com": "Юрій Бебко",
  "v.haptenko@pharmasco.com": "Віталій Гаптенко"
};

const managerToEmployees = {
  'P.yyy@lkj.com' : ['P.xxx@lkj.com'],
  'a.volaniuk@pharmasco.com': ['m.pohribna@pharmasco.com', 'i.bohuslavets@pharmasco.com','a.alekseenko@pharmasco.com', 't.demus@pharmasco.com', 'i.babenko@pharmasco.com', 't.sazonova@pharmasco.com', 'i.melnychuk@pharmasco.com', 't.klimenko@pharmasco.com', 'i.pryhodko@pharmasco.com', 'm.kulynska@pharmasco.com','y.bebko@pharmasco.com'],
  'o.polishchuk@pharmasco.com': [ 'o.krasnikov@pharmasco.com', 't.romanovska@pharmasco.com'],
  'i.luzan@pharmasco.com': ['k.skriabina@pharmasco.com', 'o.leonova@pharmasco.com', 'd.zahorodnyy@pharmasco.com'],
  'i.babenko@pharmasco.com': ['i.melnychuk@pharmasco.com', 't.klimenko@pharmasco.com', 'i.pryhodko@pharmasco.com', 't.romanovska@pharmasco.com', 'm.kulynska@pharmasco.com'],
  'p.hrytsenko@pharmasco.com': ['o.krasnikov@pharmasco.com', 'm.pohribna@pharmasco.com', 'i.bohuslavets@pharmasco.com', 'k.skriabina@pharmasco.com', 'a.alekseenko@pharmasco.com', 't.demus@pharmasco.com', 'o.leonova@pharmasco.com', 't.sazonova@pharmasco.com', 'i.melnychuk@pharmasco.com', 't.klimenko@pharmasco.com', 'i.pryhodko@pharmasco.com', 'd.zahorodnyy@pharmasco.com', 't.romanovska@pharmesco com', 'm.kulynska@pharmasco.com', 'v.haptenko@pharmasco.com', "y.bebko@pharmasco.com"]
};

const SupervisorToManager = {
  'p.hrytsenko@pharmasco.com': ['i.babenko@pharmasco.com', 'a.volaniuk@pharmasco.com', 'o.polishchuk@pharmasco.com'],
  'a.volaniuk@pharmasco.com': ['i.babenko@pharmasco.com']
};
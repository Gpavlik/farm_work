document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Запобігаємо стандартному надсиланню форми
    const email = document.getElementById("emailInput").value;

    const allowedEmails = [
        "i.luzan@pharmasco.com", "l.prysiazhniuk@pharmasco.com", "v.bilous@pharmasco.com", "y.levchenko@pharmasco.com", "o.krasnikov@pharmasco.com",
        "a.onischuk@pharmasco.com", "m.pohribna@pharmasco.com", "s.kucherenko@pharmasco.com",
        "n.pylypchuk@pharmasco.com", "a.haievska@pharmasco.com", "i.bohuslavets@pharmasco.com",
        "m.krishtalyan@pharmasco.com", "k.skriabina@pharmasco.com", "a.alekseenko@pharmasco.com",
        "a.priadko@pharmasco.com", "o.hovorukha@pharmasco.com", "t.demus@pharmasco.com",
        "o.dykonenko@pharmasco.com", "v.rainov@pharmasco.com", "h.bilousova@pharmasco.com",
        "s.ratushnenko@pharmasco.com", "o.leonova@pharmasco.com", "t.sazonova@pharmasco.com",
        "i.babenko@pharmasco.com", "i.melnychuk@pharmasco.com", "t.klimenko@pharmasco.com",
        "i.pryhodko@pharmasco.com", "d.zahorodnyy@pharmasco.com",
        "k.vyderko@pharmasco.com", "y.holovan@pharmasco.com", "s.nemesh@pharmasco.com",
        "o.polishchuk@pharmasco.com", "d.minenko@pharmasco.com", "d.prykhodko@pharmasco.com",
        "a.volaniuk@pharmasco.com", "v.tuluchenko@pharmasco.com", "i.shlapak@pharmasco.com",
        "o.levchenko@pharmasco.com", "p.hrytsenko@pharmasco.com", "s.komashko@pharmasco.com", 
        "u.oleynik@pharmasco.com", "v.skopichenko@pharmasco.com", "svitlanaskopychenko@gmail.com", "g.kuznetsova@pharmasco.com"
    ];

    if (allowedEmails.includes(email)) {
        localStorage.setItem("allowedEmail", email); // Зберігаємо електронну адресу
        window.location.href = "./portfolio.html"; // Перенаправлення на закриту сторінку
    } else {
        alert("Доступ заборонено!");
    }
});

// Автоматичне відкриття посилань для користувачів із збереженою поштою
document.addEventListener("DOMContentLoaded", function() {
    let storedEmail = localStorage.getItem("allowedEmail");
    if (storedEmail && allowedEmails.includes(storedEmail)) {
        window.location.href = "./portfolio.html";
    }
});

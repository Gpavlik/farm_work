document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Зупиняє стандартне надсилання форми
    const email = document.getElementById("emailInput").value;

    const allowedEmails = ["user@example.com", "admin@example.com", "u.oleynik@pharmasco.com"];

    if (allowedEmails.includes(email)) {
        window.location.href = "./portfolio.html"; // Перенаправлення на закриту сторінку
    } else {
        alert("Доступ заборонено!");
    }
});

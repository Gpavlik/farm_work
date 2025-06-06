document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("emailInput").value;

    fetch("/check-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
    })
    .then(response => response.json())
    .then(data => {
        if (data.allowed) {
            window.location.href = "./portfolio.html"; // Перенаправлення на закриту сторінку
        } else {
            alert("Вхід заборонено!");
        }
    })
    .catch(error => console.error("Помилка:", error));
});

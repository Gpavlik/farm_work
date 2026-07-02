document.addEventListener("DOMContentLoaded", function () {
  const email = localStorage.getItem("allowedEmail");
  const GA_MEASUREMENT_ID = "G-5BZZCV5DRK"; // Замінити на свій ідентифікатор

  function applyUserId(nameOrEmail) {
    // Зберігаємо в sessionStorage
    sessionStorage.setItem("activeUserName", nameOrEmail);

    // Передаємо user_id в Google Analytics
    if (typeof gtag === "function") {
      gtag("config", GA_MEASUREMENT_ID, { user_id: nameOrEmail });
      gtag("set", "user_properties", { user_id: nameOrEmail });
    }

    // Відображаємо у футері
    const el = document.getElementById("currentUser");
    if (el) {
      el.textContent = "Ви зайшли як: " + nameOrEmail;
    }

    // Відображаємо привітання в хедері (перенесено сюди)
    const greeting = document.getElementById("greetingMessage");
    if (greeting) {
      greeting.textContent = "Вітаємо, " + nameOrEmail + "! Сьогодні доступні нові курси 👇";
    }
  }

  if (email) {
    fetch("./users.json")
      .then(res => res.json())
      .then(directory => {
        const name = directory[email] || email;
        applyUserId(name);
      })
      .catch(() => {
        applyUserId(email); // Якщо users.json не завантажився
      });
  } else {
    // Якщо email відсутній (наприклад, нова вкладка)
    const cachedName = sessionStorage.getItem("activeUserName");
    if (cachedName) {
      applyUserId(cachedName);
    }
  }

  // ⏱ Час перебування на сторінці
  const entryTime = Date.now();
  window.addEventListener("beforeunload", function () {
    const timeSpent = Math.round((Date.now() - entryTime) / 1000);
    if (typeof gtag === "function") {
      gtag("event", "time_on_page", {
        page_path: window.location.pathname,
        duration_sec: timeSpent
      });
    }
  });

  // 🧭 Трекінг всіх <a> посилань
  document.querySelectorAll("a").forEach(link => {
    const href = link.getAttribute("href");
    if (!href) return;

    let eventType = "link_click";
    let resourceType = "internal";

    if (href.endsWith(".pdf")) {
      eventType = "pdf_opened";
      resourceType = "pdf";
    } else if (href.includes("youtube.com") || href.includes("youtu.be")) {
      eventType = "video_opened";
      resourceType = "video";
    } else if (href.includes("google.com/forms")) {
      eventType = "quiz_opened";
      resourceType = "quiz";
    } else if (href.includes("docs.google.com/document")) {
      eventType = "document_viewed";
      resourceType = "text_doc";
    } else if (href.endsWith(".html")) {
      eventType = "course_view";
      resourceType = "html_page";
    } else if (href.startsWith("http")) {
      resourceType = "external";
    }

    link.addEventListener("click", function () {
      if (typeof gtag === "function") {
        gtag("event", eventType, {
          label: link.textContent.trim(),
          href: href,
          resource_type: resourceType,
          page_path: window.location.pathname
        });
      }
    });
  });
});
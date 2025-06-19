document.addEventListener("DOMContentLoaded", function () {
  const email = localStorage.getItem("allowedEmail");
  const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // Замінити на свій

  if (email) {
    fetch("./users.json")
      .then(res => res.json())
      .then(userDirectory => {
        const name = userDirectory[email] || email;

        // Показуємо ім’я у футері
        const el = document.getElementById("currentUser");
        if (el) {
          el.textContent = "Ви увійшли як: " + name;
        }

        // Перезапускаємо конфігурацію GA з user_id
        gtag("config", GA_MEASUREMENT_ID, {
          user_id: name
        });

        // Додатково передаємо user_properties (опціонально)
        gtag("set", "user_properties", { user_id: name });
      })
      .catch(err => {
        console.warn("Помилка при завантаженні users.json:", err);
        
        // Fallback на email, якщо щось пішло не так
        gtag("config", GA_MEASUREMENT_ID, {
          user_id: email
        });

        gtag("set", "user_properties", { user_id: email });

        const el = document.getElementById("currentUser");
        if (el) {
          el.textContent = "Ви увійшли як: " + email;
        }
      });
  }

  // ⏱ Час перебування на сторінці
  const entryTime = Date.now();
  window.addEventListener("beforeunload", function () {
    const timeSpent = Math.round((Date.now() - entryTime) / 1000);
    gtag("event", "time_on_page", {
      page_path: window.location.pathname,
      duration_sec: timeSpent
    });
  });

  // 📎 Трекінг посилань
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
      gtag("event", eventType, {
        label: link.textContent.trim(),
        href: href,
        resource_type: resourceType,
        page_path: window.location.pathname
      });
    });
  });
});

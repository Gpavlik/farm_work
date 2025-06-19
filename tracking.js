document.addEventListener("DOMContentLoaded", function () {
  const email = localStorage.getItem("allowedEmail");

  if (email) {
    // Завантажуємо словник користувачів з users.json
    fetch("./users.json")
      .then(response => response.json())
      .then(userDirectory => {
        const name = userDirectory[email] || email; // fallback, якщо немає в списку
        const footer = document.getElementById("currentUser");
        
        // Показуємо в інтерфейсі
        if (footer) {
          footer.textContent = "Ви увійшли як: " + name;
        }

        // Передаємо ім’я як user_id
        gtag("set", "user_properties", { user_id: name });
      })
      .catch(err => {
        console.warn("Не вдалося завантажити users.json:", err);
        
        // Якщо файл не завантажився — fallback до email
        gtag("set", "user_properties", { user_id: email });

        const footer = document.getElementById("currentUser");
        if (footer) {
          footer.textContent = "Ви увійшли як: " + email;
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

  // 📎 Трекінг усіх <a> посилань
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

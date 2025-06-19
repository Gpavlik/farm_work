// Ідентифікація користувача
const email = localStorage.getItem("allowedEmail");
if (email) {
  gtag("set", "user_properties", { user_id: email });
}

// Вимірювання часу на сторінці
const entryTime = Date.now();
window.addEventListener("beforeunload", function () {
  const timeSpent = Math.round((Date.now() - entryTime) / 1000);
  gtag("event", "time_on_page", {
    page_path: window.location.pathname,
    duration_sec: timeSpent
  });
});

// Автоматичне відстеження посилань
document.addEventListener("DOMContentLoaded", function () {
  // Обробка data-track атрибутів (опціонально)
  document.querySelectorAll("[data-track]").forEach(element => {
    element.addEventListener("click", function () {
      const eventType = element.getAttribute("data-event") || "click";
      gtag("event", eventType, {
        label: element.textContent.trim(),
        href: element.getAttribute("href") || null,
        page: window.location.pathname
      });
    });
  });

  // "Розумний" трекінг всіх <a>
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

document.addEventListener("DOMContentLoaded", () => {
  if (typeof emailjs !== "undefined") {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach((link) =>
      link.addEventListener("click", () => nav.classList.remove("open"))
    );
  }

  const cartCount = document.querySelector(".cart-count");
  let count = parseInt(cartCount?.textContent || "0", 10);
  document.querySelectorAll(".add-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      count += 1;
      if (cartCount) cartCount.textContent = count;
      btn.textContent = "✓";
      setTimeout(() => (btn.textContent = "+"), 800);
    });
  });

  const contactForm = document.querySelector(".contact-form form");
  const successMsg = document.querySelector(".form-success");
  const errorMsg = document.querySelector(".form-error");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector("button[type=submit]");
      const originalLabel = submitBtn.textContent;

      submitBtn.disabled = true;
      submitBtn.textContent = "Envoi en cours...";
      errorMsg?.classList.remove("show");

      emailjs
        .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, contactForm)
        .then(() => {
          successMsg?.classList.add("show");
          contactForm.reset();
          setTimeout(() => successMsg?.classList.remove("show"), 5000);
        })
        .catch((err) => {
          console.error("EmailJS error:", err);
          errorMsg?.classList.add("show");
        })
        .finally(() => {
          submitBtn.disabled = false;
          submitBtn.textContent = originalLabel;
        });
    });
  }

  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector("input");
      if (input) {
        input.value = "Merci pour votre inscription !";
        setTimeout(() => (input.value = ""), 3000);
      }
    });
  }
});

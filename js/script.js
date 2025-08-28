// Hamburger menu toggle
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

// Contact form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      const formMessage = document.getElementById("formMessage");

      if (!name || !email || !message) {
        formMessage.innerText = "Please fill in all fields.";
        formMessage.style.color = "red";
        return;
      }

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        formMessage.innerText = "Please enter a valid email.";
        formMessage.style.color = "red";
        return;
      }

      formMessage.innerText = "Message sent successfully!";
      formMessage.style.color = "green";
      form.reset();
    });
  }
});

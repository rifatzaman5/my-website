// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function () {
  // Add a simple welcome message to the console
  console.log("Welcome to my website!");

  // Get the current year for the footer copyright
  const year = new Date().getFullYear();
  document.querySelector(
    "footer p"
  ).textContent = `© ${year} My Website. All rights reserved.`;

  // Add a simple click event to navigation links for smooth scrolling
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      window.scrollTo({
        top: targetSection.offsetTop - 20,
        behavior: "smooth",
      });
    });
  });
});

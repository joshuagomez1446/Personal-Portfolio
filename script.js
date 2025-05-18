// === Dark/Light Mode Toggle ===
const toggle = document.getElementById("modeToggle");

toggle.addEventListener("click", () => {
  const html = document.documentElement;
  const isDark = html.getAttribute("data-theme") === "dark";
  const newTheme = isDark ? "light" : "dark";
  
  html.setAttribute("data-theme", newTheme);
  toggle.textContent = newTheme === "dark" ? "🌙" : "🌞";
  localStorage.setItem("theme", newTheme);
});

// === Load Theme from LocalStorage ===
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  toggle.textContent = savedTheme === "dark" ? "🌙" : "🌞";
});

// === ScrollSpy Navigation Highlight ===
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  const scrollPos = window.scrollY;

  sections.forEach(section => {
    const offset = section.offsetTop - 200;
    const height = section.offsetHeight;

    if (scrollPos >= offset && scrollPos < offset + height) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// === Hamburger Menu Toggle ===
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

// Optional: Close menu when a link is clicked (mobile UX)
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("show");
  });
});

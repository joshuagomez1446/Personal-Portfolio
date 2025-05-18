// === Dark/Light Mode Toggle ===
const toggle = document.getElementById("modeToggle");
const html = document.documentElement;

// Check for saved theme preference or use preferred color scheme
const savedTheme = localStorage.getItem("theme") || 
                  (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
html.setAttribute("data-theme", savedTheme);
updateToggleIcon(savedTheme);

toggle.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  
  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateToggleIcon(newTheme);
});

function updateToggleIcon(theme) {
  const icon = toggle.querySelector("i");
  icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
}

// === ScrollSpy Navigation Highlight ===
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  const scrollPos = window.scrollY + 200;

  sections.forEach(section => {
    const offset = section.offsetTop;
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

  // Show/hide back to top button
  const backToTop = document.getElementById("backToTop");
  if (window.scrollY > 300) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

// === Hamburger Menu Toggle ===
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("show");
  menuToggle.setAttribute("aria-expanded", navbar.classList.contains("show"));
});

// Close menu when a link is clicked (mobile UX)
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("show");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// === Back to Top Button ===
const backToTop = document.getElementById("backToTop");
if (backToTop) {
  backToTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// === Logo Click Handler ===
const logo = document.querySelector(".logo");
if (logo) {
  logo.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    // Skip if it's the back-to-top button or logo
    if (this.id !== "backToTop" && !this.classList.contains("logo")) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  });
});
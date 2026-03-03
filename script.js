document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Menu Toggle
  const menuToggle = document.querySelector("#mobile-menu");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links li a");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("is-active");
      navLinks.classList.toggle("active");
    });
  }

  // Close mobile menu when a link is clicked
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (menuToggle && menuToggle.classList.contains("is-active")) {
        menuToggle.classList.remove("is-active");
        navLinks.classList.remove("active");
      }
    });
  });

  // Theme Toggle Functionality
  const themeToggleBtn = document.getElementById("theme-toggle");
  const sunIcon = document.querySelector(".sun-icon");
  const moonIcon = document.querySelector(".moon-icon");

  // Check saved theme or system preference
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersLight = window.matchMedia(
    "(prefers-color-scheme: light)",
  ).matches;
  let currentTheme = savedTheme || (systemPrefersLight ? "light" : "dark");

  function applyTheme(theme) {
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
      if (sunIcon && moonIcon) {
        sunIcon.style.display = "block";
        moonIcon.style.display = "none";
      }
    } else {
      document.documentElement.removeAttribute("data-theme");
      if (sunIcon && moonIcon) {
        sunIcon.style.display = "none";
        moonIcon.style.display = "block";
      }
    }
  }

  applyTheme(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      currentTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(currentTheme);
      localStorage.setItem("theme", currentTheme);
    });
  } // 2. Navbar Scroll Effect
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // 3. Intersection Observer for Fade-In Animations
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  };

  const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });

  // 4. Dynamic Data Loading (Skills & Projects)
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      // Render Skills
      const skillsContainer = document.getElementById("skills-container");
      if (skillsContainer && data.skills) {
        skillsContainer.innerHTML = data.skills
          .map(
            (skillGroup) => `
                    <div class="skill-card">
                        <h3>${skillGroup.category}</h3>
                        <ul>
                            ${skillGroup.items.map((item) => `<li>${item}</li>`).join("")}
                        </ul>
                    </div>
                `,
          )
          .join("");
      }

      // Render Projects
      const projectsContainer = document.getElementById("projects-container");
      if (projectsContainer && data.projects) {
        projectsContainer.innerHTML = data.projects
          .map(
            (project) => `
                    <div class="project-card">
                        <div class="project-content">
                            <p class="project-overline">Featured Project</p>
                            <h3 class="project-title">${project.title}</h3>
                            <p class="project-description">${project.description}</p>
                            <ul class="project-tech">
                                ${project.tech.map((tech) => `<li>${tech}</li>`).join("")}
                            </ul>
                        </div>
                    </div>
                `,
          )
          .join("");
      }

      // Re-initialize Interactions & Animations for newly added DOM elements
      initScrollAnimations();
    })
    .catch((error) => console.error("Error loading portfolio data:", error));

  // Initialize initial static faders
  initScrollAnimations();

  function initScrollAnimations() {
    const faders = document.querySelectorAll(".fade-in:not(.appear)");
    faders.forEach((fader) => {
      appearOnScroll.observe(fader);
    });
  }
});

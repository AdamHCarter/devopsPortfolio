// DevOps Portfolio JavaScript

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      if (href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          // Close mobile menu if open
          const navbarCollapse = document.querySelector(".navbar-collapse");
          if (navbarCollapse.classList.contains("show")) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
          }

          // Smooth scroll to target
          const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      }
    });
  });

  // Update active navigation link based on scroll position
  function updateActiveNavLink() {
    const sections = document.querySelectorAll("section[id]");
    const scrollPos = window.scrollY + 100; // Offset for fixed navbar

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        // Remove active class from all nav links
        navLinks.forEach((link) => link.classList.remove("active"));

        // Add active class to current section's nav link
        const activeLink = document.querySelector(
          `.navbar-nav .nav-link[href="#${sectionId}"]`
        );
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  }

  // Listen for scroll events
  window.addEventListener("scroll", updateActiveNavLink);

  // Initial call to set active link
  updateActiveNavLink();

  // Add loading animation for images
  const images = document.querySelectorAll("img");
  images.forEach((img) => {
    img.addEventListener("load", function () {
      this.style.opacity = "1";
    });

    // Set initial opacity for images that are already loaded
    if (img.complete) {
      img.style.opacity = "1";
    } else {
      img.style.opacity = "0";
    }
  });

  // Animate elements on scroll
  function animateOnScroll() {
    const animateElements = document.querySelectorAll(
      ".card, .hero-section img"
    );

    animateElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < window.innerHeight - elementVisible) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  }

  // Set initial styles for animation
  const animateElements = document.querySelectorAll(".card");
  animateElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  // Listen for scroll events for animations
  window.addEventListener("scroll", animateOnScroll);

  // Initial call to animate visible elements
  animateOnScroll();

  // Add hover effects for portfolio cards
  const portfolioCards = document.querySelectorAll("#portfolio .card");
  portfolioCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.2)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)";
    });
  });

  // Email link tracking (optional analytics)
  const emailLink = document.querySelector('a[href^="mailto:"]');
  if (emailLink) {
    emailLink.addEventListener("click", function () {
      console.log("Email link clicked - Contact initiated");
      // You can add analytics tracking here if needed
    });
  }

  // Set current year in footer
  const yearSpan = document.getElementById("copyright-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Back to top functionality (for project pages)
  const backToTopBtn = document.getElementById("backToTop");
  if (backToTopBtn) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    });

    backToTopBtn.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // Initialize tooltips if Bootstrap tooltips are used
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Performance optimization: Debounce scroll events
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Apply debouncing to scroll handlers
  const debouncedUpdateNav = debounce(updateActiveNavLink, 10);
  const debouncedAnimate = debounce(animateOnScroll, 10);

  window.removeEventListener("scroll", updateActiveNavLink);
  window.removeEventListener("scroll", animateOnScroll);
  window.addEventListener("scroll", debouncedUpdateNav);
  window.addEventListener("scroll", debouncedAnimate);
});

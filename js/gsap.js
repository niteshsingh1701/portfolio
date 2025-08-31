// Initialize GSAP animations
document.addEventListener("DOMContentLoaded", function () {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  gsap.from("nav", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power2.out",
  });

  gsap.from("#home h1, #home h2", {
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    delay: 0.5,
    ease: "power2.out",
  });

  gsap.from("#home p", {
    duration: 1,
    y: 30,
    opacity: 0,
    delay: 0.8,
    ease: "power2.out",
  });

  gsap.from("#home a", {
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    delay: 1,
    ease: "power2.out",
  });

  gsap.from("#home .relative > div", {
    duration: 1,
    scale: 0.8,
    opacity: 0,
    delay: 0.7,
    ease: "back.out(1.7)",
  });

  // Animate section headings
  gsap.utils.toArray("section").forEach((section) => {
    gsap.from(section.querySelector("h2"), {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
      },
      duration: 0.8,
      y: 30,
      opacity: 0,
      ease: "power2.out",
    });

    gsap.from(section.querySelector(".w-24"), {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
      },
      duration: 0.8,
      scaleX: 0,
      transformOrigin: "left center",
      ease: "power2.out",
    });
  });

  // Animate about cards
  gsap.utils.toArray("#about > div > div > div").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
      },
      duration: 0.8,
      y: 50,
      opacity: 0,
      delay: i * 0.2,
      ease: "power2.out",
    });
  });

  // Animate skill bars
  gsap.utils.toArray(".skill-progress").forEach((bar) => {
    gsap.from(bar, {
      scrollTrigger: {
        trigger: bar,
        start: "top 90%",
      },
      duration: 1.5,
      width: "0%",
      ease: "power2.out",
    });
  });

  // Animate project cards
  gsap.utils.toArray(".project-card").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
      },
      duration: 0.8,
      y: 50,
      opacity: 0,
      delay: i * 0.2,
      ease: "power2.out",
    });
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });
});

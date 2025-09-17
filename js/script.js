tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        secondary: "#8b5cf6",
        dark: "#1e293b",
        light: "#f8fafc",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
};

const menuBtn = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

const links = mobileMenu.querySelectorAll("a");
links.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// show more/show less functionality

const cards = document.querySelectorAll(".project-card");
const btn = document.getElementById("showMoreBtn");

cards.forEach((card, index) => {
  if (index >= 3) card.classList.add("hidden");
});

let expanded = false;

btn.addEventListener("click", () => {
  expanded = !expanded;
  cards.forEach((card, index) => {
    if (index >= 3) {
      expanded ? card.classList.remove("hidden") : card.classList.add("hidden");
    }
  });
  btn.textContent = expanded ? "Show Less" : "Show More";
});

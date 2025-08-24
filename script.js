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

document.getElementById('year').textContent = new Date().getFullYear();
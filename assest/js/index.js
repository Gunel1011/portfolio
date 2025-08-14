const header = document.querySelector(".header");


window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    header.classList.add("todown");
    header.classList.add("dark");
  } else if (window.scrollY > 60) {
    header.classList.add("toUp");
    header.classList.remove("todown");
    header.classList.remove("dark");
  } else {
    header.classList.remove("dark");
    header.classList.remove("toUp");
    header.classList.remove("todown");
  }
});


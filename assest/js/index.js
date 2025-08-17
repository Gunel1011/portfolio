const header = document.querySelector(".header");
const form = document.querySelector(".form");
const btn = document.querySelector(".btn");
const formOverley = document.querySelector(".form-overley");
const firstName = document.querySelector("#first-name");
const firstNameRequat = document.querySelector(".first-name-requat");
const formBtn = document.querySelector("#form-btn");
const surname = document.querySelector("#surname");
const surnameRequat = document.querySelector(".surname-requat");
const gamil = document.querySelector("#gamil");
const emailRequat = document.querySelector(".email-requat");
const message = document.querySelector("#message");
const textareaRequat = document.querySelector(".textarea-requat");
const aboutContent = document.querySelector(".about-content");
const img = document.querySelector(".img");

const data = [
  {
    bio: "I am an aspiring Frontend developer passionate about understanding how computers work and solving coding challenges. I am result-oriented and persistent, never stopping until a problem is fully resolved. In my free time, I enjoy handmade art and drawing. My main goal is to keep moving forward, continuously learning, and achieving success in both personal and professional life.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Sass"],
    img: "./assest/img/g2.png",
  },
];

// header scrol
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

// contact onclick
btn.addEventListener("click", () => {
  form.classList.add("block");
  formOverley.classList.add("block");
});
formOverley.addEventListener("click", () => {
  form.classList.remove("block");
  formOverley.classList.remove("block");
  firstNameRequat.innerHTML = "";
  surnameRequat.innerHTML = "";
  emailRequat.innerHTML = "";
  textareaRequat.innerHTML = "";
});
// yoxlanis
const check = (e) => {
  const lettersOnly = /^[A-Za-zƏəÇçĞğİıÖöŞşÜü\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // ad ucun
  if (!firstName.value || firstName.value.length < 2) {
    firstNameRequat.innerHTML = "Zəhmət olmasa düzgün ad daxil edin ...";
    e.preventDefault();
  } else if (!lettersOnly.test(firstName.value)) {
    firstNameRequat.innerHTML = "Rəqəm və simvol daxil edə bilməzsiniz!";
    e.preventDefault();
  } else {
    firstNameRequat.innerHTML = "";
  }

  // soyad ucun

  if (!surname.value || surname.value.length < 4) {
    surnameRequat.innerHTML = "Soyadınızı tam daxil edin...";
    e.preventDefault();
  } else if (!lettersOnly.test(surname.value)) {
    surnameRequat.innerHTML = "Rəqəm və simvol daxil edə bilməzsiniz!";
    e.preventDefault();
  } else {
    surnameRequat.innerHTML = "";
  }

  // email ucun

  if (!gamil.value) {
    emailRequat.innerHTML = "Meyil adresinizi daxil edin...";
    e.preventDefault();
  } else if (!emailRegex.test(gamil.value)) {
    emailRequat.innerHTML =
      "Düzgün email formatı daxil edin! (example@mail.com)";
    e.preventDefault();
  } else {
    emailRequat.innerHTML = "";
  }

  // mesaj yoxlanisi
  if (!message.value || message.value.length < 10) {
    textareaRequat.innerHTML = "Zəhmət olmasa messajinizi daxil edin..";
    e.preventDefault();
  } else {
    textareaRequat.innerHTML = "";
  }
};
formBtn.addEventListener("click", check);

// about write
const writeHtml = () => {
  aboutContent.innerHTML = "";
  data.map((item) => {
    aboutContent.innerHTML += `
<h2 class="title-about">Who am I?</h2>
         <p class="intro-about">${item.bio}</p>
         <div class="dev-skills">
            ${item.skills
              .map((skill, index) => {
                const colors = ["blue", "green", "red", "yellow", "purple"];
                const colorClass = colors[index % colors.length];
                return `<h5 class="skill ${colorClass}">${skill}</h5>`;
              })
              .join("")}
         </div>
    `;
  });
  img.innerHTML = "";
  data.map((item) => {
    img.innerHTML += `
      <img src="${item.img}" alt="img" />
    `;
  });
};
writeHtml();

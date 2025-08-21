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
const experienceList = document.querySelector(".experience-list");
const swiperSlide = document.querySelector(".swiper-wrapper");
const workRe = document.querySelector(".work-re");
const contactBtn = document.querySelector(".contact-btn");
const contactFooter = document.querySelector(".footer-icons");
const contactFooters = document.querySelector(".contact-footer");
const aboutList = document.querySelector(".about-list");
const project = document.querySelector(".project");
const services = document.querySelector(".services");
const conctact = document.querySelector(".conctact");
const cursor = document.querySelector(".cursor");
const skill = document.querySelector(".skill");
const introAbout = document.querySelector(".intro-about");
const nowData = new Date();
const loding = document.querySelector(".loding");

const userData = {
  about:
    "I am an aspiring Frontend developer passionate about understanding how computers work and solving coding challenges. I am result-oriented and persistent, never stopping until a problem is fully resolved. In my free time, I enjoy handmade art and drawing. My main goal is to keep moving forward, continuously learning, and achieving success in both personal and professional life.",
  avatar_image: "./assest/img/g2.png",
  experience: nowData.getFullYear() - 2024,
  happy_clients: 50,
  email: "gunelmm10@gmail.com",
  phone_number: "(+994 51) 995 72 62",
  skills: [
    { id: 1, skill: "HTML", background_color: "#E94141" },
    { id: 2, skill: "CSS", background_color: "#4198E9" },
    { id: 3, skill: "JavaScript", background_color: "#E9C441" },
    { id: 4, skill: "React", background_color: "#41E98E" },
    { id: 5, skill: "Sass", background_color: "#9F41E9" },
  ],
  social_media_links: [
    {
      id: 1,
      url: "mailto:gunelmm10@gmail.com",
      icon: "./assest/img/icons/email.png",
      className: "email",
      text: "Send an Email",
    },
    {
      id: 2,
      url: "https://wa.me/994519957262",
      icon: "./assest/img/icons/what.png",
      className: "whatsapp",
      text: "Write on WhatsApp",
    },
  ],
  social_media_links_fotter: [
    {
      id: 1,
      url: "https://www.instagram.com/silentz_gun/",
      icon: "./assest/img/icons/instagram.png",
      className: "instagram",
      text: "Instagram",
    },
    {
      id: 2,
      url: "https://www.facebook.com/gunel.m.mm.dova.642904/",
      icon: "./assest/img/icons/facebook.png",
      className: "facebook",
      text: "Facebook",
    },
    {
      id: 3,
      url: "https://www.linkedin.com/in/gunel-mammadova10/",
      icon: "./assest/img/icons/linkedin.png",
      className: "linkedin",
      text: "LinkedIn",
    },
  ],
  contact_footer: [
    {
      id: 1,
      class: "footer-phone",
      img_url: "./assest/img/icons/phone.png",
      text: "(+994 00) 111 22 33",
      url: "https://wa.me/994519957262",
    },
    {
      id: 2,
      class: "footer-email",
      img_url: "./assest/img/icons/white-mail.png",
      text: "gunelmm10@gmail.com",
      url: "mailto:gunelmm10@gmail.com",
    },
  ],
  testimonials: [
    {
      id: 1,
      avatar: "./assest/img/person.jpg",
      full_name: "Gambar Shamsiyev",
      comment:
        "Working with this developer was a game-changer for our project. Their attention to detail and creativity truly set them apart. After a few weeks he impressed the entire team so much.",
      profession: "Project Manager at YevlaxTech",
    },
    {
      id: 2,
      avatar: "./assest/img/person.jpg",
      full_name: "Gambar Shamsiyev",
      comment:
        "Working with this developer was a game-changer for our project. Their attention to detail and creativity truly set them apart. After a few weeks he impressed the entire team so much.",
      profession: "Project Manager at YevlaxTech",
    },
    {
      id: 3,
      avatar: "./assest/img/person.jpg",
      full_name: "Gambar Shamsiyev",
      comment:
        "Working with this developer was a game-changer for our project. Their attention to detail and creativity truly set them apart. After a few weeks he impressed the entire team so much.",
      profession: "Project Manager at YevlaxTech",
    },
    {
      id: 4,
      avatar: "./assest/img/person.jpg",
      full_name: "Gambar Shamsiyev",
      comment:
        "Working with this developer was a game-changer for our project. Their attention to detail and creativity truly set them apart. After a few weeks he impressed the entire team so much.",
      profession: "Project Manager at YevlaxTech",
    },
  ],
  projects: [
    {
      id: 1,
      project_cover_image: "/assest/img/world-telecom.jpg",
      project_url: "https://github.com/Gunel1011/world-telecom",
    },
    {
      id: 2,
      project_cover_image: "./assest/img/clark.jpg",
      project_url: "https://clark-two.vercel.app/",
    },
    {
      id: 3,
      project_cover_image: "./assest/img/avo.jpg",
      project_url: "https://avo-beige.vercel.app/",
    },
    {
      id: 4,
      project_cover_image: "./assest/img/oneder.jpg",
      project_url: "https://passport-zo4r.vercel.app/",
    },
    {
      id: 5,
      project_cover_image: "./assest/img/passport.jpg",
      project_url: "https://passport-psi.vercel.app/",
    },
    {
      id: 6,
      project_cover_image: "./assest/img/ronaldo.jpg",
      project_url: "https://ronald-orcin.vercel.app/",
    },
  ],
};

// loding
document.addEventListener("DOMContentLoaded", () => {
  if (!sessionStorage.getItem("seenLoading")) {
    setTimeout(() => {
      loding.classList.add("deactive");
      sessionStorage.setItem("seenLoading", "true");
    }, 5000);
  } else {
    loding.classList.add("deactive");
  }
});

// cursor
document.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
});

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

// headder active scroll
window.addEventListener("scroll", () => {
  if (window.scrollY < 600) {
    aboutList.classList.remove("active");
    conctact.classList.remove("active");
  }
  if (window.scrollY > 600) {
    aboutList.classList.add("active");
    services.classList.remove("active");
    project.classList.remove("active");
    conctact.classList.remove("active");
  }
  if (window.scrollY > 1066) {
    services.classList.add("active");
    aboutList.classList.remove("active");
    conctact.classList.remove("active");
  }
  if (window.scrollY > 1396) {
    project.classList.add("active");
    services.classList.remove("active");
    conctact.classList.remove("active");
  }
  if (window.scrollY > 5359) {
    conctact.classList.add("active");
    project.classList.remove("active");
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
  firstName.value = "";
  surname.value = "";
  gamil.value = "";
  message.value = "";
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
  aboutContent.innerHTML = `
    <h2 class="title-about" data-language="me">Who am I?</h2>
    <p class="intro-about" data-language="bio" >${userData.about}</p>
    <div class="dev-skills">
      ${userData.skills
        .map((skill) => {
          return `<h5 class="skill" 
              style="background-color: ${skill.background_color};" 
              data-color="${skill.background_color}">
              ${skill.skill}
          </h5>`;
        })
        .join("")}
    </div>
  `;

  img.innerHTML = `<img src="${userData.avatar_image}" class="avatarImg" alt="avatar" />`;

  const avatarImg = document.querySelector(".avatarImg");
  const skills = document.querySelectorAll(".skill");

  skills.forEach((el) => {
    const color = el.getAttribute("data-color");

    el.addEventListener("mouseenter", () => {
      avatarImg.style.filter = `drop-shadow(0 -10px 80px ${color})`;
    });

    el.addEventListener("mouseleave", () => {
      avatarImg.style.filter = "none";
    });
  });
};
writeHtml();

// list experce write
const writeHtmlExperience = () => {
  experienceList.innerHTML = `
    <li class="list-item-exprence">
      <div class="iocn">
        <img src="./assest/img/icons/calendar.png" alt="calendar-icon"/>
      </div>
      <div class="content">
        <p class="text" data-language="experence">Experience</p>
        <h2 class="year" data-language="year">${userData.experience} years</h2>
      </div>
    </li>

    <li class="list-item-exprence">
      <div class="iocn">
        <img src="./assest/img/icons/user.png" alt="user-icon"/>
      </div>
      <div class="content">
        <p class="text" data-language="happyClients">Happy Clients</p>
        <h2 class="year" data-language="clients">${
          userData.happy_clients
        } clients</h2>
      </div>
    </li>

    <li class="list-item-exprence">
      <div class="iocn">
        <img src="./assest/img/icons/html-fiveg-html.png" alt="project-icon"/>
      </div>
      <div class="content">
        <p class="text" data-language="completedProjects">Completed Projects</p>
        <h2 class="year" data-language="project">${
          userData.projects.length + 1
        } projects</h2>
      </div>
    </li>
  `;
};

writeHtmlExperience();

// testimonil write
const testimonialsWriteHtml = () => {
  swiperSlide.innerHTML = "";
  userData.testimonials.forEach((item) => {
    swiperSlide.innerHTML += `
      <div class="swiper-slide">
        <div class="all-card">
          <div class="icon">
            <img src="./assest/img/icons/“.png" alt="quote-icon" />
          </div>
          <div class="testimonil">
            <h2 class="text" data-language="testimonil">${item.comment}</h2>
          </div>
          <div class="person">
            <div class="person-img">
              <img src="${item.avatar}"  alt="${item.full_name}" />
            </div>
            <div class="person-info">
              <h3 class="person-name">${item.full_name}</h3>
              <p class="person-work">${item.profession}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  });
};
testimonialsWriteHtml();
// work write Html
const workWriteHtml = () => {
  workRe.innerHTML = "";
  userData.projects.forEach((item) => {
    workRe.innerHTML += `
      <div class="img-work">
         <a href="${item.project_url}" target="_blank" >
           <img src="${item.project_cover_image}" alt="work_img" />
          </a>
       </div>
  `;
  });
};
workWriteHtml();

// contact write

const contactWriteHtml = () => {
  contactBtn.innerHTML = "";
  userData.social_media_links.forEach((item) => {
    contactBtn.innerHTML += `
     <a class="${item.className}" href="${item.url}"
         target="_blank">
       <img src="${item.icon}" alt="" />
       ${item.text}
     </a>
    `;
  });
};
contactWriteHtml();

// footer write
const footerWriteHtml = () => {
  contactFooter.innerHTML = "";
  userData.social_media_links_fotter.map((item) => {
    contactFooter.innerHTML += `
     <a href="${item.url}" target="_blank" class="img-icon-footer">
         <img src="${item.icon}" alt="" />
      </a>
    `;
  });
  contactFooters.innerHTML = "";
  userData.contact_footer.map((item) => {
    contactFooters.innerHTML += `
      <a class="${item.class}" href="${item.url}" target="_blank">
        <img src="${item.img_url}" alt="" />
            ${item.text}
       </a>
      `;
  });
};
footerWriteHtml();

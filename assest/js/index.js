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
const contactFooter = document.querySelector(".contact-footer");

const data = [
  {
    img: "./assest/img/g2.png",
    bio: "I am an aspiring Frontend developer passionate about understanding how computers work and solving coding challenges. I am result-oriented and persistent, never stopping until a problem is fully resolved. In my free time, I enjoy handmade art and drawing. My main goal is to keep moving forward, continuously learning, and achieving success in both personal and professional life.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Sass"],
  },
];
const data2 = [
  {
    imgExperce: "./assest/img/icons/calendar.png",
    experceTitle: "experience",
    experceYear: "1 years",
  },
  {
    imgExperce: "./assest/img/icons/user.png",
    experceTitle: "happy",
    experceYear: "50 clients",
  },
  {
    imgExperce: "./assest/img/icons/html-fiveg-html.png",
    experceTitle: "completed",
    experceYear: "8 projects",
  },
];
const testimonil = [
  {
    iconImg: "./assest/img/icons/“.png",
    text: "Working with this developer was a game-changer for ourproject. Their attention to detail and creativity truly set them apart. After a few weeks he impressed the entire team so much.",
    personImg: "./assest/img/person.jpg",
    personName: "Gambar Shamsiyev",
    personWork: "Project Manager at YevlaxTech",
  },
  {
    iconImg: "./assest/img/icons/“.png",
    text: "Working with this developer was a game-changer for ourproject. Their attention to detail and creativity truly set them apart. After a few weeks he impressed the entire team so much.",
    personImg: "./assest/img/person.jpg",
    personName: "Gambar Shamsiyev",
    personWork: "Project Manager at YevlaxTech",
  },
  {
    iconImg: "./assest/img/icons/“.png",
    text: "Working with this developer was a game-changer for ourproject. Their attention to detail and creativity truly set them apart. After a few weeks he impressed the entire team so much.",
    personImg: "./assest/img/person.jpg",
    personName: "Gambar Shamsiyev",
    personWork: "Project Manager at YevlaxTech",
  },
  {
    iconImg: "./assest/img/icons/“.png",
    text: "Working with this developer was a game-changer for ourproject. Their attention to detail and creativity truly set them apart. After a few weeks he impressed the entire team so much.",
    personImg: "./assest/img/person.jpg",
    personName: "Gambar Shamsiyev",
    personWork: "Project Manager at YevlaxTech",
  },
];
const workData = [
  {
    link: "https://github.com/Gunel1011/world-telecom",
    workImg: "/assest/img/world-telecom.jpg",
  },
  {
    link: "https://clark-two.vercel.app/",
    workImg: "./assest/img/clark.jpg",
  },
  {
    link: "https://avo-beige.vercel.app/",
    workImg: "./assest/img/avo.jpg",
  },
  {
    link: "https://passport-zo4r.vercel.app/",
    workImg: "./assest/img/oneder.jpg",
  },
  {
    link: "https://passport-psi.vercel.app/",
    workImg: "./assest/img/passport.jpg",
  },
  {
    link: "https://ronald-orcin.vercel.app/",
    workImg: "./assest/img/ronaldo.jpg",
  },
];
const contactData = [
  {
    gmailAddres: "gunelmm10@gmail.com",
    gmailIcon: "./assest/img/icons/email.png",
    clasName: "email",
    text: "Send an email",
  },
  {
    whatsapAddres: "https://wa.me/994519957262",
    whatsapcon: "./assest/img/icons/what.png",
    clasName: "whatsaap",
    text: "Write on Whatsapp",
  },
];
const footerData = [
  {
    contact: "(+994 51) 995 72 62",
    icon: "./assest/img/icons/phone.png",
    contactAdres: "https://wa.me/994519957262",
  },
  {
    contact: "gunelmm10@gmail.com",
    icon: "./assest/img/icons/white-mail.png",
    contactAdres: "mailto:gunelmm10@gmail.com",
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

// list experce write

const writeHtmlExperce = () => {
  experienceList.innerHTML = "";
  data2.map((item) => {
    experienceList.innerHTML += `
   <li class="list-item-exprence">
     <div class="iocn">
        <img src="${item.imgExperce}" alt="calendar-icon"/>
        </div>
        <div class="content">
        <p class="text">${item.experceTitle}</p>
         <h2 class="year">${item.experceYear}</h2>
      </div>
    </li>
    `;
  });
};
writeHtmlExperce();

// testimonil write
const testimonialsWriteHtml = () => {
  swiperSlide.innerHTML = "";
  testimonil.map((item) => {
    swiperSlide.innerHTML += `
   <div class="swiper-slide">
    <div class="all-card">
        <div class="icon">
           <img src="${item.iconImg}" alt="iconImg" />
         </div>
        <div class="testimonil">
           <h2 class="text">${item.text}</h2>
         </div>
        <div class="person">
           <div class="person-img">
             <img src="${item.personImg}" alt="personImg" />
            </div>
         <div class="person-info">
            <h3 class="person-name">${item.personName}</h3>
            <p class="person-work">${item.personWork}</p>
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
  workData.map((item) => {
    workRe.innerHTML += `
      <div class="img-work">
         <a href="${item.link}" target="_blank" >
           <img src="${item.workImg}" alt="work_img" />
          </a>
       </div>
  `;
  });
};
workWriteHtml();

// contact write

const contactWriteHtml = () => {
  contactBtn.innerHTML = "";
  contactData.map((item) => {
    contactBtn.innerHTML += `
     <a class="${item.clasName}" href="mailto:${item.gmailAddres}"
         target="_blank">
       <img src="${item.gmailIcon}" alt="" />
       ${item.text}
     </a>
    `;
  });
};
contactWriteHtml();

// footer write
const footerWriteHtml = () => {
  contactFooter.innerHTML = "";
  footerData.map((item) => {
    contactFooter.innerHTML += `
    <a class="footer-email" target="_blank" href="${item.contactAdres}">
      <img src="${item.icon}" alt="" />
        ${item.contact}
      </a>
    `;
  });
};
footerWriteHtml();

const userData = {
  about: "",
  avatar_image: "",
  experience: 2025,
  happy_clients: 50,
  completed_projects: 8,
  email: "",
  phone_number: "",
  skills: [
    {
      id: 1,
      skill: "HTML",
      background_color: "#0000ff",
    },
  ],
  social_media_links: [
    {
      id: 1,
      url: "",
      icon: "",
    },
  ],
  testimonials: [
    {
      id: 1,
      avatar: "",
      full_name: "",
      comment: "",
      profession: "",
    },
  ],
  projects: [
    {
      id: 1,
      project_cover_image: "",
      project_url: "",
    },
  ],
};

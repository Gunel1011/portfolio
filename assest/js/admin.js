const cardAdminImg = document.querySelector(".card-admin-img");
const allContentAdmin = document.querySelector(".all-content-admin");
const allCard = document.querySelector(".all-card");
const modal = document.querySelector(".modal");
const moadalOverley = document.querySelector(".moadal-overley");
// hover

const projects = [
  {
    id: 1,
    url: "./assest/img/caviar.jpg",
  },
  {
    id: 2,
    url: "/assest/img/world-telecom.jpg",
  },
  {
    id: 3,
    url: "./assest/img/clark.jpg",
  },
  {
    id: 4,
    url: "./assest/img/avo.jpg",
  },
  {
    id: 5,
    url: "./assest/img/oneder.jpg",
  },
  {
    id: 6,
    url: "./assest/img/passport.jpg",
  },
  {
    id: 7,
    url: "./assest/img/ronaldo.jpg",
  },
];

const openModal = () => {
  modal.classList.add("active");
};
const closeModal = () => {
  modal.classList.remove("active");
};
moadalOverley.addEventListener("click", closeModal);

// write admin
const writeAdminCard = () => {
  allCard.innerHTML = "";
  projects.map((item) => {
    allCard.innerHTML += `
   <div class="card">
      <div class="card-admin-img" style="background-image: url(${item.url})">
       <div class="all-content-admin">
        <div class="overler"></div>
         <div class="btn">
          <button id="changeBtn" onclick="openModal()">Change</button>
          <button id="deleteBtn">Delete</button>
         </div>
        </div>
       </div>
    </div>
   `;
  });
};
writeAdminCard();

const cardAdminImg = document.querySelector(".card-admin-img");
const allContentAdmin = document.querySelector(".all-content-admin");
const allCard = document.querySelector(".all-card");
const modal = document.querySelector(".modal");
const moadalOverley = document.querySelector(".moadal-overley");
const projectName = document.querySelector("#project_name");
const projectData = document.querySelector("#data");
const projectImg = document.querySelector("#project_img");
const btn = document.querySelector(".btn");
const del = document.querySelector(".del");
const btnNew = document.querySelector("#btn-new");
const errorTextData = document.querySelector(".error-text-data");
const errorTextName = document.querySelector(".error-text-name");
const errorTextImg = document.querySelector(".error-text-img");
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
});

const projects = [
  {
    id: 1,
    url: "./assest/img/caviar.jpg",
    title: "caviar",
    data: "2025-06-10",
    featured: false,
  },
  {
    id: 2,
    url: "/assest/img/world-telecom.jpg",
    title: "World-telecom clone",
    data: "2025-04-03",
    featured: true,
  },
  {
    id: 3,
    url: "./assest/img/clark.jpg",
    title: "clark",
    data: "2025-04-07",
    featured: false,
  },
  {
    id: 4,
    url: "./assest/img/avo.jpg",
    title: "avo",
    featured: false,
    data: "2025-07-13",
  },
  {
    id: 5,
    url: "./assest/img/oneder.jpg",
    title: "oneder",
    featured: false,
    data: "2024-03-10",
  },
  {
    id: 6,
    url: "./assest/img/passport.jpg",
    title: "passport",
    data: "2024-10-09",
    featured: false,
  },
  {
    id: 7,
    url: "./assest/img/ronaldo.jpg",
    title: "ronaldo",
    data: "2025-07-06",
    featured: false,
  },
];

let project_clone = JSON.parse(JSON.stringify(projects));

let currentEditingId = null;

const openModal = (id) => {
  modal.classList.add("active");
  const isEditing = typeof id === "number" && !Number.isNaN(id);
  if (isEditing) {
    currentEditingId = id;
    const project = project_clone.find((item) => item.id === id);
    if (project) {
      projectName.value = project.title || "";
      projectData.value = project.data || "";
    }
  } else {
    currentEditingId = null;
    projectName.value = "";
    projectData.value = "";
    if (projectImg) projectImg.value = "";
  }
};

const closeModal = () => {
  modal.classList.remove("active");
  projectName.value = "";
  projectData.value = "";
  projectImg.value = "";
  if (errorTextName) errorTextName.textContent = "";
  if (errorTextData) errorTextData.textContent = "";
  if (errorTextImg) errorTextImg.textContent = "";
  currentEditingId = null;
};
moadalOverley.addEventListener("click", closeModal);
btnNew.addEventListener("click", () => openModal());
let id = 100;

// addProject
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const nameValue = projectName.value.trim();
  const dataValue = projectData.value.trim();
  const file = projectImg && projectImg.files ? projectImg.files[0] : null;

  if (errorTextName) errorTextName.textContent = "";
  if (errorTextData) errorTextData.textContent = "";
  if (errorTextImg) errorTextImg.textContent = "";

  let hasError = false;
  if (!nameValue) {
    if (errorTextName)
      errorTextName.textContent = "Zəhmət olmasa ad daxil edin";
    hasError = true;
  }
  if (!dataValue) {
    if (errorTextData) errorTextData.textContent = "Zəhmət olmasa tarix seçin";
    hasError = true;
  }
  if (hasError) return;

  // Duplicate title check: ignore current item if editing
  const isDuplicate = project_clone.some((p) => {
    if (!p.title) return false;
    const sameTitle = p.title.trim().toLowerCase() === nameValue.toLowerCase();
    if (!sameTitle) return false;
    if (currentEditingId == null) return true;
    return p.id !== currentEditingId;
  });
  if (isDuplicate) {
    if (errorTextName)
      errorTextName.textContent = "Bu adla layihə artıq mövcuddur";
    return;
  }

  // Edit existing project
  if (currentEditingId != null) {
    const index = project_clone.findIndex((p) => p.id === currentEditingId);
    if (index !== -1) {
      project_clone[index].title = nameValue;
      project_clone[index].data = dataValue;
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        project_clone[index].url = imageUrl;
      }
    }
    writeAdminCard();
    closeModal();
    return;
  }

  // Add new project (image optional)
  const imageUrl = file ? URL.createObjectURL(file) : "";
  project_clone.push({
    id: id++,
    url: imageUrl,
    title: nameValue,
    data: dataValue,
    featured: false,
  });
  writeAdminCard();
  closeModal();
});

// delete
const deleteProject = (id) => {
  const udapted = project_clone.filter((item) => item.id !== id);
  project_clone = udapted;
  writeAdminCard();
};

// write admin
const writeAdminCard = () => {
  allCard.innerHTML = "";
  project_clone.map((item) => {
    allCard.innerHTML += `
   <div class="card" id=${item.id}>
      <div class="card-admin-img" style="background-image: url(${item.url})">
       <div class="all-content-admin">
        <div class="overler"></div>
        <h2 class="title">${item.title}</h2>
         <div class="btn">
         <button  onclick="openModal(${item.id})">Change</button>
         <button id="s" onclick= "deleteProject(${item.id})">Delete</button>
         </div>
         <span class="data">add data: ${item.data}</span>
        </div>
       </div>
    </div>
   `;
  });
};
writeAdminCard();

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
const paswordData = {
  username: "gun",
  password: "1234",
};

let project_clone = JSON.parse(JSON.stringify(projects));

let currentEditingId = null;

const saveAdmin = () => {
  localStorage.setItem("admin", JSON.stringify(project_clone));
};
const checkSavedAdmin = () => {
  const saved = JSON.parse(localStorage.getItem("admin"));
  if (saved) {
    project_clone = saved;
  }
};
checkSavedAdmin();

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
if (moadalOverley) moadalOverley.addEventListener("click", closeModal);
if (btnNew) btnNew.addEventListener("click", () => openModal());
let id = 100;

// open modal
function openModal(id) {
  modal.classList.add("active");

  currentEditingId = id;

  const project = project_clone.find((item) => item.id === id);
  if (project) {
    projectName.value = project.title || "";
    projectData.value = project.data || "";

    if (projectImg) {
      projectImg.value = "";
      projectImg.disabled = true;
    }
  }
}

// add project
function addProject(nameValue, dataValue, file) {
  project_clone.push({
    id: id++,
    url: file ? URL.createObjectURL(file) : "",
    title: nameValue,
    data: dataValue,
    featured: false,
  });
}

btnNew.addEventListener("click", () => {
  modal.classList.add("active");
  currentEditingId = null;
  projectName.value = "";
  projectData.value = "";

  if (projectImg) {
    projectImg.value = "";
    projectImg.disabled = false;
  }
});

// edidt
function updateProject(id, nameValue, dataValue, file) {
  const project = project_clone.find((item) => item.id === id);
  if (project) {
    project.title = nameValue;
    project.data = dataValue;
    if (file) project.url = URL.createObjectURL(file);
  }
}

// 4. Validasiya
function validateForm(nameValue, dataValue) {
  errorTextName.textContent = "";
  errorTextData.textContent = "";

  if (!nameValue) {
    errorTextName.textContent = "Zəhmət olmasa ad daxil edin";
    return false;
  }
  if (!dataValue) {
    errorTextData.textContent = "Zəhmət olmasa tarix seçin";
    return false;
  }

  const isDuplicate = project_clone.some(
    (item) =>
      item.title?.trim().toLowerCase() === nameValue.toLowerCase() &&
      item.id !== currentEditingId
  );
  if (isDuplicate) {
    errorTextName.textContent = "Bu adla layihə artıq mövcuddur";
    return false;
  }

  return true;
}

// Button click 
btn.addEventListener("click", (e) => {
  e.preventDefault();

  const nameValue = projectName.value.trim();
  const dataValue = projectData.value.trim();
  const file = projectImg?.files?.[0] || null;

  if (!validateForm(nameValue, dataValue)) return;

  if (currentEditingId != null) {
    updateProject(currentEditingId, nameValue, dataValue, file);
  } else {
    addProject(nameValue, dataValue, file);
  }
  
  writeAdminCard();
  closeModal();
  saveAdmin();
});

// delete
const deleteProject = (id) => {
  const udapted = project_clone.filter((item) => item.id !== id);
  silinsinmi = confirm("Silinsinmi?");
  if (silinsinmi) {
    project_clone = udapted;
  } else {
    return;
  }
  writeAdminCard();
  saveAdmin();
};

// write admin
const writeAdminCard = () => {
  allCard.innerHTML = "";
  project_clone.forEach((item) => {
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

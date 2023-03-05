const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalImg = document.getElementById("modalImg");
const modalDetails = document.getElementById("modalDetails");
const modalToolsUsed = document.getElementById("modalToolsUsed");
const modalDemoURL = document.getElementById("demoURL");
const modalGithubURL = document.getElementById("githubURL");
const closeModalButton = document.getElementById("closeModal");

let project;

addEventListeners();

async function addEventListeners() {
  const projectButtons = document.querySelectorAll(".project-btn");
  if (projectButtons.length > 0) {
    projectButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        project = e.target.closest(".project-container");
        openModal();
      });
    });
  }
}

function openModal() {
  const toolsUsed = project.dataset.toolsused.split(",");
  registerCloseModalEvents();

  modalTitle.innerHTML = project.dataset.title;
  modalImg.src = project.dataset.imgsrc;
  modalImg.alt = project.dataset.title;
  modalDetails.innerHTML = project.dataset.details;
  modalDemoURL.href = project.dataset.demourl;
  modalGithubURL.href = project.dataset.githuburl;
  toolsUsed.forEach(
    (cur) => (modalToolsUsed.innerHTML += `<li>${toolIcons[cur]}</li>`)
  );

  modal.classList.add("show");
  disableScroll();
}

function closeModal() {
  modal.classList.add("closing");
  setTimeout(function () {
    modal.classList.remove("show");
    modal.classList.remove("closing");
    modalToolsUsed.innerHTML = "";
  }, 180);
  enableScroll();
}

function outsideClickClose(e) {
  if (e.target == modal) {
    closeModal();
  }
}

function registerCloseModalEvents() {
  closeModalButton.addEventListener("click", closeModal);
  document.addEventListener("click", outsideClickClose);
}

function disableScroll() {
  document.body.classList.add("stop-scrolling");
}

function enableScroll() {
  document.body.classList.remove("stop-scrolling");
}

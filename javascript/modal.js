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
        console.log(project);
        openModal();
      });
    });
  }
}

function openModal() {
  const toolsUsed = project.getAttribute("data-project-tools-used").split(",");
  registerCloseModalEvents();

  modalTitle.innerHTML = project.getAttribute("data-project-title");
  modalImg.src = project.getAttribute("data-project-img-src");
  modalImg.alt = project.getAttribute("data-project-title");
  modalDetails.innerHTML = project.getAttribute("data-project-details");
  modalDemoURL.href = project.getAttribute("data-project-demo-url");
  modalGithubURL.href = project.getAttribute("data-project-github-url");
  toolsUsed.forEach(
    (cur) => (modalToolsUsed.innerHTML += `<li> ${getToolIcon(cur)}</li>`)
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

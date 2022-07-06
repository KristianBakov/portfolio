const projectsContainer = document.getElementById("projects");

getProjectsData();

async function getProjectsData() {
  try {
    const res = await fetch("../data/projectData.json");
    const data = await res.json();

    injectProjectData(data);
  } catch (err) {
    console.log(err);
  }
}

function injectProjectData(data) {
  console.log("Projects loading");
  data.forEach((item, index) => {
    const listItem = document.createElement("div");

    listItem.setAttribute("data-index", index);
    listItem.setAttribute("data-project-title", item.title);
    listItem.setAttribute("data-project-img-src", item.imgSrc);
    listItem.setAttribute("data-project-demo-url", item.demoURL);
    listItem.setAttribute("data-project-github-url", item.gitHubURL);
    listItem.setAttribute("data-project-details", item.details);
    listItem.setAttribute("data-project-tools-used", item.toolsUsed);
    listItem.classList.add("project-container");
    listItem.innerHTML = `
    <div class="content">
        <img src="${item.imgSrc}" alt="${item.title}" />
        <div class="overlay">
            <button class="project-btn">Learn more</button>
        </div>
    </div>
    `;

    projectsContainer.appendChild(listItem);
  });
  console.log("Projects loaded");
}

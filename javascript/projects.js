const projectsContainer = document.getElementById("projects");

const projectsData = [
  {
    title: "Portfolio",
    demoURL: "https://kristian-bakov.netlify.app",
    gitHubURL: "https://github.com/KristianBakov/portfolio",
    imgSrc: "./assets/portfolio.webp",
    details:
      "Portfolio website made with Html5, Css3, Sass, and JavaScript. Project section is populated using AJAX.",
    toolsUsed: ["html", "css", "sass", "javascript"],
  },

  {
    title: "Movix",
    demoURL: "https://movixcatalogue.netlify.app",
    gitHubURL: "https://github.com/KristianBakov/movix",
    imgSrc: "./assets/movix.webp",
    details:
      "Simple and responsive web application that allows users to browse for movies and TV shows.",
    toolsUsed: ["html", "css", "javascript", "react", "api", "redux", "mui"],
  },
  {
    title: "Bubbly",
    demoURL: "https://bubblylondon.netlify.app",
    gitHubURL: "https://github.com/KristianBakov/bubbly",
    imgSrc: "./assets/bubbly.webp",
    details:
      "Commercial store style website which dynamically loads menu data. It is styled using Bootstrap.",
    toolsUsed: ["html", "javascript", "css", "sass", "bootstrap"],
  },
  {
    title: "Travel Balkans",
    demoURL: "https://travel-balkans.netlify.app",
    gitHubURL: "https://github.com/KristianBakov/travel-balkans",
    imgSrc: "./assets/travel-balkans.webp",
    details:
      "Simple website featuring some beautiful css animations and reusable flex layouts.",
    toolsUsed: ["html", "css"],
  },
  {
    title: "Shop Green",
    demoURL: "https://shop-green.netlify.app",
    gitHubURL: "https://github.com/KristianBakov/shopgreen",
    imgSrc: "./assets/shop-green.webp",
    details:
      "Updated portfolio website made with Html5, Css3, Sass, JavaScript, and Webpack. Project section is populated using AJAX.",
    toolsUsed: ["html", "css"],
  },
];

function injectProjectData(projectsData = []) {
  projectsData.forEach((item, index) => {
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
}

injectProjectData(projectsData);

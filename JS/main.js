const moreProjectsBtn = document.querySelector(".more-projects");
const projectStation = document.querySelector(".projects-grid");
let navLinks = document.querySelectorAll("header nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        navLinks.forEach(a => a.classList.remove("active"));
        e.target.classList.add("active");
    })
})

function showMoreProjects(data) {
    data.projects.forEach((project) => {
        const card = document.createElement("article");
        card.className = "card";
        const projectLink = document.createElement("a");
        projectLink.href = project.detailsPage;
        projectLink.rol = "noopener noreferrer";

        const img = document.createElement("img");
        img.src = project.image;
        img.alt = project.title + " preview";

        const h3 = document.querySelector("h3");
        h3.textContent = project.title;
        const p = document.createElement("p");
        p.textContent = project.description;
        const tech = document.createElement("div");
        tech.className = "tech";

        project.technologies.forEach(tec => {
            const span = document.createElement("span");
            span.textContent = tec;
            tech.appendChild(span);
        })

        projectLink.append(img, h3, p, tech);

        card.appendChild(projectLink);


        const btnsContainer = document.createElement("div");
        btnsContainer.className = "btn-container";

        const liveLink = document.createElement("a");
        liveLink.className = "btn-link";
        liveLink.textContent = "Live Demo";
        liveLink.href = project.liveDemo;
        liveLink.target = "_blank";

        const githubRepoLink = document.createElement("a");
        githubRepoLink.className = "github-link";
        githubRepoLink.textContent = "Github Repo";
        githubRepoLink.href = project.githubRepo;
        githubRepoLink.target = "_blank";

        btnsContainer.append(liveLink, githubRepoLink);

        card.appendChild(btnsContainer);

        projectStation.appendChild(card);
    });
    moreProjectsBtn.remove();
}


async function getJsonObjData() {
    try {
        const response = await fetch("JS/projects.json");

        if (!response.ok) {
            throw new Error("HTTP ERROR");
        }

        const data = await response.json();

        showMoreProjects(data);
    } catch (error) {
        console.error(error);
    }
}

if (moreProjectsBtn) moreProjectsBtn.addEventListener("click", getJsonObjData);


const menu = document.querySelector("nav span");
const navUl = document.querySelector("nav ul");
const header = document.querySelector("header");
const mainPage = document.querySelector("main");


function showMenu() {
    const icon = menu.querySelector("i");
    let isColse = icon.classList.contains("fa-close");
    icon.classList.toggle("fa-bars", isColse);
    icon.classList.toggle("fa-close", !isColse);

    header.classList.toggle("menu-headerbg", !isColse);
    mainPage.classList.toggle("menu-mainpage", !isColse);
    navUl.classList.toggle("menu", !isColse);

}

menu.addEventListener("click", showMenu);

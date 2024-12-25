document.addEventListener('DOMContentLoaded', function () {
    fetch('projets.json').then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
        const projects = data;
        const projectsContainer = document.querySelector('.projects-container');
        projects.forEach(function (project) {
            const projectElement = document.createElement('div');
            projectElement.classList.add('project');
            projectElement.innerHTML = `
            <div class "container-images"><img src="${project.image}" alt="" class="project-image">
            <img src="${project.image2}" alt="" class="project-image">
            <img src="${project.image3}" alt="" class="project-image"></div>
            <div class="project-content">
                <h2 class="aboreto">${project.name}</h2>
                <p class="montserrat-200">${project.description}</p>
                `
                if (project.link){
                    projectElement.innerHTML += `
                    <a href="${project.link}" class="button" target="_blank">Voir le projet</a>
                    `
                }
            `
            </div>
            `;
            projectsContainer.appendChild(projectElement);
        });
    })
});
document.addEventListener('DOMContentLoaded', function () {
    fetch('projets.json').then(function (response) {
        return response.json();
    }).then(function (data) {
        const projects = data;
        const projectsContainer = document.querySelector('.projects-container');
        projects.forEach(function (project) {
            const projectElement = document.createElement('div');
            projectElement.classList.add('project');
            projectElement.innerHTML = `
            <div class="container-images"><img src="${project.image}" alt="" class="project-image">
            </div>
                <h2 class="aboreto project-name">${project.name}</h2>
                    <button href="" class="montserrat-400 project-link" target="_blank">Voir le projet</button>
                    `;
            projectsContainer.appendChild(projectElement);
            const containerPopup = document.querySelector('.container-popup');
            const popup = document.createElement('div');
            popup.classList.add('popup-projet');
            popup.classList.add(`popup-${project.id}`);
            popup.innerHTML = `
                    <div class=close></div>
                        <h3 class="aboreto">${project.name}</h3>
                        <p class="date">${project.date}</p>
                        <img class="image1" src="${project.image}" alt="" class="project-image">
                        <img class="image2" src="${project.image2}" alt="" class="project-image">
                        <img class="image3" src="${project.image3}" alt="" class="project-image">
                        <p class="description">${project.description}</p>
                        <a href="${project.link}" class="montserrat-400 button" target="_blank">Voir le projet</a>
                    </div>
                    `;
            containerPopup.appendChild(popup);

            projectElement.addEventListener('click', function () {
                let projetpopup = document.querySelector(`.popup-${project.id}`);
                console.log(projetpopup);
                projetpopup.classList.add('visible');
            });

            const close = document.querySelector('.close');
            close.addEventListener('click', function () {
                let projetpopup = document.querySelector(`.popup-${project.id}`);
                projetpopup.classList.remove('visible');
            });

            window.addEventListener('click', (e) => {
                let projetpopup = document.querySelector(`.popup-${project.id}`);
                if (e.target == projetpopup) {
                    console.log(e.target);
                    projetpopup.classList.remove('visible');
                }
            });
        });
    })




});
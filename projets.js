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
                        <p class="groupe">${project.groupe}</p>
                        <img src="${project.image}" alt="" class="main-image">
                        <div class="container-select-images"><img src="${project.image}" alt="" class="project-image image1 image-selected">
                        <img src="${project.image2}" alt="" class="project-image image2">
                        <img src="${project.image3}" alt="" class="project-image image3">
                        </div>
                        <p class="description">${project.description}</p>
                        <p class="technologies">${project.technologies}</p>
                        <a href="${project.link}" class="montserrat-400 button" target="_blank">Voir le projet</a>
                    </div>
                    `;
            containerPopup.appendChild(popup);

            projectElement.addEventListener('click', function () {
                let projetpopup = document.querySelector(`.popup-${project.id}`);
                containerPopup.classList.add('visible');
                projetpopup.classList.add('visible');
            });

            const close = document.querySelector('.close');
            close.addEventListener('click', function () {
                let projetpopup = document.querySelector(`.popup-${project.id}`);
                containerPopup.classList.remove('visible');
                projetpopup.classList.remove('visible');
            });


            window.addEventListener('click', (e) => {
                let projetpopup = document.querySelector(`.popup-${project.id}`);
                const nav =document.querySelector('header');
                if (e.target == containerPopup || e.target == nav) {
                    console.log(e.target);
                    containerPopup.classList.remove('visible');
                    projetpopup.classList.remove('visible');
                }
            });

            const images = document.querySelectorAll('.project-image');

            images.forEach((image) => {
                image.addEventListener('click', function () {
                    images.forEach((image) => {
                        image.classList.remove('image-selected');
                    });
                    image.classList.add('image-selected');
                    const mainImage = document.querySelector('.main-image');
                    console.log(mainImage);
                    mainImage.src = image.src;
                });
            });

        });
    })




});
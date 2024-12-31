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
            <div class="container-images"><img src="${project.image}" alt="" class="card-image">
            </div>
                <h2 class="aboreto project-name">${project.name}</h2>
                    <button href="" class="montserrat-400 project-link" target="_blank">Voir le projet</button>
                    `;
            projectsContainer.appendChild(projectElement);
            const containerPopup = document.querySelector('.container-popup');
            const popup = document.createElement('div');
            popup.classList.add('popup-projet');
            popup.classList.add(`popup-${project.id}`);
            if (document.getElementById('language-selector').value === 'fr') {
                popup.innerHTML = `
                        <div class=close></div>
                        <div class="popup-left">
                            <h3 class="aboreto popup-titre">${project.name}</h3>
                            <p class="date montserrat-200">${project.date}</p>
                            <p class="groupe montserrat-200">${project.groupe}</p>
                            <img src="${project.image}" alt="" class="main-image">
                            <div class="container-select-images"><img src="${project.image}" alt="" class="project-image image1 image-selected">
                            <img src="${project.image2}" alt="" class="project-image image2">
                            <img src="${project.image3}" alt="" class="project-image image3">
                            </div>
                        </div>
                        <div class="popup-right">
                            <p class="description montserrat-400">${project.description}</p>
                            <p class="technologies montserrat-200">${project.technologies}</p>
                            <a href="${project.link}" class="montserrat-400 button" target="_blank">Voir le projet</a>
                        </div>
                        `;
            } else if (document.getElementById('language-selector').value === 'en') {
                popup.innerHTML = `<div class=close></div>
                <div class="popup-left">
                    <h3 class="aboreto popup-titre">${project.name}</h3>
                    <p class="date montserrat-200">${project.ENdate}</p>
                    <p class="groupe montserrat-200">${project.ENgroupe}</p>
                    <img src="${project.image}" alt="" class="main-image">
                    <div class="container-select-images"><img src="${project.image}" alt="" class="project-image image1 image-selected">
                    <img src="${project.image2}" alt="" class="project-image image2">
                    <img src="${project.image3}" alt="" class="project-image image3">
                    </div>
                </div>
                <div class="popup-right">
                    <p class="description montserrat-400">${project.ENdescription}</p>
                    <p class="technologies montserrat-200">${project.technologies}</p>
                    <a href="${project.link}" class="montserrat-400 button" target="_blank">View project</a>
                </div>`;
            };
            containerPopup.appendChild(popup);

            projectElement.addEventListener('click', function () {
                const activePopup = document.querySelector('.popup-projet.visible');
                if (activePopup) {
                    activePopup.classList.remove('visible');
                }

                let projetpopup = document.querySelector(`.popup-${project.id}`);
                containerPopup.classList.add('visible');
                projetpopup.classList.add('visible');

                const images = projetpopup.querySelectorAll('.project-image');
                const mainImage = projetpopup.querySelector('.main-image');

                mainImage.src = project.image;
                images.forEach((img) => {
                    img.classList.remove('image-selected');
                });
                projetpopup.querySelector('.image1').classList.add('image-selected');

                images.forEach((image) => {
                    image.addEventListener('click', function () {
                        images.forEach((img) => {
                            img.classList.remove('image-selected');
                        });
                        image.classList.add('image-selected');
                        mainImage.src = image.src;
                    });
                });
            });


            const close = document.querySelectorAll('.close');
            close.forEach((close) => {
                close.addEventListener('click', function () {
                    const activePopup = document.querySelector('.popup.visible');
                    if (activePopup) {
                        activePopup.classList.remove('visible');
                    }
                    containerPopup.classList.remove('visible');
                });
            });

            window.addEventListener('click', (e) => {
                const activePopup = document.querySelector('.popup.visible');
                const header = document.querySelector('header');
                const nav = document.querySelector('nav');
                if (e.target == containerPopup || e.target == nav || e.target == projectsContainer || e.target == header) {
                    if (activePopup) {
                        activePopup.classList.remove('visible');
                    }
                    containerPopup.classList.remove('visible');
                }
            });

            const languageSelector = document.getElementById('language-selector');

            languageSelector.addEventListener('change', function () {
                if (languageSelector.value === 'fr') {
                    popup.innerHTML = `<div class=close></div>
                    <div class="popup-left">
                        <h3 class="aboreto popup-titre">${project.name}</h3>
                        <p class="date montserrat-200">${project.date}</p>
                        <p class="groupe montserrat-200">${project.groupe}</p>
                        <img src="${project.image}" alt="" class="main-image">
                        <div class="container-select-images"><img src="${project.image}" alt="" class="project-image image1 image-selected">
                        <img src="${project.image2}" alt="" class="project-image image2">
                        <img src="${project.image3}" alt="" class="project-image image3">
                        </div>
                    </div>
                    <div class="popup-right">
                        <p class="description montserrat-400">${project.description}</p>
                        <p class="technologies montserrat-200">${project.technologies}</p>
                        <a href="${project.link}" class="montserrat-400 button" target="_blank">Voir le projet</a>
                    </div>
                    `}
                else if (document.getElementById('language-selector').value === 'en') {
                    popup.innerHTML = `<div class=close></div>
                        <div class="popup-left">
                            <h3 class="aboreto popup-titre">${project.name}</h3>
                            <p class="date montserrat-200">${project.ENdate}</p>
                            <p class="groupe montserrat-200">${project.ENgroupe}</p>
                            <img src="${project.image}" alt="" class="main-image">
                            <div class="container-select-images"><img src="${project.image}" alt="" class="project-image image1 image-selected">
                            <img src="${project.image2}" alt="" class="project-image image2">
                            <img src="${project.image3}" alt="" class="project-image image3">
                            </div>
                        </div>
                        <div class="popup-right">
                            <p class="description montserrat-400">${project.ENdescription}</p>
                            <p class="technologies montserrat-200">${project.technologies}</p>
                            <a href="${project.link}" class="montserrat-400 button" target="_blank">View project</a>
                        </div>`;
                };
            });
        })
    });
});
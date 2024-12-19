document.addEventListener('DOMContentLoaded', function () {
    // // Navbar
    // const navbar = '<nav><div class="circle"></div><header><div class="button-language"><span class="fr hide">FR</span><span class="en hide">EN</span></div><a href="index.html" class="title-portfolio"><div class="aboreto title-nav">Portfolio</div></a> <a href="presentation.html" class="montserrat-200">Présentation</a><a href="projets.html" class="montserrat-200">Projets</a><a href="contact.html" class="montserrat-200">Contact</a><div class="menu"><div class="burger"><div class="line-burger line-burger1"></div><div class="line-burger line-burger2"></div><div class="line-burger line-burger3"></div></div></div></nav></header><div class="sidenav cache"><div class="sidenav-placement"><ul><a href="presentation.html" class="montserrat-200 cache1"><li>Présentation</li></a><div class="line cache4"></div><a href="projets.html" class="montserrat-200 cache2"><li>Projets</li></a><div class="line cache4"></div><a href="contacts.html" class="montserrat-200 cache3"><li>Contact</li></a><div class="close-button"></div></ul></div></div>';
    // let Header = document.querySelectorAll('.header');

    // for (let i = 0; i < Header.length; i++) {
    //     Header[i].innerHTML = navbar;
    // }



// Sidenav
const sidenavButton = document.querySelector('.menu');

const sidenav = document.querySelector('.sidenav');
const CloseButton = document.querySelector('.close-button');

const lien1 = document.querySelector('.cache1');
const lien2 = document.querySelector('.cache2');
const lien3 = document.querySelector('.cache3');
const lignes = document.querySelectorAll('.cache4');


const ligneBurger1 = document.querySelector('.line-burger1');
const ligneBurger2 = document.querySelector('.line-burger2');
const ligneBurger3 = document.querySelector('.line-burger3');


sidenavButton.addEventListener('click', function () {
    sidenavButton.classList.add('transparent');
    ligneBurger1.classList.add('cache-burger1');
    ligneBurger2.classList.add('cache-burger2');
    ligneBurger3.classList.add('cache-burger3');
    sidenav.classList.remove('cache');
    sidenav.classList.add('visible');
    lien1.classList.remove('cache1');
    lien1.classList.add('visible1');
    lien2.classList.remove('cache2');
    lien2.classList.add('visible2');
    lien3.classList.remove('cache3');
    lien3.classList.add('visible3');
    for (let i = 0; i < lignes.length; i++) {
        lignes[i].classList.remove('cache4');
        lignes[i].classList.add('visible4');
    }

});



CloseButton.addEventListener('click', function () {
    sidenavButton.classList.remove('transparent');
    ligneBurger1.classList.remove('cache-burger1');
    ligneBurger2.classList.remove('cache-burger2');
    ligneBurger3.classList.remove('cache-burger3');
    ligneBurger1.classList.add('visible1');
    ligneBurger2.classList.add('visible2');
    ligneBurger3.classList.add('visible3');
    sidenav.classList.remove('visible');
    sidenav.classList.add('cache');
    lien1.classList.remove('visible1');
    lien1.classList.add('cache1');
    lien2.classList.remove('visible2');
    lien2.classList.add('cache2');
    lien3.classList.remove('visible3');
    lien3.classList.add('cache3');
    for (let i = 0; i < lignes.length; i++) {
        lignes[i].classList.remove('visible4');
        lignes[i].classList.add('cache4');
    }
});


// Background sidenav

const cercle = document.querySelector('.circle');
sidenavButton.addEventListener('click', function () {
    cercle.classList.add('clip-path-active')
});
CloseButton.addEventListener('click', function () {
    cercle.classList.remove('clip-path-active')
});


// Bubble animation

// Effet de mouvement avec la souris
let mouseX = 0, mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Déplacer légèrement chaque bulle
    const bubble = document.querySelector('.bulle-container');
        const positionX = parseInt(bubble.style.left);
        const positionY = parseInt(bubble.style.top);
        const deltaX = (mouseX - window.innerWidth ) * -0.02; // Déplacement horizontal
        const deltaY = (mouseY - window.innerHeight ) * -0.02; // Déplacement vertical

        bubble.style.left = positionX + (deltaX)+'px';
        bubble.style.top = positionY + (deltaY)+'px';
});

});
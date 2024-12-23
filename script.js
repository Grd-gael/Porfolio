document.addEventListener('DOMContentLoaded', function () {

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
});


// Accordions

const accordions = document.querySelectorAll('.accordion');

const accordionsTrigger = document.querySelectorAll('.accordion button');
accordionsTrigger.forEach((trigger, index) => {
    const accordionContent = trigger.nextElementSibling;

    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('id', `accordion-trigger-${index}`);
    accordionContent.setAttribute('id', `accordion-content-${index}`);
    trigger.setAttribute('aria-controls', `accordion-content-${index}`);
    accordionContent.setAttribute(
        'aria-labelledby',
        `accordion-trigger-${index}`,
    );

    trigger.addEventListener('click', () => {
        resetAccordions(trigger.parentElement);

        const isOpen = trigger.getAttribute('aria-expanded') === 'true';

        console.log(isOpen);

        trigger.setAttribute('aria-expanded', !isOpen);
        trigger.parentElement.classList.toggle('accordion--opened');

        trigger.parentElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
    });
});

const resetAccordions = (accordionToOmit) => {
    accordions.forEach((accordion) => {
        if (accordion !== accordionToOmit) {
            accordion.classList.remove('accordion--opened');
        }
    });

    accordionsTrigger.forEach((trigger) => {
        if (trigger.parentElement !== accordionToOmit) {
            trigger.setAttribute('aria-expanded', 'false');
        }
    });
};


// Back to top button

const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
document.addEventListener('DOMContentLoaded', function () {

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
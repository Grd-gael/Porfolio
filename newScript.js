document.addEventListener('DOMContentLoaded', function () {


  // Loader
  const loadingPage = document.querySelector('.loading-page');
  window.addEventListener('load', () => {
    setTimeout(() => {
      loadingPage.style.opacity = '0';
      setTimeout(() => {
        loadingPage.style.display = 'none';
      }, 1400);
    }, 2500);
  });


  // Texte qui apparaît 

  const TextAppear = (text, container, start, end) => {
    const textElement = container;

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;

      if (scrollY < start) {
        textElement.textContent = "";
      } else if (scrollY > end) {
        textElement.textContent = text;
      } else {
        // progress de 0 → 1
        const progress = (scrollY - start) / (end - start);
        const charsToShow = Math.floor(progress * text.length);
        textElement.textContent = text.slice(0, charsToShow);
      }
    });
  };



  const PresentationText1 = `Avec l’objectif d’être un développeur polyvalent,
    j'ai cette envie constante d’apprendre de nouvelles technologies
     pour lier technique et créativité dans des expériences web engageantes.`;


  const textElement1 = document.getElementById("presentation-text-1");

  TextAppear(PresentationText1, textElement1, 2250, 3900);

  const PresentationText2 = `Du front-end au back-end,
  j'ai la volonté de développer des projets complets, 
  en gardant toujours en tête l’expérience utilisateur.`;


  const textElement2 = document.getElementById("presentation-text-2");

  TextAppear(PresentationText2, textElement2, 4250, 5900);

  const PresentationText3 = `J’aime imaginer des sites agréables à découvrir,
    techniquement propres et esthétiquement plaisants,
    avec l’envie constante de faire mieux à chaque projet.`;


  const textElement3 = document.getElementById("presentation-text-3");

  TextAppear(PresentationText3, textElement3, 6250, 7900);








  const dateElement = document.getElementById("date");
  const currentDate = new Date().toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
  dateElement.textContent = currentDate;


  const timeElement = document.getElementById("time");
  timeElement.textContent = new Date().toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
  function updateTime() {
    const currentTime = new Date().toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
    timeElement.textContent = currentTime;
  }
  setInterval(updateTime, 1000);


  // Ouvre une popup au clic sur une icône
  document.querySelectorAll('.icone-ordi').forEach(icon => {
    icon.addEventListener('click', () => {
      const popupId = icon.getAttribute('data-popup-id');
      const popup = document.getElementById(popupId);
      if (popup) {
        if (popup.style.display === 'flex') {
          closePopup(popupId);
        } else {
          popup.style.display = 'flex';
          zIndexCompteur++;
          popup.style.zIndex = zIndexCompteur;
        }
      }
    });
  });

  document.querySelectorAll('.popup-close').forEach(button => {
    button.addEventListener('click', () => {
      const popupId = button.getAttribute('data-popup-id');
      closePopup(popupId);
    });
  });

  // Fonction pour fermer une popup
  function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    if (popup) {
      popup.style.display = 'none';
    }
  }

  let zIndexCompteur = 1000;
  const footerHauteur = document.querySelector('footer').offsetHeight;

  // Fonction pour rendre une popup déplaçable
  function makeDraggable(popupId, headerId) {
    const popup = document.getElementById(popupId);
    const header = document.getElementById(headerId);
    let offsetX = 0, offsetY = 0, isDragging = false;

    header.addEventListener("mousedown", (e) => {
      isDragging = true;
      popup.style.cursor = 'url("../img/icone_px/grabbing.cur") 30 18, auto';
      zIndexCompteur++;
      popup.style.zIndex = zIndexCompteur;
      offsetX = e.clientX - popup.offsetLeft;
      offsetY = e.clientY - popup.offsetTop;
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", stopDrag);
    });

    popup.addEventListener("mousedown", () => {
      zIndexCompteur++;
      popup.style.zIndex = zIndexCompteur;
    });

    function onMouseMove(e) {
      if (!isDragging) return;


      let newLeft = e.clientX - offsetX;
      let newTop = e.clientY - offsetY;

      const maxLeft = document.documentElement.clientWidth - popup.offsetWidth;
      const maxTop = document.documentElement.clientHeight - popup.offsetHeight - footerHauteur;

      newLeft = Math.max(0, Math.min(newLeft, maxLeft));
      newTop = Math.max(0, Math.min(newTop, maxTop));

      popup.style.left = newLeft + "px";
      popup.style.top = newTop + "px";
    }

    function stopDrag() {
      isDragging = false;
      popup.style.cursor = 'url("../img/icone_px/grab.cur") 30 18, auto';
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", stopDrag);
    }
  }

  makeDraggable("popup-trash", "popup-header-trash");
  makeDraggable("popup-Internet", "popup-header-Internet");
  // makeDraggable("popup-mail", "popup-header-mail");
  makeDraggable('popup-cv', 'popup-header-cv');
  makeDraggable('popup-presentation', 'popup-header-presentation');
  makeDraggable('popup-projets', 'popup-header-projets');


  document.querySelector('#projets').addEventListener('mouseover', function () {
    this.children[0].src = 'img/icone_px/dossier-hover.png';
  });

  document.querySelector('#projets').addEventListener('mouseout', function () {
    this.children[0].src = 'img/icone_px/dossier.png';
  });

  document.querySelector('#trash').addEventListener('mouseover', function () {
    this.children[0].src = 'img/icone_px/poubelle-hover.png';
  });

  document.querySelector('#trash').addEventListener('mouseout', function () {
    this.children[0].src = 'img/icone_px/poubelle.png';
  });

  document.querySelector('#Mail').addEventListener('mouseover', function () {
    this.children[0].children[0].src = 'img/icone_px/email-hover.png';
  });

  document.querySelector('#Mail').addEventListener('mouseout', function () {
    this.children[0].children[0].src = 'img/icone_px/email.png';
  });

  document.querySelector('#Internet').addEventListener('mouseover', function () {
    this.children[0].src = 'img/icone_px/internet-hover.png';
  });

  document.querySelector('#Internet').addEventListener('mouseout', function () {
    this.children[0].src = 'img/icone_px/internet.png';
  });

  document.querySelector('#cv').addEventListener('mouseover', function () {
    this.children[0].src = 'img/icone_px/bloc-note-hover.png';
  });

  document.querySelector('#cv').addEventListener('mouseout', function () {
    this.children[0].src = 'img/icone_px/bloc-note.png';
  });

  const soundIcon = document.getElementById("sound-icon");
  const soundRange = document.getElementById("sound-range");

  setVolume();

  soundRange.addEventListener("input", function () {
    setVolume();
  });

  function setVolume() {
    let volume = soundRange.value;
    if (volume == 0) {
      soundIcon.src = "img/icone_px/son-mute.png";
    } else if (volume > 0 && volume <= 30) {
      soundIcon.src = "img/icone_px/son-low.png";
    } else if (volume > 30 && volume <= 70) {
      soundIcon.src = "img/icone_px/son-medium.png";
    } else {
      soundIcon.src = "img/icone_px/son-max.png";
    }
  }

  soundIcon.addEventListener("click", function () {
    if (soundRange.value != 0) {
      soundRange.value = 0;
    } else {
      soundRange.value = 50;
    }
    setVolume();
  });

  // Start Menu

  const startMenuButton = document.querySelector(".start-menu-button");
  const startMenu = document.getElementById("start-menu");

  startMenuButton.addEventListener("click", function () {
    startMenu.classList.toggle("close");
  });



  document.addEventListener("click", function (event) {
    if (!startMenu.contains(event.target) && !startMenuButton.contains(event.target)) {
      startMenu.classList.add("close");
    }
  });



  const powerButton = document.getElementById("power-button");
  const powerPopup = document.getElementById("popup-poweroff");
  powerButton.addEventListener("click", function () {
    powerPopup.style.display = 'flex';
    document.getElementById("popup-overlay").style.display = "block";
    startMenu.classList.add("close");
  });



  const yesBtn = document.getElementById("button-yes-poweroff");
  const yesBtnInitialLeft = yesBtn.style.left;
  const yesBtnInitialTop = yesBtn.style.top;
  const popup = document.getElementById("popup-poweroff");

  popup.addEventListener("mousemove", (e) => {
    const popupRect = popup.getBoundingClientRect();
    const btnRect = yesBtn.getBoundingClientRect();

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const btnX = btnRect.left + btnRect.width / 2;
    const btnY = btnRect.top + btnRect.height / 2;

    const dx = mouseX - btnX;
    const dy = mouseY - btnY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    const fleeDistance = 90;

    if (distance < fleeDistance) {
      const angle = Math.atan2(dy, dx);

      let newLeft = yesBtn.offsetLeft - Math.cos(angle) * 40;
      let newTop = yesBtn.offsetTop - Math.sin(angle) * 40;

      const minX = 10;
      const minY = 10;
      const maxX = popup.clientWidth - yesBtn.offsetWidth - 10;
      const maxY = popup.clientHeight - yesBtn.offsetHeight - 10;

      newLeft = Math.max(minX, Math.min(maxX, newLeft));
      newTop = Math.max(minY, Math.min(maxY, newTop));

      yesBtn.style.left = newLeft + "px";
      yesBtn.style.top = newTop + "px";
    }
  });

  const noBtn = document.getElementById("button-no-poweroff");
  noBtn.addEventListener("click", function () {
    powerPopup.style.display = 'none';
    document.getElementById("popup-overlay").style.display = "none";
    yesBtn.style.left = yesBtnInitialLeft;
    yesBtn.style.top = yesBtnInitialTop;
  });

  yesBtn.addEventListener("click", function () {
    window.location.href = "index.html";
  });





});
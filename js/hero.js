const hero = document.querySelector('.hero');

const heroText = document.querySelector('.hero-text');

const heroVisual = document.querySelector('.hero-visual');



hero.addEventListener('mousemove', (e) => {

    const x = (window.innerWidth / 2 - e.clientX) / 30;

    const y = (window.innerHeight / 2 - e.clientY) / 30;


    heroText.style.transform =
    `translate(${x * 0.6}px, ${y * 0.6}px)`;


    heroVisual.style.transform =
    `translate(${x * -0.8}px, ${y * -0.8}px)`;

});
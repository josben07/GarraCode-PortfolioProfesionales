const cursor = document.querySelector('.custom-cursor');



window.addEventListener('mousemove', (e) => {

    cursor.style.left = e.clientX + 'px';

    cursor.style.top = e.clientY + 'px';

});



/* =========================
   HOVER EFFECT
========================= */

const hoverElements = document.querySelectorAll(
    'a, button, .orb'
);



hoverElements.forEach((element) => {

    element.addEventListener('mouseenter', () => {

        cursor.classList.add('active');

    });


    element.addEventListener('mouseleave', () => {

        cursor.classList.remove('active');

    });

});
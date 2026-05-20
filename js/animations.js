/* =========================
   LENIS SMOOTH SCROLL Cinematografico
========================= */


const lenis = new Lenis({

    duration: 1.2,

    smoothWheel: true,

    wheelMultiplier: 0.9,

    touchMultiplier: 1.5,

    infinite: false,

});



function raf(time){

    lenis.raf(time);

    requestAnimationFrame(raf);

}

requestAnimationFrame(raf);



/* =========================
   LOADER Animacion primaria
========================= */

window.addEventListener('load', () => {

    const loader =
    document.querySelector('.loader');


    setTimeout(() => {

        loader.classList.add('hide');

    }, 2600);

});

/* =========================
   CUSTOM CURSOR (cursor premium)
========================= */

const luxuryCursor =
document.querySelector('.custom-cursor');

const cursorDot =
document.querySelector('.cursor-dot');



window.addEventListener('mousemove', (e) => {

    luxuryCursor.style.left =
    e.clientX + 'px';

    luxuryCursor.style.top =
    e.clientY + 'px';


    cursorDot.style.left =
    e.clientX + 'px';

    cursorDot.style.top =
    e.clientY + 'px';

});



/* HOVER ELEMENTS */

const cursorHoverElements =
document.querySelectorAll(

    'a, button, .professional-image, .project-image'

);



cursorHoverElements.forEach((element) => {

    element.addEventListener('mouseenter', () => {

        luxuryCursor.classList.add('hover');

    });


    element.addEventListener('mouseleave', () => {

        luxuryCursor.classList.remove('hover');

    });

});

/* =========================
   SCROLL REVEAL
========================= */

const reveals = document.querySelectorAll('.reveal');


const revealOnScroll = () => {

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;

        const revealTop =
        element.getBoundingClientRect().top;

        const revealPoint = 100;


        if(revealTop < windowHeight - revealPoint){

            element.classList.add('active');

        }

    });

};


window.addEventListener(
    'scroll',
    revealOnScroll
);


revealOnScroll();

/* =========================
   PROJECT PARALLAX
========================= */

const projectCards =
document.querySelectorAll('.project-card');



projectCards.forEach((card) => {

    const image =
    card.querySelector('.project-image');


    card.addEventListener('mousemove', (e) => {

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;


        const moveX =
        (x - rect.width / 2) / 40;

        const moveY =
        (y - rect.height / 2) / 40;


        image.style.transform =

        `
        rotateY(${moveX * 0.4}deg)
        rotateX(${-moveY * 0.4}deg)
        translateZ(20px)
        `;

    });



    card.addEventListener('mouseleave', () => {

        image.style.transform =

        `
        rotateY(0deg)
        rotateX(0deg)
        translateZ(0px)
        `;

    });

});


/* =========================
   PROFILE MODAL DYNAMIC CLICK EN VER PERFIL
========================= */

const modal =
document.querySelector('.profile-modal');

const modalClose =
document.querySelector('.modal-close');

const profileCards =
document.querySelectorAll('.professional-card');


/* MODAL ELEMENTS */

const modalImage =
document.getElementById('modalImage');

const modalRole =
document.getElementById('modalRole');

const modalName =
document.getElementById('modalName');

const modalDescription =
document.getElementById('modalDescription');

const modalTags =
document.getElementById('modalTags');

const modalQuote =
document.getElementById('modalQuote');



/* OPEN MODAL */

profileCards.forEach((card) => {

    const trigger =
    card.querySelector('.image-overlay');


    trigger.addEventListener('click', () => {

        const name =
        card.dataset.name;

        const role =
        card.dataset.role;

        const image =
        card.dataset.image;

        const description =
        card.dataset.description;

        const quote =
        card.dataset.quote;

        const tags =
        card.dataset.tags.split(',');


        /* INSERT DATA */

        modalImage.src = image;

        modalRole.textContent = role;

        modalName.textContent = name;

        modalDescription.textContent = description;

        modalQuote.textContent = quote;


        /* TAGS */

        modalTags.innerHTML = '';

        tags.forEach((tag) => {

            const span =
            document.createElement('span');

            span.textContent = tag;

            modalTags.appendChild(span);

        });


        /* SHOW */

        modal.classList.add('active');

    });

});



/* CLOSE */

modalClose.addEventListener('click', () => {

    modal.classList.remove('active');

});



/* BACKDROP */

modal.addEventListener('click', (e) => {

    if(e.target.classList.contains('modal-backdrop')){

        modal.classList.remove('active');

    }

});

/* =========================
   PROJECT MODAL CLICK EN EXPLORAR POROJECTO
========================= */

const projectModal =
document.querySelector('.project-modal');

const projectClose =
document.querySelector('.project-close');

const portfolioCards =
document.querySelectorAll('.project-card');


/* ELEMENTS */

const projectModalImage =
document.getElementById('projectModalImage');

const projectModalCategory =
document.getElementById('projectModalCategory');

const projectModalTitle =
document.getElementById('projectModalTitle');

const projectModalDescription =
document.getElementById('projectModalDescription');

const projectModalStack =
document.getElementById('projectModalStack');

const projectModalYear =
document.getElementById('projectModalYear');

const projectModalQuote =
document.getElementById('projectModalQuote');



/* OPEN */

portfolioCards.forEach((card) => {

    const trigger =
    card.querySelector('.project-overlay');


    trigger.addEventListener('click', () => {

        const title =
        card.dataset.project;

        const category =
        card.dataset.category;

        const image =
        card.dataset.image;

        const description =
        card.dataset.description;

        const quote =
        card.dataset.quote;

        const year =
        card.dataset.year;

        const stack =
        card.dataset.stack.split(',');


        /* INSERT */

        projectModalImage.src = image;

        projectModalCategory.textContent = category;

        projectModalTitle.textContent = title;

        projectModalDescription.textContent = description;

        projectModalYear.textContent = year;

        projectModalQuote.textContent = quote;


        /* STACK */

        projectModalStack.innerHTML = '';

        stack.forEach((item) => {

            const span =
            document.createElement('span');

            span.textContent = item;

            projectModalStack.appendChild(span);

        });


        /* SHOW */

        projectModal.classList.add('active');

    });

});



/* CLOSE */

projectClose.addEventListener('click', () => {

    projectModal.classList.remove('active');

});



/* BACKDROP */

projectModal.addEventListener('click', (e) => {

    if(e.target.classList.contains('project-backdrop')){

        projectModal.classList.remove('active');

    }

});


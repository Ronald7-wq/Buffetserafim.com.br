// =====================
// SCROLL SUAVE
// =====================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute('href'))
        .scrollIntoView({
            behavior:'smooth'
        });
    });
});


// =====================
// ANIMAÇÃO AO APARECER
// =====================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }

    });

},{
    threshold:0.15
});

document.querySelectorAll('.card,.menu-card,.gallery img')
.forEach(el=>{
    el.classList.add('hidden');
    observer.observe(el);
});


// =====================
// CONTADOR ANIMADO
// =====================

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target){

            counter.innerText =
            `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target;
        }

    };

    updateCounter();
});


// =====================
// HEADER DINÂMICO
// =====================

window.addEventListener('scroll',()=>{

    const header = document.querySelector('header');

    if(window.scrollY > 100){

        header.classList.add('scrolled');

    }else{

        header.classList.remove('scrolled');
    }

});


// =====================
// BOTÃO WHATSAPP PULSANDO
// =====================

const whatsapp = document.querySelector('.whatsapp-float');

setInterval(()=>{

    whatsapp.classList.add('pulse');

    setTimeout(()=>{

        whatsapp.classList.remove('pulse');

    },1000);

},3000);


// =====================
// GALERIA LIGHTBOX
// =====================

const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach(img => {

    img.addEventListener('click',()=>{

        const lightbox =
        document.createElement('div');

        lightbox.id = 'lightbox';

        document.body.appendChild(lightbox);

        const image =
        document.createElement('img');

        image.src = img.src;

        lightbox.appendChild(image);

        lightbox.addEventListener('click',()=>{

            lightbox.remove();

        });

    });

});


// =====================
// PARALLAX HERO
// =====================

window.addEventListener('scroll',()=>{

    const hero = document.querySelector('.hero');

    let offset = window.pageYOffset;

    hero.style.backgroundPositionY =
    offset * 0.5 + 'px';

});
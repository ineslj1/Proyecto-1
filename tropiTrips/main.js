const slide = document.querySelector("#slide");
let carrouselImages = document.querySelectorAll(".carrousel-slide");
let carrouselImagesLast = carrouselImages[carrouselImages.length - 1];

//Button
const atras = document.querySelector("#atras");
const adelante = document.querySelector("#adelante");

slide.insertAdjacentElement('afterbegin', carrouselImagesLast);

function next() {
    let carrouselImagesFirst = document.querySelectorAll(".carrousel-slide")[0];
    slide.style.marginLeft = "-200%";
    slide.style.transition = "all 0.5s";
    setTimeout(function () {
        slide.style.transition = "none";
        slide.insertAdjacentElement('beforeend', carrouselImagesFirst);
        slide.style.marginLeft = "-100%";
    }, 500);
}

function prev() {
    let carrouselImagesLast = document.querySelectorAll(".carrousel-slide")[0];
    slide.style.marginLeft = "-200%";
    slide.style.transition = "all 0.5s";
    setTimeout(function () {
        slide.style.transition = "none";
        slide.insertAdjacentElement('afterbegin', carrouselImagesLast);
        slide.style.marginLeft = "-100%";
    }, 500);
}

adelante.addEventListener('click', function () {
    next();
});

atras.addEventListener('click', function () {
    prev();
});




/*
//Counter
let counter = 1;
const size = carrouselImages[0].clientWidth;

Slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button Listeners

adelante.addEventListener('click', () => {
if (counter >= carrouselImages.length - 1) return;
Slide.style.transition = "transforms 0.4s ease-in-out";
counter++;
Slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

atras.addEventListener('click', () => {
if (counter <= 0) return;
Slide.style.transition = "transforms 0.4s ease-in-out";
counter--;
Slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

Slide.addEventListener('transitioned', () => {
if (carrouselImages[counter].id === 'lastClone') {
    Slide.style.transition = "none";
    counter = carrouselImages.length - 2;
    Slide.style.transforms = 'translateX(' + (-size * counter) + 'px)';
}
if (carrouselImages[counter].id === 'firstClone') {
    Slide.style.transition = "none";
    counter = carrouselImages.length - counter;
    Slide.style.transforms = 'translateX(' + (-size * counter) + 'px)';
}
}); */

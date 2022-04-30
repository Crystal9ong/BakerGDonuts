//---------------- popup banner ----------------//
// popup banner cancel
const popCancelBtn = document.querySelector('.cancel');
const popup = document.querySelector('.form-popup');

popCancelBtn.addEventListener('click', () => {
    popup.classList.toggle("form-popup-close");
})

// popup banner send
const popupSend = document.querySelector('.popup_btn_w');
const popupResult = document.querySelector('.popup-result');

popupSend.addEventListener('click', () => {
    popup.classList.toggle("form-popup-close");
    popupResult.classList.toggle("popup-result_open");
})

// popup result
const mask = document.querySelector('.popup-result');

mask.addEventListener('click', () => {
    popupResult.classList.toggle("popup-result_close");
})


//---------------- comments slider ----------------//
const carouselSlide = document.querySelector('.carousel-slide');
const carouselItems = document.querySelectorAll('.comments_item');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselItems[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
    if (counter >= carouselItems.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselItems[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselItems.length - 1;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselItems[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = carouselItems.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});


//---------------- top slider ----------------//

var slider = document.querySelectorAll(".slider_item")

let slider_01 = 1;
setInterval(function () {

    if (slider_01 < slider.length) {
        slider[slider_01 - 1].style.opacity = 0;
        slider[slider_01].style.opacity = 1;
    } else {
        slider[slider_01 - 1].style.opacity = 0;
        slider_01 = 0;
        slider[slider_01].style.opacity = 1;
    }
    slider_01++;
}, 3000);
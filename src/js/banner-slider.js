/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */

const newsSwiper = new Swiper('.js-banner-slider', {
    slidesPerView: 4,
    dynamicBullets: true,
    spaceBetween: 25,
    
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },
});
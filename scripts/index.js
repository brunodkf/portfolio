const swiperSequencial = new Swiper('.carrousel__depoimentos', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    // autoplay: true,
    direction: 'horizontal',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});
// Menu Mobile
const button = document.querySelector('[data-button-menu]');
const navMenu = document.querySelectorAll('.header');
const corpoSite = document.querySelector('html')

button.addEventListener('click', function () {

 navMenu.forEach(e => e.classList.toggle("mobile"));

 corpoSite.style = 'overflow: hidden;';

 if(document.querySelector('[data-button-menu]').checked == false){
  corpoSite.removeAttribute("style");
 }

  const someBarra = () => {
    if (window.scrollY >= 500) {
      navMenu.forEach(e => e.classList.remove("mobile"));
      corpoSite.removeAttribute("style");
      document.querySelector('#checkbox-menu').checked = false;
    }
  }

  window.addEventListener('scroll', () => {
    someBarra();
  });

});



// slide de depoimentos

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
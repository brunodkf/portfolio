// Menu Mobile
const button = document.querySelector('[data-button-menu]');
const navMenu = document.querySelectorAll('.header');
const corpoSite = document.querySelector('html')

button.addEventListener('click', function () {

  navMenu.forEach(e => e.classList.toggle("mobile"));

  corpoSite.style = 'overflow: hidden;';

  if(document.querySelector('.header.mobile') == null){
    corpoSite.removeAttribute("style");
  }

  const someBarra = () => { //função que reseta o menu mobile
    if (window.scrollY >= 500) { //condição ativada ao scroll vertical ser ativado
      navMenu.forEach(e => e.classList.remove("mobile"));
      document.querySelector('#checkbox-menu').checked = false;
      corpoSite.removeAttribute("style");
    }

    if (window.innerWidth > 1024) { //condição ativada ao atingir o valor de largura determinado
      navMenu.forEach(e => e.classList.remove("mobile"));
      document.querySelector('#checkbox-menu').checked = false;
      corpoSite.removeAttribute("style");
    }
  }

  window.addEventListener('scroll', () => {
    someBarra();
  });

  window.addEventListener('resize', () => {
    someBarra();
  });


});



// slide da section de depoimentos

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
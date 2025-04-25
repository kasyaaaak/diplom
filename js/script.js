const swiper = new Swiper(".hero__slider", {
  loop: true,
  pagination: {
    el: ".hero__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 6000, // довша пауза між слайдами
    disableOnInteraction: false,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 1200, // повільніший перехід (час анімації в мілісекундах)
});



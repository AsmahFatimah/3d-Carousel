
var mySwiper = new Swiper('.swiper-container', 
{
  loop: true,
  speed: 1000,
  /* autoplay: {
    delay: 1000,
  }, */
  effect: 'coverflow',
  grabCursor: true,
  slidesPerView: 'auto',
  // slideToClickedSlide: true,
  centeredSlides: true,
  coverflowEffect: {
      rotate: 0,
      stretch: 30, 
      depth: 200,
      modifier: 1,
      slideShadows: false,
  },
  breakpoints: {
    640: {
      // slidesPerView: 1,
    },
    768: {
      // slidesPerView: 2,
    },
    
  },
});
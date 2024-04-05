//swiper slider
const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: "1.5",
  spaceBetween: 30,
  initialSlide: 2,
  centeredSlides: true,
  speed: 800,
    // Navigation arrows
    navigation: {
      nextEl: '.gallery__btn-next',
      prevEl: '.gallery__btn-prev',
    },
  });


  const navLinks = document.querySelectorAll('.nav__link');

  navLinks.forEach(function(link) {
    link.addEventListener('click', scrollToSection);
  });

  function scrollToSection(e) {
    e.preventDefault();
    const currentTarget = e.currentTarget; //либо this
    const href = currentTarget.getAttribute('href');
    const section = document.querySelector(href).offsetTop;
    if (!href || !href.startsWith('#')) {
      return;
    }
    
    window.scrollTo({top: section, behavior: 'smooth'});

  };
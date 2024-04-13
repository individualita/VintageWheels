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


const classes = {
  opened: 'opened',
};


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

function toggleAccordeon() {
  const isOpened = this.classList.contains(classes.opened);

  if (!isOpened) {
    collectionItem.forEach(function(otherItem) {
      otherItem.classList.remove(classes.opened);
    })
    this.classList.add(classes.opened);
  } else {
    this.classList.remove(classes.opened);
  }
}


const navLinks = document.querySelectorAll('.nav__link');
const collectionItem = document.querySelectorAll('.collection__item');
const footerLinks = document.querySelectorAll('.footer__menu-link');
const aboutSection = document.querySelector('.about');
const aboutImages = document.querySelectorAll('[data-image-overlay]');

const overlay = document.querySelector('.overlay');
const overlayImage = document.querySelector('.overlay-img');

navLinks.forEach(function(link) {
  link.addEventListener('click', scrollToSection);
});

collectionItem.forEach(function(item) {
  item.addEventListener('click', toggleAccordeon)
});

footerLinks.forEach(function(link) {
  link.addEventListener('click', scrollToSection);
});





aboutSection.addEventListener('click', function(e) {
  const currentTarget = e.target;

  if (currentTarget.hasAttribute('data-image-overlay')) {
    overlayImage.src = currentTarget.src;
    overlay.style.display ='flex';
    //убираем пролистывание страницы
    document.body.style.overflow = 'hidden';
  }
});



overlay.addEventListener('click', function(event) {
  if (event.target === this) {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  }
});





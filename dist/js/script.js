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

function showImage (e) {

  const currentTarget = e.target;

  if (currentTarget.hasAttribute('data-image-overlay')) {
    overlayImage.src = currentTarget.src;
    overlay.classList.add(classes.opened);
    //убираем пролистывание страницы
    document.body.style.overflow = 'hidden';
  }
}

const classes = {
  opened: 'opened',
};


const navLinks = document.querySelectorAll('.nav__link');
const collectionItem = document.querySelectorAll('.collection__item');
const footerLinks = document.querySelectorAll('.footer__menu-link');
const aboutSection = document.querySelector('.about');
const aboutImages = document.querySelectorAll('[data-image-overlay]');

const overlay = document.querySelector('.overlay');
const overlayImage = document.querySelector('.overlay-img');
const modal = overlay.querySelector('.modal');


navLinks.forEach(function(link) {
  link.addEventListener('click', scrollToSection);
});

collectionItem.forEach(function(item) {
  item.addEventListener('click', toggleAccordeon)
});

footerLinks.forEach(function(link) {
  link.addEventListener('click', scrollToSection);
});


aboutSection.addEventListener('click',showImage);


overlay.addEventListener('click', function(event) {
  if (event.target === this) {
    overlay.classList.remove(classes.opened);
    document.body.style.overflow = '';
  }
});





//пробую реализовать 

function openModal(e) {
  e.preventDefault();

  //set values from  the form
  const city = document.getElementById('city').value;
  const car = document.getElementById('car').value;
  const pickUpDate = document.getElementById('startdate').value;
  const pickUpTime = document.getElementById('starttime').value;
  const endDate = document.getElementById('enddate').value;
  const endTime = document.getElementById('endtime').value;

  if(!city || !car || !pickUpDate || !pickUpTime || !endDate || !endTime) {
    alert('Please fill in all fields.');
    return;
  }
  //set values in the modal 
  document.querySelector('[data-city]').value = city;
  document.querySelector('[data-car]').value = car;
  document.querySelector('[data-startdate]').value = pickUpDate;
  document.querySelector('[data-starttime]').value = pickUpTime;
  document.querySelector('[data-enddate]').value = endDate;
  document.querySelector('[data-endtime]').value = endTime;

  modal.classList.add(classes.opened);
  overlay.classList.add(classes.opened);

}

const openModalBtn = document.querySelector('[data-openmodal]');


openModalBtn.addEventListener('click', openModal);

/* 


*/
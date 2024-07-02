import  {swiper}  from "./modules/swiper";
  

  
  //-------------------------------------------------- Functions 
  
  
  function scrollToSection(event) {
	event.preventDefault();
	const currentTarget = event.currentTarget; 
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
  };
  
  function displayOverlayImage (event) {
  
	const currentTarget = event.target;
  
	if (currentTarget.hasAttribute('data-image-overlay')) {
	  overlayImage.src = currentTarget.src;
	  overlay.classList.add(classes.opened);
	  //Removing page scrolling.
	  document.body.style.overflow = 'hidden';
	}
  };
  function closeOverlay(event) {
	if(event.target === this ) {
	  overlay.classList.remove(classes.opened);
	  document.body.style.overflow = '';
	}
  };
  
  function closeModal(event) {
	if (event.target.classList.contains('modal__close')) {
	  modal.classList.remove(classes.opened);
	  document.body.style.overflow = '';
	}
  };
  
  
  function openReservationModal(event) {
	event.preventDefault();
  
	//set values from  the form
	const city = document.getElementById('city').value;
	const car = document.getElementById('car').value;
	const pickUpDate = document.getElementById('startdate').value;
	const pickUpTime = document.getElementById('starttime').value;
	const endDate = document.getElementById('enddate').value;
	const endTime = document.getElementById('endtime').value;
  
	const reservationError = document.querySelector('.booking__error');
  
	if(!city || !car || !pickUpDate || !pickUpTime || !endDate || !endTime) {
	  reservationError.style.display = 'block';
	  return;
	}
	reservationError.style.display = 'none';
	//set values in the modal 
	document.querySelector('[data-city]').value = city;
	document.querySelector('[data-car]').value = car;
	document.querySelector('[data-startdate]').value = pickUpDate;
	document.querySelector('[data-starttime]').value = pickUpTime;
	document.querySelector('[data-enddate]').value = endDate;
	document.querySelector('[data-endtime]').value = endTime;
  
	modal.classList.add(classes.opened);
	document.body.style.overflow = 'hidden';
  
  };
  
  
  
  
  
  //-------------------------------------------------- Constants 
  
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
  const modal = document.querySelector('.modal');
  const openModalBtn = document.querySelector('[data-openmodal]');
  
  
  
  
  //-------------------------------------------------- Event listeners 
  navLinks.forEach(function(link) {
	link.addEventListener('click', scrollToSection);
  });
  
  collectionItem.forEach(function(item) {
	item.addEventListener('click', toggleAccordeon)
  });
  
  footerLinks.forEach(function(link) {
	link.addEventListener('click', scrollToSection);
  });
  
  
  aboutSection.addEventListener('click',displayOverlayImage);
  
  
  
  overlay.addEventListener('click', closeOverlay);
  modal.addEventListener('click', closeModal);
  openModalBtn.addEventListener('click', openReservationModal);
  
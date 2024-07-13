import  {swiper}  from "./modules/swiper"; 
import { toggleMobileMenu } from "./modules/togglemobilemenu";
import { scrollToSection } from "./modules/scrolltosection";
import { handleOverlayClick, displayImageWithOverlay } from "./modules/overlay";
import { toggleAccordion } from "./modules/toggleaccordion";
import { handleReservationModal, closeReservationModal } from "./modules/modal";




toggleMobileMenu('.nav__hamburger', '.nav__list', 'nav__hamburger-active', 'nav__list-mobile');
scrollToSection('.nav__link', 'nav__link-active');
toggleAccordion('.collection__item', 'collection__item-opened');
handleOverlayClick('.overlay', 'overlay-opened');
displayImageWithOverlay('.overlay', 'overlay-opened', '.overlay-img', '.about');


const openModalBtn = document.querySelector('[data-openmodal]');
openModalBtn.addEventListener('click', () => {
	handleReservationModal(
		'.modal',
		{
			cityId: 'city',
			carId: 'car',
			startDateId: 'startdate',
			startTimeId: 'starttime',
			endDateId: 'enddate',
			endTimeId: 'endtime'
		},
		'.booking__error',
		'modal__opened'
	);
})


closeReservationModal('.modal', '.modal__close', 'modal__opened');

  
  
  

  
  
  

 
  
  
 
  
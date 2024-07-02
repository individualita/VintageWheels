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

export {swiper}; 
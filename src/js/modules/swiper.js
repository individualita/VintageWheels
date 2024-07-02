 //swiper slider

 
const swiper = new Swiper('.swiper', {
	loop: true,
	slidesPerView: "1.5",
	spaceBetween: 30,
	initialSlide: 2,
	centeredSlides: true,
	speed: 800,
	breakpoints: {
		740: {
			spaceBetween: 30,
		},
		640: {
			slidesPerView: "1.3",
			spaceBetween: 10,
		  },
		320: {
			slidesPerView: 1,
		},


	},
	  // Navigation arrows
	  navigation: {
		nextEl: '.gallery__btn-next',
		prevEl: '.gallery__btn-prev',
	  },
});

export {swiper}; 
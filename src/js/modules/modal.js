

function handleReservationModal(modalSelector, formSelectors, errorSelector, activeClass) {
	
    const modal = document.querySelector(modalSelector);
    const reservationError = document.querySelector(errorSelector);

    if (!modal || !reservationError) {
        console.error("Modal or error element not found");
        return;
    }

    // Получаем значения из формы
    const { cityId, carId, startDateId, startTimeId, endDateId, endTimeId } = formSelectors;
    const city = document.getElementById(cityId)?.value;
    const car = document.getElementById(carId)?.value;
    const pickUpDate = document.getElementById(startDateId)?.value;
    const pickUpTime = document.getElementById(startTimeId)?.value;
    const endDate = document.getElementById(endDateId)?.value;
    const endTime = document.getElementById(endTimeId)?.value;

    // Проверяем заполненность формы
    if (!city || !car || !pickUpDate || !pickUpTime || !endDate || !endTime) {
        reservationError.style.display = 'block';
        return;
    }
    reservationError.style.display = 'none';

    // Устанавливаем значения в модальное окно
    modal.querySelector('[data-city]').value = city;
    modal.querySelector('[data-car]').value = car;
    modal.querySelector('[data-startdate]').value = pickUpDate;
    modal.querySelector('[data-starttime]').value = pickUpTime;
    modal.querySelector('[data-enddate]').value = endDate;
    modal.querySelector('[data-endtime]').value = endTime;

    modal.classList.add(activeClass);
    document.body.style.overflow = 'hidden';
} 

function closeReservationModal(modalSelector, closeBtnSelector, activeClass) {

	const modal = document.querySelector(modalSelector);
	const closeBtn = document.querySelector(closeBtnSelector);

	if (!modal || !closeBtn) {
        console.error("Button or close button element not found");
        return;
    }

	closeBtn.addEventListener('click', () => {
		modal.classList.remove(activeClass);
		document.body.style.overflow = '';
	});


}

export {handleReservationModal, closeReservationModal};




  
  
  
  
  
  
 

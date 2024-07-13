function displayOverlay(overlaySelector, activeClass) {

    const overlay = document.querySelector(overlaySelector);

    if(overlay) {
        overlay.classList.add(activeClass);
        document.body.style.overflow = 'hidden';
    } else {
        console.error("Overlay element not found:", overlaySelector);
    }

}

function hideOverlay(overlaySelector, activeClass) {

    const overlay = document.querySelector(overlaySelector);

    if(overlay) {
        overlay.classList.remove(activeClass);
        document.body.style.overflow = '';
    } else {
        console.error("Overlay element not found:", overlaySelector);
    }

}

function handleOverlayClick (overlaySelector, activeClass) {

    const overlay = document.querySelector(overlaySelector);

    if (overlay) {
        overlay.addEventListener('click', function(e) {
            if(e.target === this) {
                hideOverlay(overlaySelector, activeClass);
            }
        });
    } else {
        console.error("Overlay element not found for click handling:", overlaySelector);
    }


}

function displayImageWithOverlay (overlaySelector, activeClass, imageSelector, sectionSelector) {
	const section = document.querySelector(sectionSelector);
	const overlayImage = document.querySelector(imageSelector);

    if(!section || !overlayImage) {
        console.error("Section or image element not found:", sectionSelector, imageSelector);
        return;
    }

	section.addEventListener('click', (e) => {

		const currentTarget = e.target;
	

		if (currentTarget.hasAttribute('data-image-overlay')) {
			overlayImage.src = currentTarget.src;
            displayOverlay(overlaySelector, activeClass);
		}

	});

    
};

export { displayOverlay, hideOverlay, handleOverlayClick, displayImageWithOverlay};

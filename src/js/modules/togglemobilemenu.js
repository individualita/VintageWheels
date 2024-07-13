
function toggleMobileMenu(btnSelector, menuSelector, activeBtnClass, activeMenuClass) {
    const navBtn = document.querySelector(btnSelector);
    const navMenu = document.querySelector(menuSelector);

    if (!navBtn || !navMenu) {
        console.error("Button or menu element not found");
        return;
    }

    navBtn.addEventListener('click', () => {
        if (!navBtn.classList.contains(activeBtnClass)) {
            navBtn.classList.add(activeBtnClass);
            navMenu.classList.add(activeMenuClass);
            document.body.style.overflow = 'hidden';
        } else {
            navBtn.classList.remove(activeBtnClass);
            navMenu.classList.remove(activeMenuClass);
            document.body.style.overflow = '';
        }
    });
}

export { toggleMobileMenu };

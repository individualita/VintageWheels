
function toggleAccordion(selector, activeClass) {
    const accordionItems = document.querySelectorAll(selector);

    accordionItems.forEach(item => {
        item.addEventListener('click', function() {
            const isOpened = item.classList.contains(activeClass);

            if (!isOpened) {
                accordionItems.forEach(otherItem => {
                    otherItem.classList.remove(activeClass);
                });
            }
            // Toggle класс на текущем элементе вне зависимости от его предыдущего состояния.
            item.classList.toggle(activeClass);


        });
    });
}


export {toggleAccordion};
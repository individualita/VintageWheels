import {navBtn, navMenu} from './domelements';



function scrollToSection(linksSelector, activeClass) {

    const links = document.querySelectorAll(linksSelector);
    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 
    
            let id = e.target.getAttribute('href');
            if (!id.startsWith('#')) {
                id = '#' + id;
            };

            // Удаляем активный класс у всех ссылок
            removeActiveClassFromLinks(links, activeClass);

            // Добавляем активный класс только текущей ссылке
            e.target.classList.add(activeClass);

            
            //for mobile
            if (navMenu.classList.contains('nav__list-mobile') && navBtn.classList.contains('nav__hamburger-active')) {
                navMenu.classList.remove('nav__list-mobile');
                navBtn.classList.remove('nav__hamburger-active');
                
            }

            
            const section = document.querySelector(id).offsetTop;
            console.log(section);
            window.scrollTo({top: section, behavior: 'smooth'});
            document.body.style.overflow = '';



        });
    });

    function removeActiveClassFromLinks (linksSelector, activeClass) {
        linksSelector.forEach((link) => {
            link.classList.remove(activeClass);
        });
    }
}





export {scrollToSection};
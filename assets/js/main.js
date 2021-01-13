// show menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
    
    toggle.addEventListener('click', () => {
        nav.classList.toggle('show-menu');
    });
}
showMenu('nav__toggle', 'nav__menu');

// remove menu mobile
const navLink = document.querySelectorAll('.nav__link');
function linkAction() {
    const navMenu = document.getElementById('nav__menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// scroll header

const scrollHeader = () => {
    const header = document.getElementById('header');
    if (this.scrollY >= 200) {
        header.classList.add('scroll-header');
    }else {
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);


const scrollTop = () => {
    const scrollTop = document.getElementById('scroll-top');
    if (this.scrollY >= 560) {
        scrollTop.classList.add('scroll-top');
    }else {
        scrollTop.classList.remove('scroll-top');
    }
}

window.addEventListener('scroll', scrollTop);
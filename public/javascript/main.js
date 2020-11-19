/* Mobile Menu */

const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const modalMenu = document.querySelector('.mobile-menu');

window.onload = function() {
    mobileMenuBtn.addEventListener("click", menuPopup, false);
}

let isTheMenuOpened = false;

function menuPopup() {

    if(isTheMenuOpened == false) {
        mobileMenuBtn.firstElementChild.classList.add('first-line-mobile-menu-rotation');
        mobileMenuBtn.lastElementChild.classList.add('second-line-mobile-menu-rotation');
        mobileMenuBtn.lastElementChild.style.marginTop = '0';

        modalMenu.style.display = 'flex';
        document.body.classList.add('stop-scrolling');

        isTheMenuOpened = true;
    } else {
        mobileMenuBtn.firstElementChild.classList.remove('first-line-mobile-menu-rotation');
        mobileMenuBtn.lastElementChild.classList.remove('second-line-mobile-menu-rotation');
        mobileMenuBtn.lastElementChild.style.marginTop = '1.5rem';

        modalMenu.style.display = 'none';
        document.body.classList.remove('stop-scrolling');

        isTheMenuOpened = false;
    }

}


/* Desktop Menu */

const menuLinks = document.querySelectorAll('.container .menu-navigation ul a')
const menuListItems = document.querySelectorAll('.container .menu-navigation ul a li')

menuLinks.forEach(link => {
    link.addEventListener("click", activeBtn, false)
})

function activeBtn(event) {
    const clickedLink = event.target;

    menuListItems.forEach(link => {
        link.classList.remove('active');
    })

    clickedLink.classList.add('active');
}

/* Smooth Scroll */

const internalLinks = document.querySelectorAll('.menu-navigation ul a[href^="#"], .contact-me-btn');

internalLinks.forEach(link => {
    link.addEventListener("click", softScroll, false);
} )

function softScroll(event) {

    event.preventDefault();

    let link = event.target.parentNode;

    if (event.target.getAttribute('href') == '#contact-me') {
        link = event.target;
    }

    const id = link.getAttribute('href');
    const section = document.querySelector(id);
    const distanceFromTop = section.offsetTop;

    window.scroll({
        top: distanceFromTop - 50,
        behavior: "smooth"
    })


}

const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const modalMenu = document.querySelector('.mobile-menu');

window.onload = function() {
    mobileMenuBtn.addEventListener("click", menuPopup, false);
}

let isTheMenuOpened = 0;
function menuPopup(e) {
    
    if(isTheMenuOpened == 0) {
        mobileMenuBtn.firstElementChild.classList.add('first-line-mobile-menu-rotation');
        mobileMenuBtn.lastElementChild.classList.add('second-line-mobile-menu-rotation');
        mobileMenuBtn.lastElementChild.style.marginTop = '0';

        modalMenu.style.display = 'flex';
        document.body.classList.add('stop-scrolling');

        isTheMenuOpened = 1;
    } else {
        mobileMenuBtn.firstElementChild.classList.remove('first-line-mobile-menu-rotation');
        mobileMenuBtn.lastElementChild.classList.remove('second-line-mobile-menu-rotation');
        mobileMenuBtn.lastElementChild.style.marginTop = '1.5rem';

        modalMenu.style.display = 'none';
        document.body.classList.remove('stop-scrolling');

        isTheMenuOpened = 0;
    }

}


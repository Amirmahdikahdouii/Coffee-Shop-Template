// hamburgur NavBar
let headerMenuBotton = document.getElementById('header-nav-menu-icon');
let menuCloseButton = document.getElementById('header-nav-menu-close-icon');
let headerMenu = document.getElementById('header-menu-id');
headerMenuBotton.addEventListener('click', () => {
    headerMenu.style.display = 'flex';
    menuCloseButton.style.display = 'block';
    headerMenuBotton.style.display = 'none';
})

menuCloseButton.addEventListener('click', () => {
    headerMenu.style.display = 'none';
    headerMenuBotton.style.display = 'block';
    menuCloseButton.style.display = 'none';
})



// our-full-menu-header-button

let menuShow = number => {
    let ourFullMenuHeaderButton = document.getElementsByClassName('our-full-menu-header-button');
    let ourFullMenuItems = document.getElementsByClassName('our-full-menu-items-container');
    if (number > ourFullMenuHeaderButton.length) { number = 1 }
    if (number < 0) { number = ourFullMenuHeaderButton.length }
    let i;
    for (i = 0; i < ourFullMenuHeaderButton.length; i++) {
        ourFullMenuHeaderButton[i].className = 'our-full-menu-header-button';
    }
    for (i = 0; i < ourFullMenuItems.length; i++) {
        ourFullMenuItems[i].className = 'our-full-menu-items-container';
    }
    ourFullMenuHeaderButton[number - 1].className += ' our-full-menu-header-button-active';
    ourFullMenuItems[number - 1].className += ' our-full-menu-items-container-active';
}
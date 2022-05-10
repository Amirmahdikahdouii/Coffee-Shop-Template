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
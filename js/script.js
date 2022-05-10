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
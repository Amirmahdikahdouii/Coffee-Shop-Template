//showContentHandler

showContentHandler = (contentId, tagId) => {
    let mainSectionContents = [...document.getElementsByClassName('main-section-content-container')];
    mainSectionContents.forEach(content => {
        content.style.display = 'none';
    });
    let contentHasToShow = document.getElementById(contentId);
    contentHasToShow.style.display = 'flex';
    let sideBarMenuItems = [...document.getElementsByClassName('sideBar-menu-item')];
    sideBarMenuItems.forEach(item => {
        item.children[0].className = '';
    })
    let tag = document.getElementById(tagId);
    tag.className = 'sideBar-menu-item-active';
}

// Factors According

let factorsAccordingsOpenButtons = [...document.getElementsByClassName('factor-item-menu-botton-open')];
let factorsAccordingsCloseButtons = [...document.getElementsByClassName('factor-item-menu-botton-close')];
let factorAccordingContainers = [...document.getElementsByClassName('factor-item-according-container')];

factorsAccordingsOpenButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        button.style.display = 'none';
        factorsAccordingsCloseButtons[index].style.display = 'block';
        factorAccordingContainers[index].style.maxHeight =  factorAccordingContainers[index].scrollHeight + "px";
    })
});

factorsAccordingsCloseButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        button.style.display = 'none';
        factorsAccordingsOpenButtons[index].style.display = 'block';
        factorAccordingContainers[index].style.maxHeight = null;
    })
})
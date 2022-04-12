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

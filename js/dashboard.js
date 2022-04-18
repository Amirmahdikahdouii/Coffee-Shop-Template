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
        factorAccordingContainers[index].style.maxHeight = factorAccordingContainers[index].scrollHeight + "px";
    })
});

factorsAccordingsCloseButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        button.style.display = 'none';
        factorsAccordingsOpenButtons[index].style.display = 'block';
        factorAccordingContainers[index].style.maxHeight = null;
    })
})

// User Address Bottons Handler

let userAddressActionButtonsEdit = [...document.getElementsByClassName('user-address-action-button-edit')];
let userAddressActionButtonsRemove = [...document.getElementsByClassName('user-address-action-button-remove')];
let userAddressContainers = [...document.getElementsByClassName('user-address-container')];
let userAddressRemoveModalContainer = [...document.querySelectorAll('.remove-address-modal-container')];
let userAddressRemoveModalContainerBottonYes = [...document.querySelectorAll('.remove-address-modal-yes-botton')];
let userAddressRemoveModalContainerButtonNo = [...document.querySelectorAll('.remove-address-modal-no-botton')];
let userAddressEditModalContainer = [...document.getElementsByClassName('edit-address-modal-container')];
let userAddressEditModalContainerCancelButtons = [...document.getElementsByClassName('edit-address-modal-cancel-botton')];
let userAddressEditModalContainerConfirmButtons = [...document.getElementsByClassName('edit-address-modal-confirm-botton')];
let userEditModalForm = [...document.getElementsByClassName('address-modal-edit-form')];
let userAddressContents = [...document.getElementsByClassName('user-full-address')];
let userAdressInfoNames = [...document.getElementsByClassName('user-address-info-name')];
let userAdressInfoPhones = [...document.getElementsByClassName('user-address-info-phone')];
let userAdressInfoTelephones = [...document.getElementsByClassName('user-address-info-telephone')];
let userAdressInfoPostCodes = [...document.getElementsByClassName('user-address-info-postCode')];


userAddressActionButtonsRemove.forEach((button, index) => {
    button.addEventListener('click', () => {
        userAddressRemoveModalContainer[index].style.display = "block";
        userAddressRemoveModalContainer[index].style.opacity = "1";
        userAddressRemoveModalContainerBottonYes[index].addEventListener('click', () => {
            userAddressRemoveModalContainer[index].style.display = 'none';
            userAddressContainers[index].remove()
        });
        userAddressRemoveModalContainerButtonNo[index].addEventListener('click', () => {
            userAddressRemoveModalContainer[index].style.opacity = "0";
            setTimeout(function () { userAddressRemoveModalContainer[index].style.display = "none"; }, 600);
        });
    })
});



userAddressActionButtonsEdit.forEach((button, index) => {
    button.addEventListener('click', () => {
        userAddressEditModalContainer[index].style.display = "block";
        userAddressEditModalContainer[index].style.opacity = "1";
        userEditModalForm[index].children[0].value = userAddressContents[index].textContent;
        userEditModalForm[index].children[1].value = userAdressInfoNames[index].textContent;
        userEditModalForm[index].children[2].value = userAdressInfoTelephones[index].textContent;
        userEditModalForm[index].children[3].value = userAdressInfoPhones[index].textContent;
        userEditModalForm[index].children[4].value = userAdressInfoPostCodes[index].textContent;

        userAddressEditModalContainerConfirmButtons[index].addEventListener('click', () => {
            userAddressEditModalContainer[index].style.display = 'none';
            userAddressContents[index].textContent = userEditModalForm[index].children[0].value
            userAdressInfoNames[index].textContent = userEditModalForm[index].children[1].value
            userAdressInfoTelephones[index].textContent = userEditModalForm[index].children[2].value
            userAdressInfoPhones[index].textContent = userEditModalForm[index].children[3].value
            userAdressInfoPostCodes[index].textContent = userEditModalForm[index].children[4].value
        });

        userAddressEditModalContainerCancelButtons[index].addEventListener('click', () => {
            userAddressEditModalContainer[index].style.opacity = "0";
            setTimeout(function () { userAddressEditModalContainer[index].style.display = "none"; }, 600);
        });
    })
});
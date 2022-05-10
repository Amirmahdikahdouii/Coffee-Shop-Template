// Cup Sizing Select Section

let cupes = document.querySelectorAll('.cup-size');
let detailWeightSize = document.getElementById('detail-weight-size'), detailMilkSize = document.getElementById('detail-milk-size');

cupSelectColorize = number => {
    let index;
    let price = document.querySelector('.price')
    for (index = 0; index < cupes.length; index++) {
        cupes[index].className = 'cup-size center';
    }
    if (number == 0) {
        price.textContent = '2.00 $';
        detailWeightSize.innerText = '150 cc';
        detailMilkSize.innerText = '40 cc'

    } else if (number == 1) {
        price.textContent = '3.00 $';
        detailWeightSize.innerText = '250 cc';
        detailMilkSize.innerText = '60 cc'
    } else {
        price.textContent = '4.00 $';
        detailWeightSize.innerText = '350 cc';
        detailMilkSize.innerText = '80 cc';
    }

    cupes[number].className += ' cup-size-active'
}

sugerTypeSelect = number => {
    let index;
    let sugerTypesButtons = document.querySelectorAll('.suger-select-button');
    for (index = 0; index < sugerTypesButtons.length; index++) {
        sugerTypesButtons[index].className = 'suger-select-button'
    }

    sugerTypesButtons[number].className += ' suger-select-button-active'
}

// Image Modal

let mainProductImg = document.getElementById('main-product-image');
let modalContainer = document.getElementById('modal-container');
let modalImage = document.getElementById('modal-image');
let modalCaptionText = document.getElementById('modal-caption');
let modalCloseButton = document.getElementsByClassName('modal-close-button')[0];


mainProductImg.addEventListener('click', () => {
    modalContainer.style.display = 'block';
    modalImage.src = mainProductImg.src;
    modalCaptionText.innerText = mainProductImg.alt;
})

modalCloseButton.addEventListener('click', () => {
    modalContainer.style.display = 'none';
})


// Change Main product Picture by click on other porduct pictures

let moreProductPictures = document.getElementsByClassName('more-picture-item-image');

[...moreProductPictures].forEach(moreProductPicture => {
    moreProductPicture.addEventListener('click', () => {
        let lastMainPictureSrc = mainProductImg.src
        mainProductImg.src = moreProductPicture.src;
        moreProductPicture.src = lastMainPictureSrc;
    })
})

// Related Products Change Buttons

let changeRelatedProductsForward = document.getElementById('change-related-products-forward'),
    changeRelatedProductsBackward = document.getElementById('change-related-products-backward'),
    relatedProductsItems = document.getElementsByClassName('related-products-item'),
    firstShowProductsIndex = 0,
    lastShowProductsIndex;
// screenWidth 
let screenWidth;

function getScreenWidth() {
    screenWidth = screen.width;
    if (screen.width > 950) {
        lastShowProductsIndex = 4;
    } else if (screen.width <= 950) {
        lastShowProductsIndex = 3;
    }
}


changeRelatedProductsForward.addEventListener('click', (e) => {
    lastShowProductsIndex += 1;
    if (lastShowProductsIndex >= relatedProductsItems.length) {
        lastShowProductsIndex = relatedProductsItems.length - 1
        return
    }
    relatedProductsItems[lastShowProductsIndex].style.display = 'flex';
    relatedProductsItems[firstShowProductsIndex].style.display = 'none';
    firstShowProductsIndex += 1;
});

changeRelatedProductsForward.addEventListener('mouseenter', () => {
    getScreenWidth()
});

changeRelatedProductsBackward.addEventListener('mouseenter', () => {
    getScreenWidth()
});

changeRelatedProductsBackward.addEventListener('click', () => {
    firstShowProductsIndex -= 1;
    if (firstShowProductsIndex < 0) {
        firstShowProductsIndex = 0
        return
    }
    relatedProductsItems[firstShowProductsIndex].style.display = 'flex'
    relatedProductsItems[lastShowProductsIndex].style.display = 'none';
    lastShowProductsIndex -= 1;
})

// product-more-detail-table-read-more-button handler

let productsDetailTableRows = document.getElementsByClassName('product-more-detail-table-row');
for (let i = 0; i <= 3; i++) {
    productsDetailTableRows[i].style.display = 'flex';
}

let productDetailTableReadMoreButton = document.getElementById('product-more-detail-table-read-more-button');
let productDetailTableReadLessButton = document.getElementById('product-more-detail-table-read-less-button');

productDetailTableReadMoreButton.addEventListener('click', () => {
    productDetailTableReadLessButton.style.display = 'block';
    productDetailTableReadMoreButton.style.display = 'none';
    for (let i = 0; i <= productsDetailTableRows.length; i++) {
        productsDetailTableRows[i].style.display = 'flex';
    }
});

productDetailTableReadLessButton.addEventListener('click', () => {
    productDetailTableReadMoreButton.style.display = 'block';
    productDetailTableReadLessButton.style.display = 'none';
    [...productsDetailTableRows].forEach(productsDetailTableRow => {
        productsDetailTableRow.style.display = 'none';
    });
    for (let i = 0; i <= 3; i++) {
        productsDetailTableRows[i].style.display = 'flex';
    }
});

// like-dislike comments icon

let unlikeCommentsIcons = document.getElementsByClassName('bi-heart'),
    likeCommentsIcons = document.getElementsByClassName('bi-heart-fill');
[...unlikeCommentsIcons].forEach(unlikeCommentIcon => {
    unlikeCommentIcon.addEventListener('click', () => {
        unlikeCommentIcon.style.display = 'none'
        unlikeCommentIcon.nextElementSibling.style.display = 'block'
    })
});

[...likeCommentsIcons].forEach(likeCommentsIcon => {
    likeCommentsIcon.addEventListener('click', () => {
        likeCommentsIcon.style.display = 'none';
        likeCommentsIcon.previousElementSibling.style.display = 'block';
    })
})

// New Comment Star rate

let newCommentStars = [...document.getElementsByClassName('new-comments-star')];
let newCommentStarsFill = [...document.getElementsByClassName('new-comments-star-fill')];
let newCommentStarMarkSpan = document.getElementById('rate-the-product-star-mark')

let newCommentStarFillHandler = (newCommentStars, newCommentStarsFill) => {
    let i;
    newCommentStars.map(starIcon => {
        starIcon.onclick = () => {
            i = newCommentStars.indexOf(starIcon);
            for (i; i >= 0; i--) {
                newCommentStars[i].style.display = 'none';
            }
            i = newCommentStars.indexOf(starIcon);
            for (let starFillIndex = 0; starFillIndex <= i; starFillIndex++) {
                newCommentStarsFill[starFillIndex].style.display = 'inline-block';
                newCommentStarMarkSpan.innerText = `${starFillIndex + 1}.00`
            }
        }
    });
    newCommentStarsFill.map(starFillIcon => {
        starFillIcon.onclick = () => {
            i = newCommentStarsFill.indexOf(starFillIcon);
            i++
            newCommentStarMarkSpan.innerText = `${i}.00`;
            for (i; i < newCommentStarsFill.length; i++) {
                newCommentStarsFill[i].style.display = 'none';
                newCommentStars[i].style.display = 'inline-block';
            }
        }
    })

}

newCommentStarFillHandler(newCommentStars, newCommentStarsFill)
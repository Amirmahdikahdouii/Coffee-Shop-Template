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
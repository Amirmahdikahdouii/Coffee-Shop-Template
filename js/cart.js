// Plus, Minus and Delete Product

let plusBottons = [...document.getElementsByClassName('cart-list-item-plus-button')];
let minusBottons = [...document.getElementsByClassName('cart-list-item-mines-button')];
let deleteButtons = [...document.getElementsByClassName('cart-list-item-delete-button')];
let productCounters = [...document.getElementsByClassName('cart-list-item-count')];
let cartProducts = [...document.getElementsByClassName('cart-list-item')];

plusBottons.forEach((plusButton, index) => {
    plusButton.addEventListener('click', () => {
        let count;
        count = plusButton.previousElementSibling.textContent;
        count = parseInt(count);
        count++;
        if (count > 1) {
            deleteButtons[index].style.display = 'none';
            minusBottons[index].style.display = 'flex';
        }
        plusButton.previousElementSibling.textContent = count;
    })
});

minusBottons.forEach((minusButton, index) => {
    minusButton.addEventListener('click', () => {
        let count;
        count = minusButton.nextElementSibling.textContent;
        count = parseInt(count);
        count--;
        if (count === 1) {
            minusBottons[index].style.display = 'none';
            deleteButtons[index].style.display = 'flex';
        }
        minusButton.nextElementSibling.textContent = count;
    })
});

deleteButtons.forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
        let count;
        count = productCounters[index].textContent;
        count = parseInt(count);
        cartProducts[index].remove();
    })
})
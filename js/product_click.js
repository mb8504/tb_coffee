// START BUTTON CLICK FUNCTIONALITY
let quantityElement = document.getElementById('counter');

function increaseQuantity() {
    let currentQuantity = parseInt(quantityElement.textContent, 10);
    quantityElement.textContent = currentQuantity + 1;
    updateTotalAmount();
}

function decreaseQuantity() {
    let currentQuantity = parseInt(quantityElement.textContent, 10);
    if (currentQuantity > 1) {
        quantityElement.textContent = currentQuantity - 1;
        updateTotalAmount();
    }
}

// END BUTTON CLICK FUNCTIONALITY

// START PRICE CHANGE
let totalAmountElement = document.getElementById('cardPrice');
let currentPrice = 8.00;

function updateTotalAmount() {
    let currentQuantity = parseInt(quantityElement.textContent, 10);
    let totalAmount = currentPrice * currentQuantity;
    totalAmountElement.textContent = '$' + totalAmount.toFixed(2);
}
// END PRICE CHANGE

// START ADD TO CART
function addItemToCart() {

}
// END ADD TO CART
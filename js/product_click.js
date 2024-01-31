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
let originalPrice = 8.00;

function updateTotalAmount() {
    let currentQuantity = parseInt(quantityElement.textContent, 10);
    let totalAmount = originalPrice * currentQuantity;
    totalAmountElement.textContent = '$' + totalAmount.toFixed(2);
}
// END PRICE CHANGE












// Assume you have a shopping cart object
let shoppingCart = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0.00,
};



// Function to load the cart from local storage when the page loads
function loadCartFromLocalStorage() {
    let savedCart = localStorage.getItem('shoppingCart');
    if (savedCart) {
        shoppingCart = JSON.parse(savedCart);
        updateCartCount(); // Update the cart count when loading from local storage
    }
}

// START ADD TO CART
// Function to Add To Cart
function addItemToCart() {
    let currentQuantity = parseInt(quantityElement.textContent, 10);
    let productTitle = document.querySelector('.card__title').textContent;

    // item object with relevant information
    let item = {
        name: productTitle,
        originalPrice: originalPrice,
        quantity: currentQuantity,
    };

    // Add the item to the cart
    shoppingCart.items.push(item);

    // Update total quantity and total price in the cart
    shoppingCart.totalQuantity += currentQuantity;
    shoppingCart.totalPrice += originalPrice * currentQuantity;

    updateCartCount();

    // Save the cart to local storage
    saveCartToLocalStorage('shoppingCart');
}



// Function to save the cart to local storage
function saveCartToLocalStorage() {
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    localStorage.setItem('cartCountElementMobile', JSON.stringify(shoppingCart));
    localStorage.setItem('cartCountElementDesktop', JSON.stringify(shoppingCart));
}

// Function to update the cart count in the NAV
function updateCartCount() {
    let cartCountElementMobile = document.getElementById('cartCountMobile');
    let cartCountElementDesktop = document.getElementById('cartCountDesktop');

    cartCountElementMobile.textContent = shoppingCart.totalQuantity;
    cartCountElementDesktop.textContent = shoppingCart.totalQuantity;
}

// Load the cart from local storage when the page loads
loadCartFromLocalStorage();


// <------- START CART PAGE ------->



// <------- END CART PAGE ------->
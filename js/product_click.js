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
function addItemToCart() {
    let currentQuantity = parseInt(quantityElement.textContent, 10);

    // Create an item object with relevant information
    let item = {
        name: "Product Name",  // Set the actual product name
        price: currentPrice,
        quantity: currentQuantity
    };

    // Add the item to the cart
    shoppingCart.items.push(item);

    // Update total quantity and total price in the cart
    shoppingCart.totalQuantity += currentQuantity;
    shoppingCart.totalPrice += currentPrice * currentQuantity;

    // Optionally, you can update the cart display in the navbar or perform any other action
    updateCartCount();

    // Save the cart to local storage
    saveCartToLocalStorage('shoppingCart');
}

// Function to save the cart to local storage
function saveCartToLocalStorage() {
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    localStorage.setItem('cartCountElement', JSON.stringify(shoppingCart));
}

// Function to update the cart count in the NAV
function updateCartCount() {
    let cartCountElement = document.getElementById('cartCount');
    cartCountElement.textContent = shoppingCart.totalQuantity;
}

// Load the cart from local storage when the page loads
loadCartFromLocalStorage();

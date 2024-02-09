// Function to load the cart from local storage when the page loads
function loadCartFromLocalStorage() {
    let savedCart = localStorage.getItem('shoppingCart');
    if (savedCart) {
        shoppingCart = JSON.parse(savedCart);
        updateCartCount(); // Update the cart count
    }
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

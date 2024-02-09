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


// START TABLE FOR CART ITEMS

function updateCartDisplay() {
    let cartContainer = document.getElementById('cartContainer');
    cartContainer.innerHTML = ""; // Clear existing content

    // Create table element
    let table = document.createElement('table');
    table.classList.add('cart-table');
    table.classList.add('cart__list__table');

    // Create table header
    let tableHeader = document.createElement('thead');
    tableHeader.innerHTML = `
        <tr class="table__row__headers">
            <th></th>
            <th class="text-left">Name</th>
            <th class="text-left">Price</th>
            <th class="text-left">Quantity</th>
            <th class="text-left">Total Price</th>
        </tr>
    `;
    table.appendChild(tableHeader);

    // Create table body
    let tableBody = document.createElement('tbody');

    // Iterate through items and generate table rows
    shoppingCart.items.forEach(item => {
        let totalPrice = item.originalPrice * item.quantity; // Calculate total price

        let row = document.createElement('tr');
        row.classList.add('item__row');
        row.innerHTML = `
            <td><img src="${item.image}" alt="${item.name}" class="item__image""></td>
            <td>${item.name}</td>
            <td>$${item.originalPrice.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td class="total__price__td">$${totalPrice.toFixed(2)}</td>
        `;
        tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
    cartContainer.appendChild(table);

    // Toggle visibility of clear cart button
    let clearCartButton = document.getElementById('clearCartButton');
    clearCartButton.style.display = shoppingCart.items.length > 0 ? 'block' : 'none';
}

// END TABLE FOR CART ITEMS




// Function to load the cart from local storage when the page loads
function loadCartFromLocalStorage() {
    let savedCart = localStorage.getItem('shoppingCart');
    if (savedCart) {
        shoppingCart = JSON.parse(savedCart);
        updateCartDisplay();
        updateCartCount(); // Update the cart count when loading from local storage
    }
}

// START ADD TO CART
// Function to Add To Cart
function addItemToCart() {
    let currentQuantity = parseInt(quantityElement.textContent, 10);
    let productTitle = document.querySelector('.card__title').textContent;
    let productImage = document.querySelector('.product__card__img').src;

    // item object with relevant information
    let item = {
        name: productTitle,
        originalPrice: originalPrice,
        quantity: currentQuantity,
        image: productImage,
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


// <------- START CART CLEAR CART  ------->

// Function to clear the cart
function clearCart() {
    // Reset the shoppingCart object
    shoppingCart = {
        items: [],
        totalQuantity: 0,
        totalPrice: 0.00,
    };

    // Update cart display and count
    updateCartDisplay();
    updateCartCount();

    // Clear cart data from local storage
    localStorage.removeItem('shoppingCart');
    localStorage.removeItem('cartCountElementMobile');
    localStorage.removeItem('cartCountElementDesktop');
}


// <------- END CLEAR  CART PAGE ------->
const countQuantity = document.querySelector('.counter__quantity');
const cardPrice = document.getElementById('cardPrice');
let cartCountElementMobile = document.getElementById('cartCountMobile');
let cartCountElementDesktop = document.getElementById('cartCountDesktop');
const pricePerItem = 8;

// START INCREASE AND DECREASE BUTTON CLICK
const increaseQuantity = () => {
    let currentPriceText = cardPrice.innerText;
    let currentPrice = parseFloat(currentPriceText.replace('$', ''));
    let newPrice = currentPrice + pricePerItem;

    countQuantity.innerText++
    cardPrice.innerText = '$' + newPrice.toFixed(2); 
}

const decreaseQuantity = () => {
    const pricePerItem = 8;
    let currentPriceText = cardPrice.innerText;
    let currentPrice = parseFloat(currentPriceText.replace('$', ''));
    let newPrice = currentPrice - pricePerItem;

    if (parseInt(countQuantity.innerHTML, 10) > 0) {
        countQuantity.innerHTML--
        cardPrice.innerText = '$' + newPrice.toFixed(2); 
    }
}

// START shoppingCart OBJECT
let shoppingCart = {
    items: [],
    totalPrice: 0,
    totalQuantity: 0,
};

// START ADD TO CART BUTTON 
function addItemToCart() {
    let productTitle = document.querySelector('.card__title').textContent;
    let productImage = document.querySelector('.product__card__img').src;

    let item = {
        name: productTitle,
        originalPrice: pricePerItem,
        quantity: Number(countQuantity.innerText),
        image: productImage,
    };

    // Add the item to the cart
    shoppingCart.items.push(item);

    shoppingCart.totalPrice += pricePerItem * countQuantity.innerText;
    shoppingCart.totalQuantity += Number(countQuantity.innerText);

    updateCartCount();

    saveCartToLocalStorage('shoppingCart');
}

// Function to update the cart count in the NAV
function updateCartCount() {
    let cartCountElementMobile = document.getElementById('cartCountMobile');
    let cartCountElementDesktop = document.getElementById('cartCountDesktop');

    cartCountElementMobile.textContent = shoppingCart.totalQuantity;
    cartCountElementDesktop.textContent = shoppingCart.totalQuantity;
}

// START SAVE TO LOCAL STORAGE FUNCTION
function saveCartToLocalStorage() {
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    localStorage.setItem('cartCountElementMobile', JSON.stringify(shoppingCart));
    localStorage.setItem('cartCountElementDesktop', JSON.stringify(shoppingCart));
}

// Function to load the cart from local storage when the page loads
function loadCartFromLocalStorage() {
    let savedCart = localStorage.getItem('shoppingCart');
    if (savedCart) {
        shoppingCart = JSON.parse(savedCart);
        updateCartCount(); // Update the cart count
        updateCartDisplay();
    }
}

loadCartFromLocalStorage();


// START CART PAGE
function updateCartDisplay() {
    let cartContainer = document.getElementById('cartContainer');
    cartContainer.innerHTML = ""; 

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
        let totalPrice = item.originalPrice * item.quantity; 

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




// <------- START CART CLEAR CART  ------->

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

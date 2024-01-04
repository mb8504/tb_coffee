// START BUTTON COLOR CHANGE
let currentButton = null;

const changeBackground = (button) => {
    if (currentButton) {
        currentButton.classList.remove('clicked');
    }

    button.classList.add('clicked');
    currentButton = button;
}
// END BUTTON COLOR CHANGE


// START PRICE CHANGE
let currentPrice = 14.00;

function changePrice(amount) {
    // Change the price based on the amount parameter
    currentPrice = amount;
    console.log(currentPrice);

    // Update the displayed price
    document.getElementById('cardPrice').textContent = '$' + currentPrice.toFixed(2);

}
// END PRICE CHANGE
// update price
function updatePrice(option, price) {
    const previousPrice = document.getElementById(option);
    // const convetPrePrice = parseFloat(previousPrice.innerText);
    let prices = 0;

    if (price == false) {
        previousPrice.innerText = '0';
    } else {
        const updatedPrice = prices + price;
        previousPrice.innerText = updatedPrice;
    }
}

// extra memory cost
document.getElementById('eight-memory').addEventListener('click', function () {
    updatePrice('extra-memory-total', 0)
});
document.getElementById('sixten-memory').addEventListener('click', function () {
    updatePrice('extra-memory-total', 180)
});


// stroage cost

document.getElementById('two-hundred-fifty-six-ssd').addEventListener('click', function () {
    updatePrice('extra-stroage-total', 0)
});
document.getElementById('five-hundred-twelve-ssd').addEventListener('click', function () {
    updatePrice('extra-stroage-total', 100)
});
document.getElementById('one-tera-ssd').addEventListener('click', function () {
    updatePrice('extra-stroage-total', 180)
});

// delivery cost

document.getElementById('normal-delivery').addEventListener('click', function () {
    updatePrice('delivery-charge-total', 0)
})
document.getElementById('fast-delivery').addEventListener('click', function () {
    updatePrice('delivery-charge-total', 20)
})
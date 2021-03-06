// update price
function updatePrice(option, price) {
    const previousPrice = document.getElementById(option);
    let prices = 0;
    if (price == 0) {
        previousPrice.innerText = '0';
    } else {
        const updatedPrice = prices + price;
        previousPrice.innerText = updatedPrice;

    }
    totalAmount()
};

// update total price 

// get prcies
function getPrice(priceId) {

    const costs = document.getElementById(priceId);
    const convertCosts = parseFloat(costs.innerText);
    return convertCosts;
};
// update total cost
function totalAmount() {
    // total amount
    const totalAmount = document.getElementById('total-amount');
    const convertTotalAmount = parseFloat(totalAmount.innerText);
    // base amount
    const baseCost = document.getElementById('base-price-total');
    const convertBasePrice = parseFloat(baseCost.innerText)
    // extra costs
    const extraMemoryCost = getPrice('extra-memory-total');
    const extraStroageCost = getPrice('extra-stroage-total');
    const deliveryCost = getPrice('delivery-charge-total');

    const totalPrice = convertBasePrice + extraMemoryCost + extraStroageCost + deliveryCost;

    const finalAmount = document.getElementById('final-total-price')
    finalAmount.innerText = totalPrice;


    return totalAmount.innerText = totalPrice;

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
});
document.getElementById('fast-delivery').addEventListener('click', function () {
    updatePrice('delivery-charge-total', 20)
});

// stevekaku special discount

document.getElementById('promo-btn').addEventListener('click', function () {
    // promo field
    const promoField = document.getElementById('promo-field')
    // total amount
    const totalPrice = totalAmount();
    if (promoField.value.toLowerCase() == 'stevekaku') {
        // final total
        const finalAmount = document.getElementById('final-total-price');
        const convertFinalAmount = parseFloat(finalAmount.innerText)
        // discount
        const discounted = totalPrice * 0.2;
        // update final total
        finalAmount.innerText = convertFinalAmount - discounted;
        document.getElementById('promo-failed').style.display = 'none'
    } else {
        // false promo code warning
        document.getElementById('promo-failed').style.display = 'block'
    }

    promoField.value = '';
})
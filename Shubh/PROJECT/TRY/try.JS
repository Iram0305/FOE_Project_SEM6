const priceSlider = document.getElementById("priceSlider");
const priceValue = document.getElementById("priceValue");
priceSlider.oninput = function() {
const formattedValue = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(this.value);
priceValue.textContent = formattedValue;
};
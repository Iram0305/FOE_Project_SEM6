function search() {
    let filter = document.getElementById("cars").value.toUpperCase();
    let products = document.querySelectorAll(".product");

    products.forEach(product => {
        let productName = product.querySelector("h3").textContent.toUpperCase();
        if (productName.indexOf(filter) > -1) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }
    });
}
function slider(){
    const priceSlider = document.getElementById("priceSlider");
        const priceValue = document.getElementById("priceValue");
        priceValue.innerHTML=slider.value;
        priceSlider.oninput = function()
        {
            const formattedValue = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(this.value);
            priceValue.textContent = formattedValue;
        };
}
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
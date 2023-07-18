let productArea = document.querySelector(".home .container");

let products = JSON.parse(localStorage.getItem("products"));
console.log(products);
let id = localStorage.getItem("productId");
let selectedItem = products.find((item) => item.id == id);

productArea.innerHTML = `<img src="${selectedItem.imgUrl}" class="productImg" />
<div class="data">
  <p class="name">${selectedItem.name}</p>
  <span class="specs">
    <span>Specifications</span>: <br />
    ${selectedItem.Specifications}
  </span>
  <span class="price">Price:${selectedItem.Price} EGP</span>
</div>`;

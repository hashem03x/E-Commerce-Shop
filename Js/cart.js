let addedProducts = localStorage.getItem("ItemsInCart");
let productsDiv = document.querySelector(".products");
let checkoutDiv = document.querySelector(".check-out");
let info = document.querySelector(".check-out .info");

if (addedProducts) {
  let products = JSON.parse(addedProducts);
  drawcartProducts(products);
} else {
  checkoutDiv.style.display = "none";
  productsDiv.innerHTML = `<p class="empty">Cart Is Empty</p>`;
}

function drawcartProducts(products) {
  if (products.length > 0) {
    let productsUI = products.map((item) => {
      return `<div class="product">
            <img src="${item.imgUrl}" alt="pc" />
            <div class="desc">
              <h2>${item.name}</h2>
              <p>${item.Desc}</p>
              <span>Price: ${item.Price} EGP</span>
              <span>Quantity: ${item.qty}</span>
            </div>
            <div class="actions">
              <button class="rfc" onclick="removeItem(${item.id})">
                Remove From Cart
              </button>
            </div>
            </div>`;
    });
    productsDiv.innerHTML = productsUI.join("");
  } else {
    checkoutDiv.style.display = "none";
    productsDiv.innerHTML = `<p class="empty">Cart Is Empty</p>`;
  }
}
let cartmenu = document.querySelector(".cart .cartmenu");
let cartItemsDiv = document.querySelector(".cart .cartmenu .items");
let totalPriceDiv = document.getElementById("total");
function openCart() {
  let cartItems = document.querySelectorAll(".cart .cartmenu .items p");
  if (cartItems.length > 0) {
    if (cartmenu.style.display == "block") {
      cartmenu.style.display = "none";
    } else {
      cartmenu.style.display = "block";
    }
  }
}

function removeItem(id) {
  let items = JSON.parse(addedProducts);
  let clicked = items.find((item) => item.id === id);
  if (clicked.qty > 1) {
    items = items.map((item) => {
      if (clicked.id === item.id) item.qty -= 1;
      return item;
    });
    drawcartProducts(items);
    localStorage.setItem("ItemsInCart", JSON.stringify(items));
  } else {
    items = items.filter((item) => item.id !== id);
    drawcartProducts(items);
  }
  localStorage.setItem("ItemsInCart", JSON.stringify(items));
  addedProducts = localStorage.getItem("ItemsInCart");
  cartItemsDiv.innerHTML = "";
  addItem();
}
function addItem() {
  let addedItems = localStorage.getItem("ItemsInCart")
    ? JSON.parse(localStorage.getItem("ItemsInCart"))
    : [];
  let totalPrice = 0;
  if (addedItems) {
    addedItems.map((item) => {
      cartItemsDiv.innerHTML += `<p>
      <span class="name"> ${item.name}</span>
      <span class="Price">${item.Price} EGP</span>
      <span class="qty"> Quantity: ${item.qty}</span>
    </p>
    <hr/>`;
      totalPrice += item.qty * item.Price;
    });
    totalPriceDiv.innerHTML = `Total:${totalPrice} EGP`;
    info.innerHTML = `<p>Total Price = ${totalPrice}EGP</p>`;
    let cartCounter = document.querySelector(".cart .counter");
    cartCounter.style.display = "flex";
    cartCounter.innerHTML = addedItems.length;
  }
}
addItem();

function checkOut() {
  alert("CheckOut Completed");
  localStorage.removeItem("ItemsInCart");
  // drawcartProducts(JSON.parse(addedProducts));
  location.reload();
}

function empty() {
  localStorage.removeItem("ItemsInCart");
  drawcartProducts(JSON.parse(addedProducts));
  location.reload();
}

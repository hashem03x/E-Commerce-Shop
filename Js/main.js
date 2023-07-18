let productsDiv = document.querySelector(".products");
let products = JSON.parse(localStorage.getItem("products"));
let productsmap;
function drawProducts(data) {
  let productsUI = data.map((item) => {
    return `<div class="product">
    <img  src="${item.imgUrl}" alt="pc" />
    <div class="desc" onclick="showDetails(${item.id})">
      <h2>${item.name}</h2>
      <p>${item.Desc}</p>
      <span>Price: ${item.Price} EGP</span>
    </div>
    <div class="actions">
      <button class="atc" onclick="additem(${item.id})">
        Add To Cart<i class="fa-regular fa-cart-plus"></i>
      </button>
      <span><i class="fa-regular fa-heart like" style ="color :${
        item.liked == true ? "red" : ""
      }" onclick="additemtofav(${item.id})"></i></span>
    </div>
  </div>`;
  });
  productsDiv.innerHTML = productsUI.join("");
}
drawProducts(products);
let cartmenu = document.querySelector(".cart .cartmenu");
let cartItemsDiv = document.querySelector(".cart .cartmenu .items");
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
let addedItems = localStorage.getItem("ItemsInCart")
  ? JSON.parse(localStorage.getItem("ItemsInCart"))
  : [];

if (addedItems) {
  addedItems.map((item) => {
    cartItemsDiv.innerHTML += `<p>
    <span class="name"> ${item.name}</span>
    <span class="Price">${item.Price} EGP</span>
    <span class="qty"> Quantity: ${item.qty}</span>
  </p>
  <hr/>`;
  });
  let cartCounter = document.querySelector(".cart .counter");
  cartCounter.style.display = "flex";
  cartCounter.innerHTML = addedItems.length;
}

// Empty Array For All Items:
function additem(id) {
  if (localStorage.getItem("user")) {
    let product = products.find((product) => product.id === id);
    let isProdInCart = addedItems.some((item) => product.id === item.id);
    if (isProdInCart) {
      addedItems = addedItems.map((p) => {
        if (p.id === product.id) p.qty += 1;
        return p;
      });
    } else {
      addedItems.push(product);
    }
    cartItemsDiv.innerHTML = "";
    addedItems.forEach((item) => {
      cartItemsDiv.innerHTML += `
      <p>
    <span class="name"> ${item.name}</span>
    <span class="Price">${item.Price} EGP</span>
    <span class="qty"> Quantity: ${item.qty}</span>
  </p>
  <hr/>`;
    });
    localStorage.setItem("ItemsInCart", JSON.stringify(addedItems));
    let cartItems = document.querySelectorAll(".cart .cartmenu .items p");
    let cartCounter = document.querySelector(".cart .counter");
    cartCounter.style.display = "flex";
    cartCounter.innerHTML = cartItems.length;
  } else {
    alert("Please Login First");
    window.location = "login.html";
  }
}

//Searching Technique:

let searchInput = document.getElementById("searchfield");
searchInput.addEventListener("keyup", () => {
  search(searchInput.value.toLowerCase(), products);
  if (searchInput.value.trim() === "") {
    drawProducts(products);
  }
});
function search(input, array) {
  let SearchedItem = array.filter(
    (item) => item.name.toLowerCase().indexOf(input) !== -1
  );
  drawProducts(SearchedItem);
}

// Showing Product Details:

function showDetails(id) {
  localStorage.setItem("productId", id);
  window.location = "Product.html";
}

let favItemsArray = localStorage.getItem("favourites")
  ? JSON.parse(localStorage.getItem("favourites"))
  : [];

function additemtofav(id) {
  if (localStorage.getItem("user")) {
    let itemLiked = products.find((item) => item.id === id);
    let isProdLiked = favItemsArray.some((i) => i.id === itemLiked.id);
    if (isProdLiked) {
      products = products.map((item) => {
        if (item.id === itemLiked.id) item.liked = false;
        return item;
      });
    } else {
      favItemsArray.push(itemLiked);
      itemLiked.liked = true;
    }
    localStorage.setItem("favourites", JSON.stringify(favItemsArray));
    products.map((item) => {
      if (item.id === itemLiked.id) {
        item.liked = true;
      }
    });
    localStorage.setItem("products", JSON.stringify(products));
    drawProducts(products);
  } else {
    alert("Please Sign in First");
    window.location = "login.html";
  }
}

let createProd = document.querySelector(".createProd");

createProd.addEventListener("click", function () {
  window.location = "createProduct.html";
});

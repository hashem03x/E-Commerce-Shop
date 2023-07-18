let favourites = JSON.parse(localStorage.getItem("favourites"));
let products = JSON.parse(localStorage.getItem("products"));
let productsDiv = document.querySelector(".products");
let searchInput = document.getElementById("searchfield");
function drawFavUI(data) {
  if (data) {
    if (data.length > 0) {
      let favouritesUI = data.map((item) => {
        return `<div class="product">
            <img  src="${item.imgUrl}" alt="pc" />
            <div class="desc" onclick="showDetails(${item.id})">
              <h2>${item.name}</h2>
              <p>${item.Desc}</p>
              <span>Price: ${item.Price} EGP</span>
            </div>
            <div class="actions">
              <button class="atc" onclick="removeitemfromfav(${item.id})">
                Remove From Favourites
              </button>
            </div>
          </div>`;
      });
      productsDiv.innerHTML = favouritesUI.join("");
    } else {
      productsDiv.innerHTML = `<p class="empty">No Favourite Items Added</p>`;
      searchInput.style.display = "none";
    }
  } else {
    productsDiv.innerHTML = `<p class="empty">No Favourite Items Added</p>`;
    searchInput.style.display = "none";
  }
}

drawFavUI(favourites);

searchInput.addEventListener("keyup", () => {
  search(searchInput.value.toLowerCase(), favourites);
  if (searchInput.value.trim() === "") {
    drawFavUI(favourites);
  }
});
function search(input, array) {
  let SearchedItem = array.filter(
    (item) => item.name.toLowerCase().indexOf(input) !== -1
  );
  drawFavUI(SearchedItem);
}

function removeitemfromfav(id) {
  if (favourites) {
    let wanted = favourites.filter((item) => item.id !== id);
    let disliked = favourites.find((item) => item.id === id);
    console.log(disliked);
    products = products.map((item) => {
      if (item.id === disliked.id) item.liked = false;
      return item;
    });
    localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("favourites", JSON.stringify(wanted));
    favourites = JSON.parse(localStorage.getItem("favourites"));
    drawFavUI(wanted);
  }
}

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

function showDetails(id) {
  localStorage.setItem("productId", id);
  window.location = "Product.html";
}

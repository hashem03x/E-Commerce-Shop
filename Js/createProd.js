let Pname = document.getElementById("name");
let Pdesc = document.getElementById("desc");
let Pprice = document.getElementById("price");
let Pspec = document.getElementById("spec");
let submit = document.getElementById("submit");
let image = document.getElementById("image");
let form = document.getElementById("form");
let ProdImage;
image.addEventListener("change", getProdImage);
form.addEventListener("submit", createProd);
function createProd() {
  let products = JSON.parse(localStorage.getItem("products"));
  let Created = {
    id: products.length + 1,
    name: Pname.value,
    Price: Pprice.value,
    Desc: Pdesc.value,
    Specifications: Pspec.value,
    imgUrl: ProdImage,
    liked: false,
    qty: 1,
  };
  let allProducts = [...products, Created];
  localStorage.setItem("products", JSON.stringify(allProducts));
  alert("Product Created SuccessFully");
}

function getProdImage() {
  let file = this.files[0];
  let types = ["image/jpeg", "image/png"];
  if (types.indexOf(file.type) == -1) {
    alert("Please Choose The Correct Image Format");
    location.reload();
    return;
  }
  if (file.size > 2 * 1024 * 1024) {
    alert("Image More Than 2 MB");
    location.reload();
    return;
  }
  getBase64(file);
  //   ProdImage = URL.createObjectURL(file);
}

function getBase64(file) {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    ProdImage = reader.result;
  };
  reader.error = function () {
    alert("Failed To Load Image");
  };
}

// Bắt sự kiện scroll
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  // Chiêu dọc
  x = window.pageYOffset;
  if (x > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
//
// Slider
const imgPosition = document.querySelectorAll(".aspect-ratio-169 img");
const imgContainer = document.querySelector(".aspect-ratio-169");
const dotItem = document.querySelectorAll(".dot");
let imgNumber = imgPosition.length;
let index = 0;
imgPosition.forEach(function (image, index) {
  image.style.left = index * 100 + "%";
  dotItem[index].addEventListener("click", function () {
    slider(index);
  });
});
function imgSlide() {
  index++;
  if (index >= imgNumber) {
    index = 0;
  }
  slider(index);
}
function slider(index) {
  imgContainer.style.left = "-" + index * 100 + "%";
  const dotActive = document.querySelector(".active");
  dotActive.classList.remove("active");
  dotItem[index].classList.add("acitve");
}
setInterval(imgSlide, 5000);
//

// Menu - Slidebar - Category
const itemsliderbar = document.querySelectorAll(".category-left-li");
itemsliderbar.forEach(function (menu, index) {
  menu.addEventListener("click", function () {
    menu.classList.toggle("block");
  });
});
//
// --------------------- PRODUCT -------------------------
// Tab trong javascript
const baoquan = document.querySelector(".baoquan");
const chitiet = document.querySelector(".chitiet");
if (baoquan) {
  baoquan.addEventListener("click", function () {
    document.querySelector(
      ".product-content-right-bottom-content-chitiet"
    ).style.display = "none";
    document.querySelector(
      ".product-content-right-bottom-content-baoquan"
    ).style.display = "block";
  });
}
if (chitiet) {
  chitiet.addEventListener("click", function () {
    document.querySelector(
      ".product-content-right-bottom-content-chitiet"
    ).style.display = "block";
    document.querySelector(
      ".product-content-right-bottom-content-baoquan"
    ).style.display = "none";
  });
}
const button = document.querySelector(".product-content-right-bottom-top");
if (button) {
  button.addEventListener("click", function () {
    document
      .querySelector(".product-content-right-bottom-content-big")
      .classList.toggle("activeB");
  });
}
// Bấm vào ảnh
const bigImg = document.querySelector(".product-content-left-big-img img");
const smalImg = document.querySelectorAll(
  ".product-content-left-small-img img"
);
smalImg.forEach(function (imgItem, X) {
  imgItem.addEventListener("click", function () {
    bigImg.src = imgItem.src;
  });
});
// Modal
const modal = document.querySelector(".modal");

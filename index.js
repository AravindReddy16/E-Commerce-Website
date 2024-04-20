let search = document.querySelector("#search");
let clear = document.querySelector(".clear-search");
let settings = document.querySelector(".more-name p");
let dropdown = document.querySelector(".dropdown-menu");
let up = document.querySelector(".up-logo");
let down = document.querySelector(".down-logo");
let body_container = document.querySelector(".body-container");
let navigate = document.querySelector(".top-navigation");
let item_bg = document.querySelectorAll(".item");
let cloth_item = document.querySelector(".clothes");
let toy_item = document.querySelector(".toys");
let furniture_item = document.querySelector(".furniture");
let electronics_item = document.querySelector(".electronics");
let shoes_item = document.querySelector(".shoes");
let groceries_item = document.querySelector(".groceries");
let medicine_item = document.querySelector(".medicine");
let cosmotics_item = document.querySelector(".cosmotics");
let seperate_body = document.querySelector(".seperate-body");
let home_body = document.querySelector(".home-body");
let list_name = document.querySelector("#list-name");
let seperate = document.querySelector(".seperate");
let item_details = document.querySelector(".item-details");
let cart_itemCount = document.querySelector("#cart-itemCount");
let cart_items = document.querySelector(".cart-items");
let cart_list = document.querySelector("#cart-list");
let cart_itemSec = document.querySelector(".cart-itemSec");
let subtotal = document.querySelector("#subtotal");
let checktotal = document.querySelector("#checktotal");
let search_body = document.querySelector(".search-body");
let search_container = document.querySelector(".search-container");

search.addEventListener("input", function () {
  if (search.value == "") {
    clear.style.display = "none";
  } else {
    clear.style.display = "grid";
  }
});

clear.addEventListener("click", function () {
  search.value = "";
  clear.style.display = "none";
  search_body.style.display = "none";
  home_body.style.display = "block";
  item_bg.forEach((item) => {
    item.classList.remove("bg");
  });
  item_bg[0].classList.add("bg");
});

settings.addEventListener("click", function () {
  dropdown.classList.toggle("nature");
});

document.body.addEventListener("click", function (e) {
  if (!dropdown.classList.contains("nature")) {
    if (!settings.contains(e.target)) {
      dropdown.classList.add("nature");
    }
  }
  if (!dropdown.classList.contains("nature")) {
    up.style.display = "block";
    down.style.display = "none";
  } else {
    up.style.display = "none";
    down.style.display = "block";
  }
});

body_container.addEventListener("scroll", function () {
  if (body_container.scrollTop.toFixed() <= 170) {
    navigate.style.display = "none";
  } else {
    navigate.style.display = "grid";
  }
});

navigate.addEventListener("click", function () {
  body_container.scrollTop = 0;
});

let all_items = [
  {
    clothes: [
      {
        id: 1,
        name: "Cargo-Shirt",
        image: "images/men-clothes-1.jpg",
        quantity: 1,
        price: 180,
      },
      {
        id: 2,
        name: "Mango-Shirt",
        image: "images/men-clothes-2.jpg",
        quantity: 1,
        price: 180,
      },
      {
        id: 3,
        name: "Devil-Shirt",
        image: "images/men-clothes-3.jpg",
        quantity: 1,
        price: 180,
      },
      {
        id: 4,
        name: "Vintage-Shirt",
        image: "images/men-clothes-4.jpg",
        quantity: 1,
        price: 180,
      },
      {
        id: 5,
        name: "Shark-Shirt",
        image: "images/men-clothes-5.jpg",
        quantity: 1,
        price: 180,
      },
    ],
  },
  {
    toys: [
      {
        id: 6,
        name: "Cargo-Toys",
        image: "images/toys-1.webp",
        quantity: 1,
        price: 150,
      },
      {
        id: 7,
        name: "Mango-Toys",
        image: "images/toys-2.jpeg",
        quantity: 1,
        price: 150,
      },
      {
        id: 8,
        name: "Devil-Toys",
        image: "images/toys-3.jpeg",
        quantity: 1,
        price: 150,
      },
      {
        id: 9,
        name: "Vintage-Toys",
        image: "images/toys-4.jpeg",
        quantity: 1,
        price: 150,
      },
      {
        id: 10,
        name: "Shark-Toys",
        image: "images/toys-5.jpeg",
        quantity: 1,
        price: 150,
      },
    ],
  },
  {
    furniture: [
      {
        id: 11,
        name: "Cargo-Furniture",
        image: "images/furniture-1.jpeg",
        quantity: 1,
        price: 500,
      },
      {
        id: 12,
        name: "Mango-Furniture",
        image: "images/furniture-2.jpeg",
        quantity: 1,
        price: 500,
      },
      {
        id: 13,
        name: "Devil-Furniture",
        image: "images/furniture-3.jpeg",
        quantity: 1,
        price: 500,
      },
      {
        id: 14,
        name: "Vintage-Furniture",
        image: "images/furniture-4.jpeg",
        quantity: 1,
        price: 500,
      },
      {
        id: 15,
        name: "Shark-Furniture",
        image: "images/furniture-5.jpeg",
        quantity: 1,
        price: 500,
      },
    ],
  },
  {
    electronics: [
      {
        id: 16,
        name: "Cargo-Electronics",
        image: "images/electronics-1.jpeg",
        quantity: 1,
        price: 350,
      },
      {
        id: 17,
        name: "Mango-Electronics",
        image: "images/electronics-2.jpeg",
        quantity: 1,
        price: 350,
      },
      {
        id: 18,
        name: "Devil-Electronics",
        image: "images/electronics-3.jpeg",
        quantity: 1,
        price: 350,
      },
      {
        id: 19,
        name: "Vintage-Electronics",
        image: "images/electronics-4.jpeg",
        quantity: 1,
        price: 350,
      },
      {
        id: 20,
        name: "Shark-Electronics",
        image: "images/electronics-5.jpeg",
        quantity: 1,
        price: 350,
      },
    ],
  },
  {
    shoes: [
      {
        id: 21,
        name: "Cargo-Shoes",
        image: "images/shoes-1.jpeg",
        quantity: 1,
        price: 250,
      },
      {
        id: 22,
        name: "Mango-Shoes",
        image: "images/shoes-2.jpeg",
        quantity: 1,
        price: 250,
      },
      {
        id: 23,
        name: "Devil-Shoes",
        image: "images/shoes-3.jpeg",
        quantity: 1,
        price: 250,
      },
      {
        id: 24,
        name: "Vintage-Shoes",
        image: "images/shoes-4.jpeg",
        quantity: 1,
        price: 250,
      },
      {
        id: 25,
        name: "Shark-Shoes",
        image: "images/shoes-5.jpeg",
        quantity: 1,
        price: 250,
      },
    ],
  },
  {
    groceries: [
      {
        id: 26,
        name: "Cargo-Groceries",
        image: "images/groceries-1.jpeg",
        quantity: 1,
        price: 100,
      },
      {
        id: 27,
        name: "Mango-Groceries",
        image: "images/groceries-2.jpeg",
        quantity: 1,
        price: 100,
      },
      {
        id: 28,
        name: "Devil-Groceries",
        image: "images/groceries-3.jpeg",
        quantity: 1,
        price: 100,
      },
      {
        id: 29,
        name: "Vintage-Groceries",
        image: "images/groceries-4.jpeg",
        quantity: 1,
        price: 100,
      },
      {
        id: 30,
        name: "Shark-Groceries",
        image: "images/groceries-5.jpeg",
        quantity: 1,
        price: 100,
      },
    ],
  },
  {
    medicine: [
      {
        id: 31,
        name: "Cargo-Medicine",
        image: "images/medicene-1.jpeg",
        quantity: 1,
        price: 50,
      },
      {
        id: 32,
        name: "Mango-Medicine",
        image: "images/medicene-2.jpeg",
        quantity: 1,
        price: 50,
      },
      {
        id: 33,
        name: "Devil-Medicine",
        image: "images/medicene-3.jpeg",
        quantity: 1,
        price: 50,
      },
      {
        id: 34,
        name: "Vintage-Medicine",
        image: "images/medicene-4.jpeg",
        quantity: 1,
        price: 50,
      },
      {
        id: 35,
        name: "Shark-Medicine",
        image: "images/medicene-5.jpeg",
        quantity: 1,
        price: 50,
      },
    ],
  },
  {
    cosmotics: [
      {
        id: 36,
        name: "Cargo-Cosmotics",
        image: "images/cosmotics-1.jpeg",
        quantity: 1,
        price: 160,
      },
      {
        id: 37,
        name: "Mango-Cosmotics",
        image: "images/cosmotics-2.jpeg",
        quantity: 1,
        price: 160,
      },
      {
        id: 38,
        name: "Devil-Cosmotics",
        image: "images/cosmotics-3.jpeg",
        quantity: 1,
        price: 160,
      },
      {
        id: 39,
        name: "Vintage-Cosmotics",
        image: "images/cosmotics-4.jpeg",
        quantity: 1,
        price: 160,
      },
      {
        id: 40,
        name: "Shark-Cosmotics",
        image: "images/cosmotics-5.jpeg",
        quantity: 1,
        price: 160,
      },
    ],
  },
];

let array_list = [
  "clothes",
  "toys",
  "furniture",
  "electronics",
  "shoes",
  "groceries",
  "medicine",
  "cosmotics",
];

let quary_list = [
  cloth_item,
  toy_item,
  furniture_item,
  electronics_item,
  shoes_item,
  groceries_item,
  medicine_item,
  cosmotics_item,
];

for (let i = 0; i < all_items.length; i++) {
  all_items[i][array_list[i]].forEach((items) => {
    let item = `<div class="clothes-item" onclick="getItemid(${items.id})">
                <div class="image-div">
                  <img src="${items.image}" alt="image">
                </div>
                <div class="details-div">
                  <div class="name-div">
                    <p>${items.name}</p>
                  </div>
                  <div class="price-div">
                    <div class="price">
                      <p>For: $${items.price}</p>
                    </div>
                    <div class="item-cart">
                      <p>12%</p>
                    </div>
                  </div>
              </div>`;
    quary_list[i].innerHTML += item;
  });
}

item_bg.forEach((item) => {
  item.addEventListener("click", function () {
    if (this.innerText == "All") {
      home_body.style.display = "block";
      seperate_body.style.display = "none";
      item_details.style.display = "none";
      cart_items.style.display = "none";
      search_body.style.display = "none";
      search.value = "";
      clear.style.display = "none";
    } else {
      seperate.innerHTML = "";
      seperate_body.style.display = "block";
      home_body.style.display = "none";
      item_details.style.display = "none";
      cart_items.style.display = "none";
      search_body.style.display = "none";
      search.value = "";
      clear.style.display = "none";
      list_name.innerHTML = `${this.innerText}`;
      let name = this.innerText.toLowerCase();
      let itemIdx;
      for (let i = 0; i < all_items.length; i++) {
        item_name = Object.keys(all_items[i]);
        if (item_name[0] == name) {
          itemIdx = i;
        }
      }
      all_items[itemIdx][name].forEach((items) => {
        let item = `<div class="clothes-item" onclick="getItemid(${items.id})">
                    <div class="image-div">
                      <img src="${items.image}" alt="image">
                    </div>
                    <div class="details-div">
                      <div class="name-div">
                        <p>${items.name}</p>
                      </div>
                      <div class="price-div">
                        <div class="price">
                          <p>For: $${items.price}</p>
                        </div>
                        <div class="item-cart">
                          <p>12%</p>
                        </div>
                      </div>
                  </div>`;
        seperate.innerHTML += item;
      });
    }
    item_bg.forEach((item) => {
      item.classList.remove("bg");
    });
    item.classList.toggle("bg");
  });
});

function getItemid(id) {
  seperate_body.style.display = "none";
  home_body.style.display = "none";
  item_details.style.display = "block";
  search_body.style.display = "none";
  search.value = "";
  clear.style.display = "none";
  for (let i = 0; i < all_items.length; i++) {
    all_items[i][array_list[i]].forEach((items) => {
      if (items.id == id) {
        item_details.innerHTML = `<div class="itemDetails">
                                    <div class="item-image">
                                      <img src="${items.image}" />
                                    </div>
                                    <div class="item-info">
                                      <div class="item-heading">
                                        <p>${items.name}</p>
                                      </div>
                                      <div class="item-price">
                                        <p>Price: $${items.price}</p>
                                      </div>
                                      <div class="item-rating">
                                        <p>
                                          Rating:
                                          <i class="fa-solid fa-star"></i>
                                          <i class="fa-solid fa-star"></i>
                                          <i class="fa-solid fa-star"></i>
                                          <i class="fa-solid fa-star"></i>
                                          <i class="fa-solid fa-star"></i>
                                        </p>
                                      </div>
                                      <div class="item-desc">
                                        <p>
                                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                          Quisquam hic magni, iure officiis deleniti ipsum porro
                                          accusamus quas nihil voluptas dolore modi vitae neque
                                          architecto culpa perferendis, ex corporis! Fugit! Molestiae,
                                          quis hic magni adipisci dolore dignissimos odio aliquid
                                          obcaecati omnis doloremque maiores, provident ipsa et
                                          tenetur nesciunt voluptate dicta, cum a assumenda! Fuga
                                          ipsa, ducimus veritatis dolorum neque consequatur.
                                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptates illum neque doloremque iusto laudantium quasi accusamus excepturi in? At doloribus animi nobis velit neque quae molestias. Nisi, accusantium odio.
                                          Distinctio ipsa dolorum in vitae nulla quod totam minima unde doloribus! Iure et aliquam ratione error rem odio dolor libero maxime natus atque, itaque provident ducimus accusamus. Hic, quibusdam in.
                                        </p>
                                      </div>
                                      <div class="item-add">
                                        <button type="submit" onclick="addCart(${items.id})">Add Cart</button>
                                      </div>
                                    </div>
                                  </div>`;
      }
    });
  }
}

let cartList = [];

function increase(i, id) {
  cartList[i].quantity += 1;
  cart_itemSec.innerHTML = "";
  for (let i = 0; i < cartList.length; i++) {
    let cartItem = `<div class="cart-listItem">
                      <div class="remove-item">
                        <i class="fa-solid fa-trash" onclick="removeItem(${i})"></i>
                      </div>
                      <div class="cart-itemImage">
                        <img src="${cartList[i].image}">
                      </div>
                      <div class="cart-itemInfo">
                        <div class="itemInfo-details">
                          <div class="itemInfo-name">
                            <p>${cartList[i].name}</p>
                          </div>
                          <div class="itemInfo-price">
                            <p>Price: $${cartList[i].price}</p>
                          </div>
                        </div>
                        <div class="itemInfo-total">
                          <div class="total-cost">
                            <p>Total: $${
                              cartList[i].quantity * cartList[i].price
                            }</p>
                          </div>
                          <div class="item-qty">
                            <div class="qty-box">
                              <div class="qty-title">
                                <p>Qty: </p>
                              </div>
                              <div class="qty-count">
                                <p>${cartList[i].quantity}</p>
                              </div>
                              <div class="qty-change">
                                <p><i class="fa-solid fa-caret-up" onclick="increase(${i},${
      cartList[i].id
    })"></i></p>
                                <p><i class="fa-solid fa-caret-down" onclick="decrease(${i})"></i></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>`;
    cart_itemSec.innerHTML += cartItem;
  }
  let sub_total = 0;
  for (let i = 0; i < cartList.length; i++) {
    sub_total += cartList[i].quantity * cartList[i].price;
  }
  subtotal.innerHTML = `$${sub_total}`;
  checktotal.innerHTML = `$${sub_total}`;
}

function decrease(i) {
  if (cartList[i].quantity > 1) {
    cartList[i].quantity -= 1;
    cart_itemSec.innerHTML = "";
    for (let i = 0; i < cartList.length; i++) {
      let cartItem = `<div class="cart-listItem">
                        <div class="remove-item">
                          <i class="fa-solid fa-trash" onclick="removeItem(${i})"></i>
                        </div>
                        <div class="cart-itemImage">
                          <img src="${cartList[i].image}">
                        </div>
                        <div class="cart-itemInfo">
                          <div class="itemInfo-details">
                            <div class="itemInfo-name">
                              <p>${cartList[i].name}</p>
                            </div>
                            <div class="itemInfo-price">
                              <p>Price: $${cartList[i].price}</p>
                            </div>
                          </div>
                          <div class="itemInfo-total">
                            <div class="total-cost">
                              <p>Total: $${
                                cartList[i].quantity * cartList[i].price
                              }</p>
                            </div>
                            <div class="item-qty">
                              <div class="qty-box">
                                <div class="qty-title">
                                  <p>Qty: </p>
                                </div>
                                <div class="qty-count">
                                  <p>${cartList[i].quantity}</p>
                                </div>
                                <div class="qty-change">
                                  <p><i class="fa-solid fa-caret-up" onclick="increase(${i},${
        cartList[i].id
      })"></i></p>
                                  <p><i class="fa-solid fa-caret-down" onclick="decrease(${i})"></i></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>`;
      cart_itemSec.innerHTML += cartItem;
    }
    let sub_total = 0;
    for (let i = 0; i < cartList.length; i++) {
      sub_total += cartList[i].quantity * cartList[i].price;
    }
    subtotal.innerHTML = `$${sub_total}`;
    checktotal.innerHTML = `$${sub_total}`;
  }
}

function removeItem(i) {
  cartList.splice(i, 1);
  cart_itemSec.innerHTML = "";
  for (let i = 0; i < cartList.length; i++) {
    let cartItem = `<div class="cart-listItem">
                      <div class="remove-item">
                        <i class="fa-solid fa-trash" onclick="removeItem(${i})"></i>
                      </div>
                      <div class="cart-itemImage">
                        <img src="${cartList[i].image}">
                      </div>
                      <div class="cart-itemInfo">
                        <div class="itemInfo-details">
                          <div class="itemInfo-name">
                            <p>${cartList[i].name}</p>
                          </div>
                          <div class="itemInfo-price">
                            <p>Price: $${cartList[i].price}</p>
                          </div>
                        </div>
                        <div class="itemInfo-total">
                          <div class="total-cost">
                            <p>Total: $${
                              cartList[i].quantity * cartList[i].price
                            }</p>
                          </div>
                          <div class="item-qty">
                            <div class="qty-box">
                              <div class="qty-title">
                                <p>Qty: </p>
                              </div>
                              <div class="qty-count">
                                <p>${cartList[i].quantity}</p>
                              </div>
                              <div class="qty-change">
                                <p><i class="fa-solid fa-caret-up" onclick="increase(${i},${
      cartList[i].id
    })"></i></p>
                                <p><i class="fa-solid fa-caret-down" onclick="decrease(${i})"></i></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>`;
    cart_itemSec.innerHTML += cartItem;
  }
  let sub_total = 0;
  for (let i = 0; i < cartList.length; i++) {
    sub_total += cartList[i].quantity * cartList[i].price;
  }
  subtotal.innerHTML = `$${sub_total}`;
  checktotal.innerHTML = `$${sub_total}`;
}

function addCart(id) {
  for (let i = 0; i < all_items.length; i++) {
    all_items[i][array_list[i]].forEach((items) => {
      if (items.id == id) {
        cartList.push(items);
      }
    });
  }
  cart_itemSec.innerHTML = "";
  for (let i = 0; i < cartList.length; i++) {
    let cartItem = `<div class="cart-listItem">
                      <div class="remove-item">
                        <i class="fa-solid fa-trash" onclick="removeItem(${i})"></i>
                      </div>
                      <div class="cart-itemImage">
                        <img src="${cartList[i].image}">
                      </div>
                      <div class="cart-itemInfo">
                        <div class="itemInfo-details">
                          <div class="itemInfo-name">
                            <p>${cartList[i].name}</p>
                          </div>
                          <div class="itemInfo-price">
                            <p>Price: $${cartList[i].price}</p>
                          </div>
                        </div>
                        <div class="itemInfo-total">
                          <div class="total-cost">
                            <p>Total: $${
                              cartList[i].quantity * cartList[i].price
                            }</p>
                          </div>
                          <div class="item-qty">
                            <div class="qty-box">
                              <div class="qty-title">
                                <p>Qty: </p>
                              </div>
                              <div class="qty-count">
                                <p>${cartList[i].quantity}</p>
                              </div>
                              <div class="qty-change">
                                <p><i class="fa-solid fa-caret-up" onclick="increase(${i},${
      cartList[i].id
    })"></i></p>
                                <p><i class="fa-solid fa-caret-down" onclick="decrease(${i})"></i></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>`;
    cart_itemSec.innerHTML += cartItem;
  }
  let sub_total = 0;
  for (let i = 0; i < cartList.length; i++) {
    sub_total += cartList[i].quantity * cartList[i].price;
  }
  subtotal.innerHTML = `$${sub_total}`;
  checktotal.innerHTML = `$${sub_total}`;
}

setInterval(() => {
  cart_itemCount.innerHTML = cartList.length;
}, 100);

cart_list.addEventListener("click", function () {
  seperate_body.style.display = "none";
  home_body.style.display = "none";
  item_details.style.display = "none";
  cart_items.style.display = "block";
  search_body.style.display = "none";
  search.value = "";
  clear.style.display = "none";
});

search.addEventListener("input", function () {
  if (search.value != "") {
    seperate_body.style.display = "none";
    home_body.style.display = "none";
    item_details.style.display = "none";
    cart_items.style.display = "none";
    search_body.style.display = "block";
  } else {
    seperate_body.style.display = "none";
    home_body.style.display = "block";
    item_details.style.display = "none";
    cart_items.style.display = "none";
    search_body.style.display = "none";
    item_bg.forEach((item) => {
      item.classList.remove("bg");
    });
    item_bg[0].classList.add("bg");
  }
});

search.addEventListener("input", function () {
  search_container.innerHTML = "";
  for (let i = 0; i < all_items.length; i++) {
    all_items[i][array_list[i]].forEach((items) => {
      if (items.name.toLowerCase().includes(search.value)) {
        search_container.innerHTML += `<div class="clothes-item" onclick="getItemid(${items.id})">
                                          <div class="image-div">
                                            <img src="${items.image}" alt="image">
                                          </div>
                                          <div class="details-div">
                                            <div class="name-div">
                                              <p>${items.name}</p>
                                            </div>
                                            <div class="price-div">
                                              <div class="price">
                                                <p>For: $${items.price}</p>
                                              </div>
                                              <div class="item-cart">
                                                <p>12%</p>
                                              </div>
                                            </div>
                                        </div>`;
      }
    });
  }
});

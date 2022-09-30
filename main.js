let shop = document.getElementById("shop");

let shopItemData = [
  {
    id: "jgdjhsclkd",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-1.jpg",
  },
  {
    id: "pokknjslkd",
    name: "Office Shirt",
    price: 100,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-2.jpg",
  },
  {
    id: "adsdjhsclkd",
    name: "T Shirt",
    price: 25,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-3.jpg",
  },
  {
    id: "gcdzsclkd",
    name: "Mens Suit",
    price: 300,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    img: "images/img-4.jpg",
  },
];

let generateShop = () => {
  return (shop.innerHTML = shopItemData
    .map((x) => {
      let { id, name, price, desc, img } = x;
      return `
  <div id=product-id-${id} class="item">
        <img width="220" src= ${img} alt="" />
        <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
          <div class="price-quantity">
            <h2>$ ${price}</h2>
            <div class="buttons">
              <i class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">0</div>
              <i class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
      </div>
  `;
    })
    .join(""));
};
generateShop();
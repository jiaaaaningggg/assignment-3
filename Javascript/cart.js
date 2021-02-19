let carts = document.querySelectorAll('.add-cart');

let products = 
[
    {
        name: 'T - T Bucket Hat',
        tag: "Bucket Hat",
        price: 30,
        inCart: 0,
    },
    {
        name: 'T - T Bucket Hat - Blue',
        tag: "Bucket Hat",
        price: 20,
        inCart: 0,
    },
    {
        name: 'T - T Bucket Hat - Red',
        tag: "Bucket Hat",
        price: 20,
        inCart: 0,
    },
    {
        name: 'Zoomer Bucket Hat',
        tag: "Bucket Hat",
        price: 20,
        inCart: 0,
    },
    {
        name: 'Angry Face Face Mask',
        tag: "Face Mask",
        price: 10,
        inCart: 0,
    },
    {
        name: 'LIMITED EDITION T&T mask',
        tag: "Face Mask",
        price: 6000,
        inCart: 0,
    },
    {
        name: 'Math pie hoodie',
        tag: "Hoodie",
        price: 40,
        inCart: 0,
    },
    {
        name: 'wait what? pink pullover',
        tag: "Pullover",
        price: 140,
        inCart: 0,
    },
    {
        name: 'LIMITED EDITION T&T grey shirt',
        tag: "Tshirt",
        price: 120,
        inCart: 0,
    },
    {
        name: 'Tell me youre a programmer purple edition',
        tag: "Tshirt",
        price: 23,
        inCart: 0,
    },
    {
        name: 'Tell me youre a programmer blue edition',
        tag: "Tshirt",
        price: 100,
        inCart: 0,
    },
    {
        name: 'Tell me youre a programmer brown edition',
        tag: "Tshirt",
        price: 20,
        inCart: 0,
    },
    {
        name: 'Tell me youre a programmer black edition',
        tag: "Tshirt",
        price: 120,
        inCart: 0,
    },
    {
        name: 'Math pie shirt',
        tag: "Tshirt",
        price: 150,
        inCart: 0,
    },
    {
        name: 'LIMITED EDITION oet shirt',
        tag: "Tshirt",
        price: 45,
        inCart: 0,
    },
    {
        name: 'floral shirt by Prada',
        tag: "Tshirt",
        price: 350,
        inCart: 0,
    },
    {
        name: 'checkered scarf',
        tag: "Scarf",
        price: 50,
        inCart: 0,
    },
    {
        name: 'pink low cut sneakers',
        tag: "Sneakers",
        price: 249,
        inCart: 0,
    },
    {
        name: 'H&M SweatShirt',
        tag: "Sweatshirt",
        price: 128,
        inCart: 0,
    },
    {
        name: 'Calvin Klein belt',
        tag: "Belt",
        price: 87,
        inCart: 0,
    },
    {
        name: 'Prada trangle pouch',
        tag: "Pouch",
        price: 67,
        inCart: 0,
    },
    {
        name: 'Burgers and Lobsters Gucci shirt',
        tag: "Belt",
        price: 189,
        inCart: 0,
    },
    {
        name: 'Hawaii Shirt',
        tag: "Belt",
        price: 122,
        inCart: 0,
    },
    {
        name: 'Dorothy Perkins Shoes',
        tag: "Belt",
        price: 1222,
        inCart: 0,
    },
    {
        name: 'Bobbi Brown Forest Shirt',
        tag: "Belt",
        price: 350,
        inCart: 0,
    },
    {
        name: 'White low cut shoes',
        tag: "Belt",
        price: 230,
        inCart: 0,
    },
    {
        name: 'Prada silk touch shirt',
        tag: "Belt",
        price: 290,
        inCart: 0,
    }
]

for (let i = 0; i<carts.length; i++){
    carts[i].addEventListener('click', () =>{
        cartNumber(products[i]);
        totalCost(products[i].price)
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumber(products) {
    let productNumbers = localStorage.getItem('cartNumber');

    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumber', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumber', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItem(products);
}

function setItems(products) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[products.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [products.tag]: products
            }
        }
        cartItems[products.tag].inCart +=1;
    } else {
        products.inCart = 1;
        cartItems = {
            [products.tag]: products
        }
    }
    
    localStorage.setItem('productsInCart', JSON.stringify(cartItems))
}

function totalCost(products) {
    let cartCost = localStorage.getItem('.totalCost');
    
    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + products.price);
    }
    localStorage.setItem('totalCost', products.price);
}
function displayCart(){
    let cartItems = localStorage.getItem("productsinCart");
    cartItems=JSON.parse(cartItems);
    let productContainer =document.querySelector
    (".products");
    let cartCost = localStorage.getItem('.totalCost');

    if(cartItems && productContainer ){
       productContainer.innerHTML='';
       Object.values(cartItems).map(item=>{
           productContainer.innerHTML += `
           <div class="product">
                <ion-icon name="close-circle"></ion-icon>
                <img src="./images/${item.tag}.jpg">
                <span>${item.name}</span>
            </div>
            <div class="price">$${item.price},00</div>
            <div class="quantity">
                <ion-icon class="decrease "
                name="arrow-dropleft-circle"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon class="increase"
                name="arrow-dropright-circle"></ion-icon>
            </div>
            <div class="total">
                $${item.inCart*item.price},00
            </div>
           `;
       });
       productContainer.innerHTML += `
       <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">
                Basket Total
            </h4>
            <h4 class=basketTotal">
                $${cartCost},00
            </h4>

       `;


    }
}
onLoadCartNumbers();
displayCart();

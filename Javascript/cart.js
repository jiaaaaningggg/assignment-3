let carts = document.querySelectorAll('.add-cart');

let products = 
[
    {
        name: 'floral shirt by Prada',
        tag: "shirt2",
        price: 350,
        inCart: 0,
    },
    {
        name: 'checkered scarf',
        tag: "acc3",
        price: 50,
        inCart: 0,
    },
    {
        name: 'pink low cut sneakers',
        tag: "shoe3",
        price: 249,
        inCart: 0,
    },
    {
        name: 'H&M SweatShirt',
        tag: "shirt5",
        price: 128,
        inCart: 0,
    },
    {
        name: 'Calvin Klein belt',
        tag: "acc9",
        price: 87,
        inCart: 0,
    },
    {
        name: 'Prada trangle pouch',
        tag: "acc10",
        price: 67,
        inCart: 0,
    },
    {
        name: 'Burgers and Lobsters Gucci shirt',
        tag: "shirt6",
        price: 189,
        inCart: 0,
    },
    {
        name: 'Hawaii Shirt',
        tag: "shirt3",
        price: 122,
        inCart: 0,
    },
    {
        name: 'Dorothy Perkins Shoes',
        tag: "shoe9",
        price: 1222,
        inCart: 0,
    },
    {
        name: 'Bobbi Brown Forest Shirt',
        tag: "shirt7",
        price: 350,
        inCart: 0,
    },
    {
        name: 'White low cut shoes',
        tag: "Shoe8",
        price: 230,
        inCart: 0,
    },
    {
        name: 'Prada silk touch shirt',
        tag: "shirt4",
        price: 290,
        inCart: 0,
    },
    {
        name: 'T - T Bucket Hat',
        tag: "BH01",
        price: 30,
        inCart: 0,
    },
    {
        name: 'T - T Bucket Hat - Blue',
        tag: "BH02Front",
        price: 20,
        inCart: 0,
    },
    {
        name: 'T - T Bucket Hat - Red',
        tag: "BH03Front",
        price: 20,
        inCart: 0,
    },
    {
        name: 'Zoomer Bucket Hat',
        tag: "BH04Front",
        price: 20,
        inCart: 0,
    },
    {
        name: 'Angry Face Face Mask',
        tag: "FM01",
        price: 10,
        inCart: 0,
    },
    {
        name: 'LIMITED EDITION T&T mask',
        tag: "FM02",
        price: 6000,
        inCart: 0,
    },
    {
        name: 'Math pie hoodie',
        tag: "HD01Front",
        price: 40,
        inCart: 0,
    },
    {
        name: 'wait what? pink pullover',
        tag: "LS01Front",
        price: 140,
        inCart: 0,
    },
    {
        name: 'LIMITED EDITION T&T grey shirt',
        tag: "TS08Front",
        price: 120,
        inCart: 0,
    },
    {
        name: 'Tell me youre a programmer purple edition',
        tag: "TS07Front",
        price: 23,
        inCart: 0,
    },
    {
        name: 'Tell me youre a programmer blue edition',
        tag: "TS06Front",
        price: 100,
        inCart: 0,
    },
    {
        name: 'Tell me youre a programmer brown edition',
        tag: "TS05Front",
        price: 20,
        inCart: 0,
    },
    {
        name: 'Tell me youre a programmer black edition',
        tag: "TS04Front",
        price: 120,
        inCart: 0,
    },
    {
        name: 'Math pie shirt',
        tag: "TS03Front",
        price: 150,
        inCart: 0,
    },
    {
        name: 'LIMITED EDITION oet shirt',
        tag: "TS02Front",
        price: 45,
        inCart: 0,
    },
    {
        name: 'IT is what it is black low cut shirt',
        tag: "TS01Front",
        price: 40,
        inCart: 0,
    }
]

for (let i = 0; i<carts.length; i++){
    carts[i].addEventListener('click', () =>{
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(products) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItem(products);
}

function setItem(products) {
    let cartItems = localStorage.getItem("productsInCart");
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
    let cartCost = localStorage.getItem('totalCost');
    
    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + products.price);
    }
    else {
        localStorage.setItem('totalCost', products.price);
    }
}

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems=JSON.parse(cartItems);
    let productContainer = document.querySelector
    (".products");
    let cartCost = localStorage.getItem('totalCost');

    if(cartItems && productContainer){
       productContainer.innerHTML='';
       Object.values(cartItems).map(item=>{
           productContainer.innerHTML += `
           <div class="product">
                <ion-icon name="close-circle"></ion-icon>
                <img src="images/${item.tag}.png">
                <span>${item.name}</span>
            </div>
            <div class="price">$${item.price},00</div>
            <div class="quantity">
                <ion-icon class="decrease"
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
            <h4 class="basketTotal">
                $${cartCost},00
            </h4>
       `;
    }
}

onLoadCartNumbers();
displayCart();

let carts = document.querySelectorAll('.add-cart');

let products = 
[
    {
    name: 'Grey Tshirt',
    tag: 'greytshirt',
    price: 14,
    inCart: 0
    }
]

for (let i = 0; i<carts.length; i++){
    carts[i].addEventListener('click', () =>{
        cartNumber(products[i]);
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
}

onLoadCartNumbers();
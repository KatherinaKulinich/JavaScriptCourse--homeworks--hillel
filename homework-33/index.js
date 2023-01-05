const productsContainer = document.querySelector('.products');

function createProductList(array, item) {
    item.replaceChildren();
    array.map((obj) => item.append(createCard(obj)));
}

createProductList(productsList, productsContainer);


function showProduct(event) {

    let item = Number(event.target.dataset.productId);
    let itemChild = Number(event.target.parentElement.dataset.productId);

    if (event.target.tagName === 'BUTTON') return;

    for (let i = 0; i < productsList.length; i++) {

        if (productsList[i].id === item || productsList[i].id === itemChild) {
            const state = {id: productsList[i].id};
            const url = './product.html';
          
            history.pushState(state, '', url);
            history.go(url);
        }        
    }

    return history.state;
}

  
productsContainer.addEventListener('click', showProduct)


























// export default productsList;










// const productsList = [];


// class NewProduct {
//     constructor(name, price, isActive, id) {
//         this.name = name;
//         this.price = price;
//         this.id = id;
//         this.isActive = isActive;
//     }  
// }

// function createNewProduct(name, price, isActive, id) {
 
//     let newProduct = new NewProduct(name, price, isActive, id);
//     productsList.push(newProduct);
//     createProductList(productsList);
// }

// const product1 = createNewProduct('cars-set', '20$', true, 1);
// const product2 = createNewProduct('constructor-2', '34$', true, 2);
// const product3 = createNewProduct('car-2', '10$', false, 3);
// const product4 = createNewProduct('bus', '13$', true, 4);
// const product5 = createNewProduct('bear', '18$', true, 5);
// const product6 = createNewProduct('car-1', '12$', false, 6);
// const product14 = createNewProduct('toy-3', '22$', true, 14);
// const product7 = createNewProduct('barbie', '28$', true, 7);
// const product8 = createNewProduct('toy-avocado', '21$', true, 8);
// const product9 = createNewProduct('constructor', '35$', true, 9);
// const product10 = createNewProduct('toy-2', '17$', false, 10);
// const product11 = createNewProduct('lego', '27$', true, 11);
// const product15 = createNewProduct('toy-4', '27$', true, 15);
// const product12 = createNewProduct('lego-2', '30$', true, 12);
// const product13 = createNewProduct('toy', '25$', true, 13)











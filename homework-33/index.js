const productsContainer = document.querySelector('.products');
const productsList = [];


class NewProduct {
    constructor(name, price, isActive, id) {
        this.name = name;
        this.price = price;
        this.id = id;
        this.isActive = isActive;
    }  
}

function createNewProduct(name, price, isActive, id) {
 
    let newProduct = new NewProduct(name, price, isActive, id);
    productsList.push(newProduct);
    createProductList(productsList);
}



class MyCustomElement {
    constructor(selector) {
        this.selector = selector;
        this.elem = '';
        this.class = '';
        this.textContent = '';
        this.attribute = '';
        this.attributeValue = '';
    }

    createElem() {
        this.elem = document.createElement(`${this.selector}`);
        return this;
    }

    addClass(value) {
        this.class = value;
        this.elem.classList.add(this.class);
        return this;
    }

    addText(text) {
        this.textContent = text;
        this.elem.innerHTML = this.textContent;
        return this
    }

    addAttribute(attr, value) {
        this.attribute = attr;
        this.attributeValue = value;
        this.elem.setAttribute(`${this.attribute}`, `${this.attributeValue }`);
        return this
    }
}


function createProductList(array) {

    productsContainer.replaceChildren();
    array.map((obj) => productsContainer.append(createCard(obj)));
}


function createCard(object) {
    const {id, name, price, isActive} = object;

        const card = new MyCustomElement('div');
        card.createElem().addClass('product').addAttribute('data-product-id', `${id}`);

        const cardTitle = new MyCustomElement('div');
        cardTitle.createElem().addClass('product__title').addText(`${name}`);

        const image = new MyCustomElement('img');
        image.createElem().addAttribute('src', `./images/${name}.png`).addClass('product__image');

        const cardPrice = new MyCustomElement('div');
        cardPrice.createElem().addClass('product__price').addText(`${price}`);
        card.elem.append(cardTitle.elem, image.elem, cardPrice.elem);

        if (isActive === false) {
            card.addClass('disabled');
            const cardMessage = new MyCustomElement('p');
            cardMessage.createElem().addClass('product__message').addText('Not available');
            card.elem.append(cardMessage.elem);
            
        } else {
            const cardButton = new MyCustomElement('button');
            cardButton.createElem().addClass('product__btn').addText('Add to cart');
            card.elem.append(cardButton.elem);
        }
    return card.elem;
}






const product1 = createNewProduct('cars-set', '20$', true, 1);
const product2 = createNewProduct('constructor-2', '34$', true, 2);
const product3 = createNewProduct('car-2', '10$', false, 3);
const product4 = createNewProduct('bus', '13$', true, 4);
const product5 = createNewProduct('bear', '18$', true, 5);
const product6 = createNewProduct('car-1', '12$', false, 6);
const product14 = createNewProduct('toy-3', '22$', true, 14);
const product7 = createNewProduct('barbie', '28$', true, 7);
const product8 = createNewProduct('toy-avocado', '21$', true, 8);
const product9 = createNewProduct('constructor', '35$', true, 9);
const product10 = createNewProduct('toy-2', '17$', false, 10);
const product11 = createNewProduct('lego', '27$', true, 11);
const product15 = createNewProduct('toy-4', '27$', true, 15);
const product12 = createNewProduct('lego-2', '30$', true, 12);
const product13 = createNewProduct('toy', '25$', true, 13);




function showProduct(event) {

    let item = Number(event.target.dataset.productId);
    let itemChild = Number(event.target.parentElement.dataset.productId);

    if (event.target.tagName === 'BUTTON') return;

    for (let i = 0; i < productsList.length; i++) {

        if (productsList[i].id === item || productsList[i].id === itemChild) {

            history.pushState(productsList[i], `product-page-${productsList[i].id}`, '/homework-33/product.html');
            history.go(0);
        }        
    }

    return history.state;
}

  
productsContainer.addEventListener('click', showProduct)






















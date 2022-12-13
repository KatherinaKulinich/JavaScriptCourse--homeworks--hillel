// import {MyCustomElement} from './index.js';
// import {createCard} from './index.js';



const container = document.querySelector('.content');


class MyCustomElement {      //repeat from index
    constructor(selector) {
        this.selector = selector;
        this.elem = '';
        this.class = '';
        this.textContent = '';
        this.attribute = '';
        this.id = '';
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
        this.id = value;
        this.elem.setAttribute(`${this.attribute}`, `${this.id}`);
        return this
    }
}


function createCard(object) {         //repeat from index
    const {id, name, price, isActive} = object;

        const card = new MyCustomElement('div');
        card.createElem().addClass('product').addAttribute('data-product-id', `${id}`);

        const cardTitle = new MyCustomElement('div');
        cardTitle.createElem().addClass('product__title').addText(`${name}`);

        const image = new MyCustomElement('img');
        image.createElem().addAttribute('src', `./images/${name}.png`).addClass('product__image').addAttribute('alt', `image-${name}`);

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






function showProductInfo(elem) {
    container.append(createCard(elem))
}



if (history.state) {
    showProductInfo(history.state);
}




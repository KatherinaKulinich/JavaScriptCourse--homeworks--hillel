const productsList = [
    {name: 'cars-set', price: '20$', isActive: true, id: 1},
    {name: 'constructor-2', price: '34$', isActive: true, id: 2},
    {name: 'car-2', price: '10$', isActive: false, id: 3},
    {name: 'bus', price: '13$', isActive: true, id: 4},
    {name: 'bear', price: '18$', isActive: true, id: 5},
    {name: 'car-1', price: '12$', isActive: false, id: 6},
    {name: 'toy-3', price: '22$', isActive: true, id: 14},
    {name: 'barbie', price: '28$', isActive: true, id: 7},
    {name: 'toy-avocado', price: '21$', isActive: true, id: 8},
    {name: 'constructor', price: '35$', isActive: true, id: 9},
    {name: 'toy-2', price:  '17$', isActive: false, id: 10},
    {name: 'lego', price: '27$', isActive: true, id: 11},
    {name: 'toy-4', price: '27$', isActive: true, id: 15},
    {name: 'lego-2', price: '30$', isActive: true, id: 12},
    {name: 'toy', price: '25$', isActive: true, id: 13}
]


class MyCustomElement {
    constructor(selector) {
        this.element = document.createElement(selector);
    }

    addClass(value) {
        this.element.classList.add(value);
        return this;
    }

    addText(text) {
        this.element.innerHTML = text;
        return this;
    }

    addAttribute(attr, value) {
        this.element.setAttribute(`${attr}`, `${value}`);
        return this;
    }
}


function createCard(object) {
    const {id, name, price, isActive} = object;

        const card = new MyCustomElement('div');
        card.addClass('product').addAttribute('data-product-id', `${id}`);

        const cardTitle = new MyCustomElement('div');
        cardTitle.addClass('product__title').addText(`${name}`);

        const image = new MyCustomElement('img');
        image.addAttribute('src', `./images/${name}.png`).addClass('product__image');

        const cardPrice = new MyCustomElement('div');
        cardPrice.addClass('product__price').addText(`${price}`);
        card.element.append(cardTitle.element, image.element, cardPrice.element);

        if (isActive === false) {
            card.addClass('disabled');
            const cardMessage = new MyCustomElement('p');
            cardMessage.addClass('product__message').addText('Not available');
            card.element.append(cardMessage.element);
            
        } else {
            const cardButton = new MyCustomElement('button');
            cardButton.addClass('product__btn').addText('Add to cart');
            card.element.append(cardButton.element);
        }
    return card.element;
}
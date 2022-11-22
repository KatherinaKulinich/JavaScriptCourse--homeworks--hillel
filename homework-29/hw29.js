const categories = [
    {
      id: 1,
      category: "Toys",
    },
    {
      id: 2,
      category: "Sports",
    },
    {
      id: 3,
      category: "Toys",
    },
    {
      id: 4,
      category: "Grocery",
    },
    {
      id: 5,
      category: "Garden",
    },
  ];
  
  const products = [
    {
      id: 1,
      category_id: 2,
      name: "Eggplant - Asian",
      description:
        "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    },
    {
      id: 2,
      category_id: 5,
      name: "Jagermeister",
      description:
        "Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    },
    {
      id: 3,
      category_id: 2,
      name: "Wine - Lou Black Shiraz",
      description:
        "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    },
    {
      id: 4,
      category_id: 3,
      name: "Beef - Ox Tongue",
      description:
        "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    },
    {
      id: 5,
      category_id: 3,
      name: "Beef - Bones, Marrow",
      description:
        "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    },
    {
      id: 6,
      category_id: 2,
      name: "Appetizer - Shrimp Puff",
      description:
        "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    },
    {
      id: 7,
      category_id: 4,
      name: "Appetizer - Shrimp Puff",
      description:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    },
    {
      id: 8,
      category_id: 1,
      name: "Ecolab - Ster Bac",
      description: "Integer ac leo. Pellentesque ultrices mattis odio.",
    },
    {
      id: 9,
      category_id: 4,
      name: "Vegetable - Base",
      description:
        "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    },
    {
      id: 10,
      category_id: 3,
      name: "Flour - Corn, Fine",
      description:
        "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    },
    {
      id: 11,
      category_id: 1,
      name: "Beer - Guiness",
      description:
        "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    },
    {
      id: 12,
      category_id: 4,
      name: "Napkin White",
      description:
        "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    },
    {
      id: 13,
      category_id: 2,
      name: "Oil - Truffle, White",
      description:
        "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    },
    {
      id: 14,
      category_id: 5,
      name: "Wine - Puligny Montrachet A.",
      description:
        "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    },
    {
      id: 15,
      category_id: 5,
      name: "Tomatoes Tear Drop",
      description:
        "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    },
  ];

const prices = ['10$', '12$', '7$', '11$', '20$', '15$', '5$', '25$', '18$', '10$', '28$', '11$', '13$', '16$', '9$'];

for (let i = 0; i < products.length; i++) {
    products[i].price = prices[i];
}

const container = document.querySelector('.container');
const sectionCategories = document.querySelector('#categories');
const sectionProducts = document.querySelector('#products');
const description = document.querySelector('#description');
const buttonBuy = document.querySelector('#buy-button');
const price = document.querySelector('#price');


sectionProducts.classList.add('hidden');
description.classList.add('hidden');
buttonBuy.classList.add('hidden');



function showProducts(array, item) {
    
    sectionProducts.replaceChildren();

    for (let obj of array) {
        
        if (obj.category_id === item) {

            const li = document.createElement('li');
            li.setAttribute('data-product-id', `${obj.id}`);
            li.textContent = obj.name;
            sectionProducts.append(li);
            price.classList.add('hidden');
            sectionProducts.classList.remove('hidden');
            description.classList.add('hidden');
            buttonBuy.classList.add('hidden');
            form.classList.add('hidden');
        }
    }
}

sectionCategories.addEventListener('click', (event) => {

    let selectedCategory = Number(event.target.dataset.categoryId);
    showProducts(products, selectedCategory);
    form.elements['amount-product'].value = '';
})



/** При натисканні на кнопку нижче з'являється форма оформлення замовлення з наступними полями:

- ПІБ покупця
- Місто (вибір зі списку декількох міст)
- Склад Нової пошти для надсилання (числове поле)
- Спосіб оплати: післяплата або оплата на банківську картку
- Кількість продукції, що купується */


const order = document.querySelector('.order-field');
const form = document.createElement('form');
form.action = '#';
form.method = 'post';
form.classList.add('hidden');

const title = document.createElement('p');
title.textContent = 'Введіть дані про доставку: ';

const clientName = document.createElement('input');
clientName.type = 'text';
clientName.name = 'client-name';
clientName.id = 'client-name';
const labelName = document.createElement('label');
labelName.textContent = 'Ваше імʼя, прізвище та по-батькові: ';
labelName.setAttribute('for', 'client-name');

const clientCity = document.createElement('select');
clientCity.name = 'client-city';
clientCity.id = 'client-city';
const labelCity = document.createElement('label');
labelCity.textContent = 'Оберіть місто зі списку: ';
labelCity.setAttribute('for', 'client-city');

const cities = ['', 'Kyiv', 'Kharkiv', 'Odessa', 'Dnipro', 'Donetsk', 'Zaporozhye', 'Lviv',
                'Krivoy Rog', 'Nikolaev', 'Vinnitsa', 'Kherson', 'Poltava', 'Chernihiv'];

for (let city of cities) {
    const option = document.createElement('option');
    option.value = `${city}`;
    option.textContent = `${city}`;
    clientCity.append(option);
}

const clientStock = document.createElement('input');
clientStock.type = 'number';
clientStock.name = 'client-stock';
clientStock.id = 'client-stock';
clientStock.setAttribute('min', '1');
const labelStock = document.createElement('label');
labelStock.textContent = 'Введіть номер відділення Нової Пошти: ';
labelStock.setAttribute('for', 'client-stock');

const payText = document.createElement('p');
payText.textContent = 'Оберіть спосіб оплати: ';

const paymentCash = document.createElement('input');
paymentCash.type = 'radio';
paymentCash.name = 'payment-method';
paymentCash.id = 'payment-method-cash';
paymentCash.value = 'cash';
const labelCash = document.createElement('label');
labelCash.textContent = 'Оплата готівкою при отриманні: ';
labelCash.setAttribute('for', 'payment-method-cash');
labelCash.append(paymentCash);

const paymentCard = document.createElement('input');
paymentCard.type = 'radio';
paymentCard.name = 'payment-method';
paymentCard.id = 'payment-method-card';
paymentCard.value = 'card';
const labelCard = document.createElement('label');
labelCard.textContent = 'Оплата на банківську картку: ';
labelCard.setAttribute('for', 'payment-method-card');
labelCard.append(paymentCard);

const amountProduct = document.createElement('input');
amountProduct.type = 'number';
amountProduct.name = 'amount-product';
amountProduct.id = 'amount-product';
amountProduct.setAttribute('min', '1');
const labelAmount = document.createElement('label');
labelAmount.textContent = 'Оберіть кількість товару: ';
labelAmount.setAttribute('for', 'amount-product');

const buttonOrder = document.createElement('button');
buttonOrder.type = 'submit';
buttonOrder.id = 'btn-order';
buttonOrder.textContent = 'Оформити замовлення';


form.append(title, labelName, clientName, labelCity, clientCity, labelStock, clientStock, payText,  labelCash, labelCard, labelAmount, amountProduct, buttonOrder );
order.append(form);

const message = document.createElement('p');
message.classList.add('error');
message.classList.add('hidden');
message.textContent = 'Please, fill all fields!';
order.append(message);
const successfulOrder = document.createElement('div');
order.append(successfulOrder);


function getPurchaseStatus() {
    sectionProducts.classList.add('hidden');
    buttonBuy.classList.add('hidden');
    form.classList.remove('hidden');
}

buttonBuy.addEventListener('click', getPurchaseStatus);

/* Реалізувати валідацію форми за допомогою JS, щоб всі поля були заповнені.
При валідаціїї поля ПІБ видаляти зайві пробіли (за допомогою String.trim()).
Якщо дані у формі некоректні, вивести повідомлення про це під формою.

Дані замовлення зберегти у обʼєкті. До обʼєкту також додати властивості з даними про дату створення та суму замовлення.
Якщо дані у формі коректні, вивести інформацію про замовлення під формою у форматі JSON. */

let formFields = [form.elements['client-name'], 
                  form.elements['client-city'], 
                  form.elements['client-stock'], 
                  form.elements['payment-method'], 
                  form.elements['amount-product']];

function validateForm(array) {

    let userName = form.elements['client-name'].value;
    let validateName = userName.trim();
    form.elements['client-name'].value = validateName;

    for (let item of array) {
        if (item.value === '') {
            message.classList.remove('hidden');
            return;
        }
    }

    message.classList.add('hidden');

    const newOrder = new Order;
    newOrder.sumOrder();

    successfulOrder.innerHTML = `<pre>${JSON.stringify(newOrder)}<pre>`;
};

form.addEventListener('submit', (event) => {
    event.preventDefault();

    validateForm(formFields);
});


function Order() {
    this.name = form.elements['client-name'].value;
    this.city = form.elements['client-city'].value;
    this.stock = form.elements['client-stock'].value;
    this.paymemtMethod = form.elements['payment-method'].value;
    this.amountProducts = form.elements['amount-product'].value;
    this.date = new Date();
    this.sum = '';
}

function showInfo(array, item) {

    for (let obj of array) {

        if (obj.id === item) {

            description.textContent = obj.description;
            price.textContent = obj.price;
            price.classList.remove('hidden');
            description.classList.remove('hidden');
            buttonBuy.classList.remove('hidden');

            Order.prototype.sumOrder = function() {
                let price = obj.price;
                let productPrice = Number(price.replace('$', ''));
                let sum = productPrice * this.amountProducts;
                this.sum = `${sum}.00 $`;
                return this.sum;
            }
        }
    }
}

sectionProducts.addEventListener('click', (event) => {

    let selectedProduct = Number(event.target.dataset.productId);
    showInfo(products, selectedProduct);
})




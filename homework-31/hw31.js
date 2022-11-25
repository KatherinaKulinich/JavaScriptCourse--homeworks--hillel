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
      description: "Integer ac leo. Pellentesque ultrices mattis odio. Integer ac leo.",
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
const categoriesList = document.querySelector('#categories');
const sectionProducts = document.querySelector('#products');
const description = document.querySelector('#description');
const buttonBuy = document.querySelector('#buy-button');
const price = document.querySelector('#price');
buttonBuy.classList.add('button');

const mainSection = document.createElement('div');
mainSection.classList.add('main-section');
container.prepend(mainSection);
mainSection.append(sectionProducts);

const categorySection = document.createElement('div');
categorySection.append(categoriesList);
container.prepend(categorySection);
const buttonAllOrders = document.createElement('button');
buttonAllOrders.textContent = 'Мої замовлення';
buttonAllOrders.classList.add('button');
categorySection.append(buttonAllOrders);
categorySection.classList.add('category-section')

const listAllOrders = document.createElement('ul');
listAllOrders.classList.add('orders-list')
listAllOrders.classList.add('none');
const listOrdersMessage = document.createElement('p');
listOrdersMessage.textContent = 'Історія замовлень:';
listOrdersMessage.classList.add('none');
categorySection.append(listOrdersMessage, listAllOrders);

sectionProducts.classList.add('hidden');
description.classList.add('hidden');
buttonBuy.classList.add('hidden');

const order = document.querySelector('.order-field');
const form = document.createElement('form');
form.action = '#';
form.method = 'post';
form.classList.add('none');

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

const buttonBackToCatalog = document.createElement('button');
buttonBackToCatalog.textContent = '← Повернутись до каталогу товарів';
categorySection.append(buttonBackToCatalog);
buttonBackToCatalog.classList.add('none');
buttonBackToCatalog.classList.add('button');


form.append(title, labelName, clientName, labelCity, clientCity, labelStock, clientStock, payText,  labelCash, labelCard, labelAmount, amountProduct, buttonOrder );
order.append(form);

const message = document.createElement('p');
message.classList.add('error');
message.classList.add('hidden');
message.textContent = 'Please, fill all fields!';
order.append(message);
const successfulOrder = document.createElement('div');
order.append(successfulOrder);


const orderMessage = document.createElement('p');
orderMessage.classList.add('order-message');
orderMessage.textContent = 'Ваше замовлення успішно прийняте! Деталі замовлення:';
order.append(orderMessage);
const table = document.createElement('table');
orderMessage.classList.add('none');
table.classList.add('none');


let formFields = [form.elements['client-name'], 
                  form.elements['client-city'], 
                  form.elements['client-stock'], 
                  form.elements['payment-method'], 
                  form.elements['amount-product']];

const messageHistoryEmpty = document.createElement('p');
messageHistoryEmpty.classList.add('none');
messageHistoryEmpty.textContent = 'Замовлень немає';
messageHistoryEmpty.classList.add('error');
categorySection.lastElementChild.before(messageHistoryEmpty);




//----------------------------func----------------------------------------

function createListOrders() {
    
    listAllOrders.replaceChildren();
    const dataOrders = JSON.parse(localStorage.getItem('orders')) || [];

    if (dataOrders.length === 0) {
        messageHistoryEmpty.classList.remove('none');
    }

    for (let i = 0; i < dataOrders.length; i++) {

        const orderItem = document.createElement('li');
        orderItem.classList.add('order-item')
        orderItem.innerHTML = `${dataOrders[i].date} ––––– ${dataOrders[i].sum}`;
        const buttonDeleteItem = document.createElement('button');
        buttonDeleteItem.textContent = '❌';
        orderItem.setAttribute('data-order-id', `${i}`);
        buttonDeleteItem.setAttribute('data-id', `${i}`);
        buttonDeleteItem.classList.add('button-delete');
        orderItem.append(buttonDeleteItem);
        listAllOrders.append(orderItem);
        table.classList.add('none');
        description.classList.add('hidden');
        price.classList.add('hidden');
    }
}

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
            form.classList.add('none');
            orderMessage.classList.add('none');
            table.classList.add('none');        
        }
    }
}


function getPurchaseStatus() {
    sectionProducts.classList.add('hidden');
    buttonBuy.classList.add('hidden');
    form.classList.remove('none');
}



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
    newOrder.dateFunc();
    newOrder.productName();
    newOrder.productPrice();

    form.classList.add('none');

    createOrderTable(newOrder);
    order.append(table);
    orderMessage.classList.remove('none');
    addOrder(newOrder);

};

function createOrderTable(obj) {

    table.replaceChildren();
    table.classList.remove('none');

    const tableNames = ['Назва товару' ,'Ціна за 1 одиницю' ,'Імʼя', 'Місто', 'Склад Нової Пошти', 'Спосіб оплати', 'Дата', 'Кількість товару', 'Сума замовлення'];
    let orderObject = Object.values(obj);

    for (let i = 0; i < tableNames.length; i++) {

        const tr = document.createElement('tr');
        const tdName = document.createElement('td');
        const tdValue = document.createElement('td');
        tdName.textContent = tableNames[i];
        tdName.classList.add('table-name');
        tdValue.textContent = orderObject[i];
        tr.append(tdName, tdValue);
        table.append(tr);
    }
};

 

let listOrders;
function addOrder(order) {
    
    if (localStorage.getItem('orders')) {
        listOrders = JSON.parse(localStorage.getItem('orders'));
    } else {
        listOrders = [];
    }

    listOrders.push(order);
    localStorage.setItem('orders', JSON.stringify(listOrders));
}


function Order() {
    this.product = '';
    this.price = '';
    this.name = form.elements['client-name'].value;
    this.city = form.elements['client-city'].value;
    this.stock = form.elements['client-stock'].value;
    this.paymemtMethod = form.elements['payment-method'].value;
    this.date = '';
    this.amountProducts = form.elements['amount-product'].value;
    this.sum = '';
}

Order.prototype.dateFunc = function() {
    let time = new Date();
    this.date = ('0' + time.getDate()).slice(-2) + '.' + ('0' + (time.getMonth() + 1)).slice(-2) + '.' + time.getFullYear() + ' / ' + ('0' + time.getHours()).slice(-2) + ':' + ('0' + (time.getMinutes())).slice(-2);
    return this.date;
}

function showInfo(array, item) {

    for (let obj of array) {

        if (obj.id === item) {

            description.textContent = obj.description;
            price.textContent = `price: ${obj.price}`;
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

            Order.prototype.productName = function() {
                this.product= obj.name;
                return this.product;
            }

            Order.prototype.productPrice = function() {
                this.price = obj.price;
                return this.price;
            }
        }
    }
}



//---------------------listeners--------------------------------------------------

buttonBuy.addEventListener('click', getPurchaseStatus);


buttonBackToCatalog.addEventListener('click', () => {

    categoriesList.classList.remove('none');
    listOrdersMessage.classList.add('none');
    listAllOrders.classList.add('none');
    buttonBackToCatalog.classList.add('none');
    buttonAllOrders.classList.remove('none');
    table.classList.add('none');
    description.classList.add('hidden');
    price.classList.add('hidden');
    messageHistoryEmpty.classList.add('none');
})


buttonAllOrders.addEventListener('click', () => {

    categoriesList.classList.add('none');
    listOrdersMessage.classList.remove('none');
    listAllOrders.classList.remove('none');
    buttonBackToCatalog.classList.remove('none');
    orderMessage.classList.add('none');
    table.classList.add('none'); 
    buttonAllOrders.classList.add('none');
    form.classList.add('none');
    message.classList.add('hidden');
    description.classList.add('hidden');
    price.classList.add('hidden');
    buttonBuy.classList.add('hidden');
    sectionProducts.classList.add('hidden');

    createListOrders();
})



form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    validateForm(formFields); 
});

categoriesList.addEventListener('click', (event) => {

    let selectedCategory = Number(event.target.dataset.categoryId);
    showProducts(products, selectedCategory);
    form.elements['amount-product'].value = '';
    successfulOrder.innerHTML = '';
})


sectionProducts.addEventListener('click', (event) => {

    let selectedProduct = Number(event.target.dataset.productId);
    showInfo(products, selectedProduct);
});


listAllOrders.addEventListener('click', (event) => {
    const dataOrders = JSON.parse(localStorage.getItem('orders'));

    let activeButton = Number(event.target.dataset.id);
    let activeOrderItem =  Number(event.target.dataset.orderId);

    if (activeOrderItem >= 0) {
        getOrderInfo(dataOrders, activeOrderItem, products);
        
    }

    if (activeButton >= 0) {
        deleteOrderItem(dataOrders, activeButton);
    }

});

function deleteOrderItem(array, activeElem) {
    
    for (let i = 0; i < array.length; i++) {  

        if (i === activeElem) {

            array.splice(i, 1);

            if (array.length) {

                localStorage.setItem('orders', JSON.stringify(array));
                createListOrders(); 
                return;
            } 

            localStorage.removeItem('orders'); 
            createListOrders();
        }
    }
}


function getOrderInfo(array, activeElem, arrayProduct) {
    
    for (let i = 0; i < array.length; i++) {

        if (i === activeElem) {
            createOrderTable(array[i]);
            mainSection.prepend(table);
            
            for  (let obj of arrayProduct) {

                if (obj.name === array[i].product && obj.price === array[i].price) {

                    description.innerHTML = `<strong>${obj.name}: </strong> ${obj.description}`;
                    price.textContent = `price: ${obj.price}`;
                    description.classList.remove('hidden');
                    price.classList.remove('hidden');
                }
            }
        }
    }
}


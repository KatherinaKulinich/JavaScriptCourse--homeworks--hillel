// Реалізовуємо форму для реєстрації.

// Поля:

// - Ім'я, Прізвище (Текстові поля)
// - Дата народження (Текстове поле)
// - Стать (radio)
// - Місто (select)
// - Адреса (textarea)
// - Мови, якими володіє (checkbox)
// - Кнопка “Зберегти”

// За натисканням на кнопку замість форми повинна виводитися “таблиця” з даними, які ввів користувач.


//----------html---------------------------------------

const container = document.createElement('div');
const body = document.querySelector('body');
body.append(container);
container.classList.add('container');

const form = document.createElement('form');
form.action = '#';
form.method = 'get';
form.name = 'registration';
const fieldset = document.createElement('fieldset');
const title = document.createElement('legend');
title.textContent = 'Registration form';
container.append(form);
form.append(fieldset);
fieldset.append(title);
fieldset.classList.add('form')


const userName = document.createElement('input');
userName.setAttribute('type', 'text');
userName.setAttribute('name', 'user-name');
userName.setAttribute('id', 'user-name');
userName.setAttribute('placeholder', 'Ivan');

const labelUserName = document.createElement('label');
labelUserName.setAttribute('for', 'user-name');
labelUserName.textContent = 'Enter your name: ';
labelUserName.classList.add('text-input');
fieldset.append(labelUserName);
labelUserName.append(userName);



const userSurname = document.createElement('input');
userSurname.setAttribute('type', 'text');
userSurname.setAttribute('name', 'user-surname');
userSurname.setAttribute('id', 'user-surname');
userSurname.setAttribute('placeholder', 'Ivanov');

const labelUserSurname = document.createElement('label');
labelUserSurname.setAttribute('for', 'user-surname');
labelUserSurname.textContent = 'Enter your surname: ';
labelUserSurname.classList.add('text-input');
fieldset.append(labelUserSurname);
labelUserSurname.append(userSurname);


const textGender = document.createElement('p');
textGender.textContent = 'Enter your gander:';
fieldset.append(textGender);

const userGenderMale = document.createElement('input');
userGenderMale.setAttribute('type', 'radio');
userGenderMale.setAttribute('name', 'user-gender');
userGenderMale.setAttribute('id', 'user-gender-male');
userGenderMale.setAttribute('value', 'male');
const labelMale = document.createElement('label');
labelMale.textContent = 'Male: '
labelMale.setAttribute('for', 'user-gender-male');
labelMale.append(userGenderMale);
fieldset.append(labelMale);


const userGenderFemale = document.createElement('input');
userGenderFemale.setAttribute('type', 'radio');
userGenderFemale.setAttribute('name', 'user-gender');
userGenderFemale.setAttribute('id', 'user-gender-female');
userGenderFemale.setAttribute('value', 'female');
const labelFemale = document.createElement('label');
labelFemale.textContent = 'Female: '
labelFemale.setAttribute('for', 'user-gender-female');
labelFemale.append(userGenderFemale);
fieldset.append(labelFemale);

const genderField = document.createElement('div');
genderField.classList.add('gender-field');
genderField.append(textGender, labelMale, labelFemale);
fieldset.append(genderField);
const genderItems = document.createElement('div');
genderItems.classList.add('gender-items')
genderField.append(genderItems);
genderItems.append(labelMale, labelFemale);


const userCity = document.createElement('select');
userCity.setAttribute('name', 'user-city');
userCity.setAttribute('id', 'user-city');
const labelCity = document.createElement('label');
labelCity.classList.add('text-input');
labelCity.setAttribute('for', 'user-city');
labelCity.textContent = 'Choose your city: '
fieldset.append(labelCity);
labelCity.append(userCity);

const cities = ['', 'Kyiv', 'Kharkiv', 'Odessa', 'Dnipro', 'Donetsk', 'Zaporozhye', 'Lviv',
                'Krivoy Rog', 'Nikolaev', 'Vinnitsa', 'Kherson', 'Poltava', 'Chernihiv'];

for (let city of cities) {
    const option = document.createElement('option');
    option.value = `${city}`;
    option.textContent = `${city}`;
    userCity.append(option);
}


const userAdress = document.createElement('textarea');
userAdress.setAttribute('name', 'user-adress');
userAdress.setAttribute('id', 'user-adress');
const labelAdress = document.createElement('label');
labelAdress.setAttribute('for', 'user-adress');
labelAdress.classList.add('text-input');
labelAdress.textContent = 'Enter your adress: '
fieldset.append(labelAdress);
labelAdress.append(userAdress);


const langText = document.createElement('p');
langText.textContent = 'What the languages you know?'
fieldset.append(langText);

const langField = document.createElement('div');
langField.classList.add('lang-field');
fieldset.append(langField);

const languages = ['english', 'ukrainian', 'russian', 'german', 'spanish', 'chinese'];
for (let lang of languages) {
    const language = document.createElement('input');
    const labelLang = document.createElement('label');
    labelLang.textContent = `${lang}: `
    labelLang.setAttribute('for', `${lang}-language`);
    language.type = 'checkbox';
    language.name = 'user-language';
    language.value = `${lang}`;
    language.id = `${lang}-language`;
    labelLang.append(language);
    langField.append(labelLang);
}

const buttonEnter = document.createElement('button');
buttonEnter.type = 'submit';
buttonEnter.textContent = 'Register me!';
fieldset.append(buttonEnter);


const table = document.createElement('table');
const tableHeader = document.createElement('tr');
table.classList.add('hidden');
container.append(table);
table.append(tableHeader);

const tableNames = ['name', 'surname', 'gender', 'city', 'adress', 'languages'];

for (let item of tableNames) {
    const th = document.createElement('th');
    th.textContent = `${item}`;
    tableHeader.append(th);
}

const buttonReturn = document.createElement('button');
buttonReturn.textContent = 'return / create new user';
buttonReturn.classList.add('hidden');
buttonEnter.type = 'button';
container.append(buttonReturn);


const buttonReset = document.createElement('button');
buttonReset.textContent = 'reset';
buttonReset.setAttribute('id', 'reset');
buttonEnter.type = 'button';
fieldset.append(buttonReset);

//-------------------------------------------------------------------
const message = document.createElement('p');
message.classList.add('error');



function NewUser() {
    this.name = form.elements['user-name'].value;
    this.surname = form.elements['user-surname'].value;
    this.gender = form.elements['user-gender'].value;
    this. city = form.elements['user-city'].value;
    this.adress = form.elements['user-adress'].value;
    this.lang = valuesCheckbox;
}

const users = [];

function createTable(array) {
    message.remove();
    let lastElem = array[array.length - 1];

    if (lastElem) {
        const tr = document.createElement('tr');
        table.append(tr);
        let values = Object.values(lastElem) ;

        for (let value of values) {
            
            const td = document.createElement('td');
            td.textContent = `${value}`;
            tr.append(td);
            table.classList.remove('hidden');
            buttonReturn.classList.remove('hidden');
            form.classList.add('hidden');
        }
    }  
}


let valuesCheckbox = [];

let values = [form.elements['user-name'], form.elements['user-surname'], form.elements['user-gender'], form.elements['user-city'], form.elements['user-adress']];


buttonEnter.addEventListener('click', (event) => {
    event.preventDefault();
    valuesCheckbox = [];


    let checkboxes = document.querySelectorAll(`input[name="user-language"]:checked`);
    checkboxes.forEach((checkbox) => {
        valuesCheckbox.push(checkbox.value);
    });
    
    for (let child of values) {
        
        if (child.value === '' || checkboxes.length === 0) {

            message.textContent = `Enter all fields!!! Select at least one language.`;
            container.append(message);
            return;
        }   
    }   

    const user = new NewUser();
    users.push(user);
    createTable(users); 
 
});

function resetData() {

    form.elements['user-name'].value = '';
    form.elements['user-surname'].value = '';
    form.elements['user-city'].value = '';
    form.elements['user-adress'].value = '';
    let checkboxes = document.querySelectorAll(`input[name="user-language"]:checked`);
    checkboxes.forEach((checkbox) => checkbox.checked = false);
}


buttonReturn.addEventListener('click', () => {
    table.classList.add('hidden');
    buttonReturn.classList.add('hidden');
    form.classList.remove('hidden');

    resetData();
});

buttonReset.addEventListener('click', (event) => {
    event.preventDefault();

    resetData();
})









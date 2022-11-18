/* На сторінці інпут та кнопка.

При натисканні на кнопку - переходимо за посиланням, яке введено у інпут.

Також треба реалізувати перевірку введеного значення, чи вказаний протокол http/https.

Якщо протокол не вказаний - додаємо https */


const input = document.querySelector('#url');
const button = document.querySelector('button');
const container = document.querySelector('.container');

const form = document.createElement('form');
form.setAttribute('method', 'get');
container.append(form);
form.append(input, button);



const textWarning = document.createElement('p');
textWarning.setAttribute('class', 'hidden');
textWarning.textContent = 'Empty value! Try write down it again';
textWarning.style.color = 'red';
const wrapper = document.querySelector('.wrapper');
wrapper.append(textWarning);



function sendForm(event) {
    
    let val = input.value;

    if (val === '') {
        event.preventDefault();
        textWarning.classList.remove('hidden');
        return;
    }
    
    textWarning.classList.add('hidden');

    if (!val.includes('http://') && !val.includes('https://')) {
        event.preventDefault();
        input.value = 'https://'.concat(val);
        return;
    }
    window.open(input.value);
    return;
}


button.addEventListener('click', sendForm);


//У папці img є зображення собак. 
//При кожному завантаженні сторінки повинно виводитися випадково обране зображення.



const images = [
    './images/dog1.jpeg',
    './images/dog2.jpeg',
    './images/dog3.jpeg',
    './images/dog4.jpeg',
    './images/dog5.jpeg',
    './images/dog6.jpeg',
];

const image = document.querySelector('img');

for (let i = 0; i <= images.length; i++) {

    const randomUrl = Math.floor(Math.random() * images.length) + 1;

    image.setAttribute('src', `./images/dog${randomUrl}.jpeg`);
    image.setAttribute('alt', `dog${randomUrl}`)
}
/* 
На сторінці є зображення та кнопки Next, Prev з боків від зображення.

При кліку на Next - показуємо наступне зображення.
При кліку на Prev - попереднє.

При досягненні останнього зображення - ховати кнопку Next.
Аналогічно з першим зображенням і кнопкою Prev.  */




const images = [
    './images/dog2.jpeg',
    './images/dog3.jpeg',
    './images/dog4.jpeg',
    './images/dog5.jpeg',
    './images/dog6.jpeg',
];

const image = document.querySelector('img');
const buttonPrev = document.getElementById('btn-prev');
const buttonNext = document.getElementById('btn-next');


let sliderNumber = 1;
buttonPrev.classList.add('hidden');


buttonNext.addEventListener('click', () => {

    sliderNumber++;
    image.setAttribute('src', `./images/dog${sliderNumber}.jpeg`);
    image.setAttribute('alt', `dog${sliderNumber}`);
    buttonPrev.classList.remove('hidden');
    
    if (sliderNumber <= images.length) {
        
        image.setAttribute('src', `./images/dog${sliderNumber}.jpeg`);
        image.setAttribute('alt', `dog${sliderNumber}`);
        return;
    }
    
    if (sliderNumber === 6) {
        
        buttonNext.classList.add('hidden');
        return;
    }  

});

buttonPrev.addEventListener('click', () => {

    sliderNumber--;
    image.setAttribute('src', `./images/dog${sliderNumber}.jpeg`)
    image.setAttribute('alt', `dog${sliderNumber}`)
    buttonNext.classList.remove('hidden');
    
    if (sliderNumber > 1) {
        
        image.setAttribute('src', `./images/dog${sliderNumber}.jpeg`)
        image.setAttribute('alt', `dog${sliderNumber}`);
        return;
    }

    if (sliderNumber === 1) {

        buttonPrev.classList.add('hidden');
        return;
    }

});














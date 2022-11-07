//Є текстове поле на сторінці. Під час фокусування на цьому полі збоку з'являється <div>. 
//При пропажі фокусу - <div> так само пропадає

const input = document.querySelector('.input');
const ghost = document.querySelector('.ghost');



input.addEventListener("focus", () => {

    ghost.classList.toggle('visible');
    ghost.classList.toggle('notVisible');

});


input.addEventListener("blur", () => {

    ghost.classList.toggle('notVisible');
    ghost.classList.toggle('visible');

});
    

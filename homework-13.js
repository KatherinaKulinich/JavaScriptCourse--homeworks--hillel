// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
// Результат: [1, 2, 3, 4, 6, 7]


const arrayTest = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item) {
    for (let i = 0; i <= array.length; i++) {
        let index = array.indexOf(item);
        if (index !== -1) {
            array.splice(index, 1);
        } 
    }
}
removeElement(arrayTest, 5);
console.log(arrayTest);
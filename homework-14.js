//Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length



function generateKey(length, characters) {
    let arrayCharacters = Array.from(characters);
    let newArray = [];

    for (let k = 0; k < length; k++) {
        let randomIndex = Math.floor(Math.random() * (arrayCharacters.length + 1) );
        newArray.push(arrayCharacters[randomIndex]);
    }    
    return newArray.join('');
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters); 

console.log(key);
    
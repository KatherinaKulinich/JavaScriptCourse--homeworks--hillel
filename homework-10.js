let arrayUser = [];
arrayUser.length = +prompt('enter the length of array');

for (let i = 0; i < arrayUser.length; i++) {
    arrayUser[i] = prompt(`enter the ${i} element to the array`);     
}

alert(`your array: [${arrayUser}]`);
alert(`sort array: [${arrayUser.sort((a, b) => a - b)}]`);
alert(`deleted elements: ${arrayUser.splice(1, 3)}`);
alert(`new array: [${arrayUser}]`);


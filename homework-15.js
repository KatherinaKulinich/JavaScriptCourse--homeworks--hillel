// Дан масив з елементами різних типів. 
//Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.


let arrayRandom = [2, 'hello', 6, 10, 'qwerty', {a: 100}, 5, 34, 22, 'array', 7, 10, 24, 'weather', 6, {name: 'Kate'}, 10] ;

function calcAverage (result)  {
    for (let i = 0; i <= result.length; i++) {
        let sum = result.reduce(function(a,b) {
            return a + b;
        });
        let resultCalc = sum / result.length;
        return resultCalc;
    }
}
function isNumber(array) {
    for (let i of array) {
        let arrayNumber = array.filter(i => +i);
        return arrayNumber;
    }
}
console.log(isNumber(arrayRandom));
console.log(calcAverage(isNumber(arrayRandom)));




//Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. 
//У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
//Вивести результат математичної дії, вказаної в змінній znak.
//Обидва числа і знак виходять від користувача.

function doMath (x, y, znak) {
    let result = '';
    if (znak === '-') {
        result = `${x} ${znak} ${y} = ${x - y}`;
        return result;
    } else if (znak === '+') {
        result = `${x} ${znak} ${y} = ${x + y}`;
        return result;
    } else if (znak === '*') {
        result = `${x} ${znak} ${y} = ${x * y}`;
        return result;
    } else if (znak === '/') {
        result = `${x} ${znak} ${y} = ${x / y}`;
        return result;
    } else if (znak === '%') {
        result = `${x} ${znak} ${y} =  ${x % y} - modulo`;
        return result;
    } else if (znak === '^') {
        result = `${x} ${znak} ${y} =  ${Math.pow(x,y)}`;
        return result;
    } else {
        alert('error!');
    }
}
alert(doMath(+prompt('enter the first number (x):'), +prompt('enter the second number (y):'), prompt('choose the action (+, -, *, /, %, ^):')))




//Написати функцію заповнення даними користувача двомірного масиву. 
//Довжину основного масиву і внутрішніх масивів задає користувач. 
//Значення всіх елементів всіх масивів задає користувач.

function userArray(mainArrayLength, subArrayLength) {
    let resultArrayMain = [];
    for (let i = 0; i < mainArrayLength; i++) {
        let resultArraySub = [];
        for (let j = 0; j < subArrayLength; j++) {
            resultArraySub.push(prompt(`enter ${j} item to array ${i}`));
        }
        resultArrayMain.push(resultArraySub);
    }
    return resultArrayMain;
}
console.log(userArray(prompt('enter the length of main array'), prompt('enter the length of secondary array')));





//Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
//'func(" hello world", ['l', 'd'])' поверне нам "heo wor". 
//Вихідний рядок та символи для видалення задає користувач


function deleteSymbol(string, symbol) {
    let arrayString = Array.from(string);
    let arraySymbol = Array.from(symbol);
    for (let i = 0; i < arraySymbol.length; i++) {
        for (let j = 0; j < string.length; j++) {
            if (arraySymbol[i] == string[j]) {
                arrayString.splice(arrayString.indexOf(arraySymbol[i]), 1);
            }
        }
    }
    return arrayString.join('');
}
console.log(deleteSymbol(prompt('enter the string'), prompt('enter some symbols to delete')));
const testArray = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

//позитивні елементи:

let resultPositive = 0;
let positiveArray = [];

for (let i = 0; i <= testArray.length; i++) {
    if (testArray[i] > 0) {  
        resultPositive += testArray[i];
        positiveArray.push(testArray[i]);   
    }  
}
console.log(resultPositive);                        // сума позитивних елементів
// console.log(positiveArray);
console.log(positiveArray.length);                  // кількість позитивних елементів

let resultMultPositive = positiveArray.reduce(function(a,b) {
    return a * b;
})
console.log(resultMultPositive);                          //добуток позитивних елементів


let evenPositiveArr = [];
let unevenPositiveArr = [];

evenPositiveArr = positiveArray.filter(j => j % 2 == 0);
unevenPositiveArr = positiveArray.filter(j => j % 2 != 0);

console.log(evenPositiveArr.length);                //кількість парних позитивних елементів
console.log(unevenPositiveArr.length);               //кількість непарних позитивних елементів

let resultSumEven = evenPositiveArr.reduce(function(a,b) {
    return a + b;
})
console.log(resultSumEven);                          //сумa парних позитивних елементів

let resultSumUneven = unevenPositiveArr.reduce(function(a,b) {
    return a + b;
})
console.log(resultSumUneven);                          //сумa непарних позитивних елементів




// min, max елементи:

let resultMin = 0;
let resultMax = 0;

for (value of testArray) {
    if (value < resultMin) {
        resultMin = value;
    } 
}
console.log(resultMin);                     //мінімальний елемент масиву

for (value of testArray) {
    if (value > resultMax) {
        resultMax = value;
    } 
}
console.log(resultMax);                     //максимальний елемент масиву

let posMin = testArray.indexOf(resultMin);
console.log(posMin);                        // порядковий номер min 
let posMax = testArray.indexOf(resultMax);
console.log(posMax);                        // порядковий номер max




// Знайти найбільший серед елементів масиву, ост альні обнулити:

// testArray.fill(0);
// testArray.push(resultMax);
// console.warn(testArray);

for (let i = 0; i < testArray.length; i++) {
    if (testArray[i] !== resultMax) {
        testArray[i] = 0;
    }
}
console.warn(testArray);

// let zeroArr = [];

// for (let val of testArray) {
//     if (val != resultMax) {
//         zeroArr = testArray.map((val) => 0);
//         zeroArr.push(resultMax);
//     }
// }
// console.log(zeroArr);                        



// кількість негативних елементів:

const negativeArray = [];

for (let i = 0; i <= testArray.length; i++) {
    if (testArray[i] < 0) {  
        negativeArray.push(testArray[i]);
    }  
}
console.log(negativeArray.length);          

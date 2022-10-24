function firstFunction () {

    let result = 0;

    function secondFunction(value) {
        result = result + value;
        return result;
    }
    return secondFunction;
}

let calc = firstFunction();



console.warn(calc(3));
console.warn(calc(5));
console.warn(calc(20));


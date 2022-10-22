function pow(num, degree) {
    if (degree === 1) {
        return num;
    } else {
        return num * pow(num, degree - 1)
    }
}

let result = pow(2,3);
console.log(result);

// let result1 = pow(4,5);
// console.log(result1);
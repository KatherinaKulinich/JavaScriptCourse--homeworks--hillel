function pow(num, degree) {
    
    if (degree === 0) {
        return 1;
    } else {
        return num * pow(num, degree - 1)
    }
}

let result = pow(2,3);
console.log(result);

// let result1 = pow(4,5);
// console.log(result1);

// let result3 = pow(2,1);
// console.warn(result3);
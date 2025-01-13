function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num);
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); 
console.log(sumArray([10, 20, 30])); 
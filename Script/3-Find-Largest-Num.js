function findLargestNumber(array) {
    return Math.max(...array);
}

console.log(findLargestNumber([1, 5, 2, 9, 3]));
console.log(findLargestNumber([-1, -5, -2]));
console.log(findLargestNumber([100, 45, 32, 89]));

function biggerHalf(number) {
    number.sort((a, b) => a - b);
    let res = Math.floor(number.length / 2);
    let result = number.slice(res);
    return result;
}
console.log(biggerHalf([4, 7, 2, 5]))
// [5, 7]

//biggerHalf([3, 19, 14, 7, 2, 19, 6])
// [7, 14, 19, 19
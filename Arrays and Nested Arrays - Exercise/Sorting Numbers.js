function sortingNumbers(number) {
    let sortedNumber = number.sort((a,b) => a - b);
    //console.log(sortedNumber);
    let result = [];

    while(sortedNumber.length !== 0){
        result.push(sortedNumber.shift());
        result.push(sortedNumber.pop());
    }
    return result;
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))
// [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]

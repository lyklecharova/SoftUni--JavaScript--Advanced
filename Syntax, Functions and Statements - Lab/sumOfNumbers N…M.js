function sumOfNumbers(first, second) {
    let firstNum = Number(first);
    let secondNum = Number(second);
    let result = 0;
    for (let i = firstNum; i <= secondNum; i++) {
        result+=i;
    }
    return result;
}
console.log(sumOfNumbers('1', '5'));
//15

// console,log(sumOfNumbers('-8', '20'));
// 174
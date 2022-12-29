function smallestTwoNumbers(number) {
    let result = number.sort((a, b) => a - b)
        .slice(0, 2)
        .join(" ");
    console.log(result);
}
smallestTwoNumbers([30, 15, 50, 5])
// 5 15

smallestTwoNumbers([3, 0, 10, 4, 7, 3])
// 0 3
function processOddPosition(number) {
    let result = number
        .filter((num, i) => i % 2 == 1)
        .map(x => x * 2)
        .reverse()
        .join(" ");
    console.log(result);
}
processOddPosition([10, 15, 20, 25])
// 50 30

processOddPosition([3, 0, 10, 4, 7, 3])
// 6 8 0
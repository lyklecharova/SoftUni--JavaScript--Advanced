function sumFirstLast(input) {
    let first = Number(input.shift());
    let second = Number(input.pop());

    let result = first + second;
    console.log(result);

}
sumFirstLast(['20', '30', '40'])
// 60

sumFirstLast(['5', '10'])
// 15
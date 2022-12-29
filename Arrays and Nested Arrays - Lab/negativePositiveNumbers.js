function negativePositiveNumber(number) {
    let element = [];

    for (let i = 0; i < number.length; i++) {
        if (number[i] < 0) {
            element.unshift(number[i]);
        } else {
            element.push(number[i]);
        }

    }
    console.log(element.join('\n'));

}
negativePositiveNumber([7, -2, 8, 9])
// -2 7 8 9

negativePositiveNumber([3, -2, 0, -1])
// -1 -2 3 0
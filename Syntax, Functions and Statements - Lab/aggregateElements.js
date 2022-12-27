function aggregateElement(input) {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum += input[i];
    }
    console.log(sum);
    let sumInverse = 0;
    for (let i = 0; i < input.length; i++) {
        sumInverse += 1 / input[i];
    }
    console.log(sumInverse);
    let concatenatesString = '';
    for (let i = 0; i < input.length; i++) {
        concatenatesString += input[i];
    }
    console.log(concatenatesString);
}
aggregateElement([1, 2, 3])
//6 1.8333 123
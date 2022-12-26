function circleArea(input) {
    let resultNumber;
    resultNumber = typeof (input);
    if (resultNumber === 'number') {
        resultNumber = Math.pow(input, 2) * Math.PI;
        console.log(resultNumber.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${resultNumber}.`);
    }

}
//circleArea(5)
//78.54

circleArea('name')
//We can not calculate the circle area, because we receive a string.
function stringLength(first, second, third) {
    let sumOfLength = (first + second + third).length;
    console.log(sumOfLength);
    let averageLengt = Math.round(sumOfLength / 3);
    console.log(averageLengt);

}
stringLength('chocolate', 'ice cream', 'cake')
//22 7
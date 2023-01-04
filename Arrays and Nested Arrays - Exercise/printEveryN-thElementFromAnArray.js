function printEveryNthElementFromAnArray(input, number) {
    let result = [];
    for (let i = 0; i < input.length; i += number) {
        result.push(input[i]);

    }
    return result;
}
//console.log(printEveryNthElementFromAnArray(['5','20','31','4','20'],2))
// ['5', '31', '20']

//console.log(printEveryNthElementFromAnArray(['dsa', 'asd', 'test', 'tset'],2))
// ['dsa', 'test']

console.log(printEveryNthElementFromAnArray(['1', '2', '3', '4', '5'], 6))
// ['1']
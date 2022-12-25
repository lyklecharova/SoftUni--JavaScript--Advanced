function mathOperators(first, second, operator) {
    let res;
    switch (operator) {
        case '+':
            res = first + second;
            break;
        case '-':
            res = first - second;
            break;
        case '*':
            res = first * second;
            break;
        case '/':
            res = first / second;
            break;
        case '\\':
            res = first / second;
            break;
        case '%':
            res = first % second;
            break;
        case '**':
            res = first ** second;
            break;
    }
    console.log(res);
}
mathOperators(5, 6, '+')
//11

 //mathOperators(3, 5.5, '*')
// 16.5
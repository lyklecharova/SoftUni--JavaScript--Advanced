function sameNumbers(number) {
    let isSame = true;
    let sum = 0;
    number = String(number);
    let firstDigit = number[0];

    for (let i = 0; i < number.length; i++) {
        sum += Number(number[i]);
    }

    for (let i = 1; i < number.length; i++) {
        let currentDigit = number[i];
        if (firstDigit !== currentDigit) {
            isSame = false;
            break;
        }
    }

    console.log(isSame);
    console.log(sum);;
}

sameNumbers(2222222)
//true 14
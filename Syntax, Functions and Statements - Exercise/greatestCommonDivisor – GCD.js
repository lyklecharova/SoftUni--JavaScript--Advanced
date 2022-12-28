function greatestCommonDivisorGCD(firstNumber, secondNumber) {
    // if ((typeof firstNumber !== 'number') || (typeof secondNumber !== 'number'))
    //     return false;
    // firstNumber = Math.abs(firstNumber);
    // secondNumber = Math.abs(secondNumber);
    // while (secondNumber) {
    //     let t = secondNumber;
    //     secondNumber = firstNumber % secondNumber;
    //     firstNumber = t;
    // }
    // return firstNumber;
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    while(firstNumber !==  secondNumber){
        if(firstNumber > secondNumber){
            firstNumber -= secondNumber;
        }else{
            secondNumber-= firstNumber;
        }
    }
    console.log(firstNumber);
}
greatestCommonDivisorGCD(15, 5)
//5
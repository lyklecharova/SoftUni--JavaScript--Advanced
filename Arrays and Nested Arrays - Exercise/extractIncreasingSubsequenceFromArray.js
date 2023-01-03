function extractIncreasingSubsequenceFromArray(number) {
    let result = [];
    let biggestNumber = 0;
    for (let i = 0; i < number.length; i++) {
        if(number[i] > biggestNumber){
            biggestNumber = number[i];
           result.push(biggestNumber);
            
        }
    }
    return result;
}
//console.log(extractIncreasingSubsequenceFromArray([1,3,8,4,10, 12, 3, 2, 24]))
//[1, 3, 8, 10, 12, 24

console.log(extractIncreasingSubsequenceFromArray([1, 2, 3, 4]))

console.log(extractIncreasingSubsequenceFromArray([20, 3, 2, 15, 6, 1]))
// [20]
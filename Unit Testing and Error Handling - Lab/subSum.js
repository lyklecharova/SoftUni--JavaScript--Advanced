function subSum(array, start, end) {

    if (!Array.isArray(array)) {     // Array.isArray() return boolean variable  (true of false)
        return NaN;
    }
    let startIndex = Math.max(start, 0);
    let endIndex = Math.min(end, array.length - 1);

    let subNumbers = array.slice(startIndex, endIndex + 1);
    let sum = subNumbers.reduce((a, x) => a + Number(x), 0);
    return sum;
}
console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300)) // 150
// subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1) // 3.3
// subSum([10, 'twenty', 30, 40], 0, 2) // NaN
// subSum([], 1, 2) // 0
// subSum('text', 0, 2) // NaN

// function test(){
//     //Arrange
//     let expectedSum = 150; 
//     let number = [10, 20, 30, 40, 50, 60];
//     let stratIndex = 3;
//     let endIndex = 300;

//     //Acct
//     let actualSum = subSum(number,stratIndex,endIndex);

//     //Assert 

//     if(actualSum === expectedSum) {
//         console.log('correct');
//     }else{
//         console.log('Error');
//     } 
// }
// test()
function diagonalSums(input) {
    let firstDiagonal = 0;
    let secondaryDiagonals = 0;
    let firstIndex = 0;
    let secondaryIndex = input[0].length - 1;
    input.forEach(element => {
        firstDiagonal += element[firstIndex++];
        secondaryDiagonals += element[secondaryIndex--];
    });
    console.log(firstDiagonal + ' ' + secondaryDiagonals);

}
diagonalSums([[20, 40], [10, 60]])
// 80 50

//diagonalSums([[3, 5, 17],[-1, 7, 14], [1, -8, 89]])
// 99 25
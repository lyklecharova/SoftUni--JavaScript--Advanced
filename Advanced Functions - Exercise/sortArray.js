function sortAnArray(array, string) {
    if (string === 'asc') {
        array.sort((a, b) => a - b);
    } else {
        array.sort((a, b) => b - a);
    };
    return array;

}
console.log(sortAnArray([14, 7, 17, 6, 8], 'asc')); // [6, 7, 8, 14, 17]
console.log(sortAnArray([14, 7, 17, 6, 8], 'desc')); // [17, 14, 8, 7, 6]
function lastKNumbersSequence(n, k) {
    let sum = 0;
    for(let i = 0; i < n.length; i++) {
        sum += n[i];
       
    }
    console.log(sum);

}
lastKNumbersSequence(6, 3)
// [1, 1, 2, 4, 7, 13]

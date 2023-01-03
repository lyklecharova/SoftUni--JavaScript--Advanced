function rotateArray(input, number) {
    let lInput = input.length;
    for (let i = 0; i < number; i++) {
        let el = input.splice(lInput - 1, 1);
        input.unshift(el[0]);
        el = []
        
    }
    console.log(input.join(' '));

}
rotateArray(['1', '2', '3', '4'], 2)
// 3 4 1 2

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15)
// Orange Coconut Apple Banana
function cookingByNumber(number, chop, dice,
    spice, bake, fillet) {
    number = Number(number);
    let action = [chop, dice,
        spice, bake, fillet];
    for (let i = 0; i < action.length; i++) {
        if (action[i] === 'chop') {
            number /= 2;
        } else if (action[i] === 'dice') {
            number = Math.sqrt(number);
        } else if (action[i] === 'spice') {
            number += 1;
        } else if (action[i] === 'bake') {
            number *= 3;
        } else if (action[i] === 'fillet') {
            number *= 0.8;
        }
        console.log(number);
    }
}
cookingByNumber('32', 'chop', 'chop', 'chop', 'chop',

    'chop')
//16 8 4 2 1
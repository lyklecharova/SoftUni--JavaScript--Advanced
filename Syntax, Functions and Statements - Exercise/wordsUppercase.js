function wordsUpperCase(input) {
    let pattern = /\w+/gm;
    let result = input.match(pattern);
    console.log(result.join(', ').toUpperCase());

}
wordsUpperCase('Hi, how are you?')
// HI, HOW, ARE, YOU

wordsUpperCase('hello')
// HELLO
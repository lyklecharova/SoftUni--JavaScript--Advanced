function addAndRemoveElement(input) {
    let initialNumber = 1;
    let result = [];
    for (let command of input) {
        if (command === 'add') {
            result.push(initialNumber);
        } else if (command === 'remove') {
            result.pop();
        }
        initialNumber++;

    }
    if (result.length === 0) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));
    }
}
addAndRemoveElement(['add',

    'add',

    'add',

    'add'])
//1 2 3 4
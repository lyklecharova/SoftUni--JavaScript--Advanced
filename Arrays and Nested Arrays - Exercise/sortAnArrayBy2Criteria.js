function sortAnArrayBy2Cria(input) {
    let sorted = input.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(sorted.join(' \n'));
}
sortAnArrayBy2Cria(['alpha', 'beta', 'gamma'])
// beta alpha gama

sortAnArrayBy2Cria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])
// Jack Isacc George Theodor Harrison

sortAnArrayBy2Cria(['test', 'Deny', 'omen', 'Default'])
// Deny omen test Default

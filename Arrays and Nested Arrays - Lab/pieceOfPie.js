function pieceOfPie(pies, startFlavor, endFlavor) {
    const start = pies.indexOf(startFlavor);
    const end = pies.indexOf(endFlavor) + 1;
    const result = pies.slice(start, end);
    return result;
}  
console.log(pieceOfPie(['Pumpkin Pie',

'Key Lime Pie',

'Cherry Pie',

'Lemon Meringue Pie',

'Sugar Cream Pie'],

'Key Lime Pie',

'Lemon Meringue Pie'))

// ['Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie'

//console.log(pieceOfPie(['Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie'], 'Pot Pie', 'Smoked Fish Pie'));
// ['Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie']
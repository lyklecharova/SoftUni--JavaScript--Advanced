function storeCatalogue(input) {
    let catalogueObj = {};

    for (const delimiter of input) {
        let [product, price] = delimiter.split(' : ');
        price = Number(price);
        catalogueObj[product] = price;
    }
    let sorted = Object.entries(catalogueObj).sort((a, b) => a[0].localeCompare(b[0]));
    let capitalLetter = [];
    // if (catalogueObj.product !== capitalLetter) {
    //      capitalLetter = catalogueObj.product;
    //     console.log(capitalLetter);
    // }
    // for (let [product, price] of sorted) {
    //     let counter = 0;
    //     capitalLetter = product.toUpperCase();
    //     console.log(`${product}: ${price}`);
    // }
    for (let [product, price] of sorted) {

        if (capitalLetter.includes(product[0])) {

        } else {
            capitalLetter.push(product[0]);
        }
        //console.log(`${product}: ${price}`);
    }
    for (let i = 0; i < capitalLetter.length; i++) {
        console.log(capitalLetter[i]);
        for (let [product, price] of sorted) {
            if (product[0] === capitalLetter[i]) {
                console.log(`${product}: ${price}`);
            }

        }
    }
}
storeCatalogue(['Appricot : 20.4', 'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)
// A
// Anti-Bug Spray: 15
// Apple: 1.25
// Appricot: 20.4
// B
// Boiler: 300
// D
// Deodorant: 10
// F
// Fridge: 1500
// T
// T-Shirt: 10
// TV: 1499
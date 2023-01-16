function lowestPriceInCities(input) {
    let productObj = {};
    for (let delimiter of input) {
        let [town, product, price] = delimiter.split(' | ');
        price = Number(price);
        if (!productObj.hasOwnProperty(product)) {
            productObj[product] = { town, price };
        } else {
            if (productObj[product].price > price) {
                productObj[product] = { town, price };
            }
        }
    }

    for (let [productInfo, description] of Object.entries(productObj)) {
        console.log(`${productInfo} -> ${description.price} (${description.town})`);
    }

}
lowestPriceInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
)
// Sample Product -> 1000 (Sample Town)
// Orange -> 2 (Sample Town)
// Peach -> 1 (Sample Town)
// Burger -> 10 (New York)

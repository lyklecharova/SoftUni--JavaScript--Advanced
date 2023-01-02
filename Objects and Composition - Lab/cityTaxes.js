function cityTaxes(name, population, treasury) {
    population = Number(population);
    let city = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            percentage /= 100;
            this.population *= percentage + 1;
        },
        applyRecession(percentage) {
            percentage /= 100;
            this.treasury *= 1 - percentage;;
        },

    }
    return city;
}

//const city = cityTaxes('Tortuga',7000,5000);
//console.log(city);
// { name: 'Tortuga', population: 7000, treasury: 15000, taxRate: 10, collectTaxes: [Function: collectTaxes], applyGrowth: [Function: applyGrowth], applyRecession: [Function: applyRecession] }


const city = cityTaxes('Tortuga', 7000, 15000);

city.collectTaxes();

console.log(city.treasury);

city.applyGrowth(5);

console.log(city.population);
// 85000 7350
function townPopulation(input) {
    let townObj = {};

    for (let nameTown of input) {
        let [town, population] = nameTown.split(' <-> ');
        if (!townObj.hasOwnProperty(town)) {
            townObj[town] = 0;

        }
        townObj[town] += Number(population);
    }
    for (let town in townObj) {
        console.log(`${town} : ${townObj[town]}`);
    }
}
townPopulation(['Sofia <-> 1200000',

    'Montana <-> 20000',

    'New York <-> 10000000',

    'Washington <-> 2345000',

    'Las Vegas <-> 1000000'])
// Sofia : 1200000 Montana : 20000 New York : 10000000 Washington : 2345000 Las Vegas : 1000000

townPopulation(['Istanbul <-> 100000',

    'Honk Kong <-> 2100004',

    'Jerusalem <-> 2352344',

    'Mexico City <-> 23401925',

    'Istanbul <-> 1000'])
// Istanbul : 101000 Honk Kong : 2100004 Jerusalem : 2352344 Mexico City : 23401925
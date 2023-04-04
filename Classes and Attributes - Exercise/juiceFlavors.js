function juiceFlavors(arr) {

    const juices = {};
    const juiceBottles = {};

    for (let line of arr) {
        let [juiceName, juiceQuantity] = line.split(" => ");
        if (!juices.hasOwnProperty(juiceName)) {
            juices[juiceName] = 0;
        }
        juices[juiceName] += Number(juiceQuantity);

        if (juices[juiceName] >= 1000) {
            let numberOfBottles = Math.floor(juices[juiceName] / 1000);
            if (!juiceBottles.hasOwnProperty(juiceName)) {
                juiceBottles[juiceName] = 0;
            }
            juiceBottles[juiceName] += numberOfBottles;
            juices[juiceName] -= numberOfBottles * 1000;
        }
    }

    Object.entries(juiceBottles)
        .forEach((juiceBottle) =>
            console.log(`${juiceBottle[0]} => ${juiceBottle[1]}`)
        );

}
juiceFlavors([
    "Kiwi => 234",

    "Pear => 2345",

    "Watermelon => 3456",

    "Kiwi => 4567",

    "Pear => 5678",

    "Watermelon => 6789",
])
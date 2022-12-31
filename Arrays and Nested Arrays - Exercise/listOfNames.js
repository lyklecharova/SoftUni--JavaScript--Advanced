function listOfNames(input) {
    let sortedName = input.sort((a, b) => a.localeCompare(b));
    let result = 1;
    sortedName.forEach(element => {
        console.log(`${result}.${element}`);
        result++;
    });
}
listOfNames(["John",
    "Bob",
    "Christina",
    "Ema"])
// 1.Bob 2.Christina 3.Ema 4.John
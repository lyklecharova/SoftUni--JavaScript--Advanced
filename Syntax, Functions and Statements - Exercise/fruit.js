function fruit(fruit, weigh, price) {
    let money = (weigh / 1000) * price;
    console.log(`I need $${money.toFixed(2)} to buy ${(weigh / 1000).toFixed(2)} kilograms ${fruit}.`);
}
fruit('orange', 2500, 1.80)
//I need $4.50 to buy 2.50 kilograms orange.
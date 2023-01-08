function calorieObject(input) {
    let calorieObj = {};
    for (let i = 0; i < input.length; i += 2) {
        let nameOfFood = input[i];
        let productCalories = Number(input[i + 1]);
        calorieObj[nameOfFood] = productCalories;
    }
    console.log(calorieObj);

}
calorieObject(['Yoghurt', '48', 'Rise', '138',

    'Apple', '52']);
// { Yoghurt: 48, Rise: 138, Apple: 52 }

calorieObject(['Potato', '93', 'Skyr', '63',

    'Cucumber', '18', 'Milk', '42'])
// { Potato: 93, Skyr: 63, Cucumber: 18, Milk: 42 }
class Circle {
    constructor(radius) {
        this.radius = radius;
    };
    get diameter() {
        return this.radius * 2;
    };

    set diameter(value) {
        return this.radius = value / 2;
    }

    get area() {
        return Math.PI * this.radius * this.radius;
    }
}
let c = new Circle(2);

console.log(`Radius: ${c.radius}`);

console.log(`Diameter: ${c.diameter}`);

console.log(`Area: ${c.area}`);

c.diameter = 1.6;

console.log(`Radius: ${c.radius}`);

console.log(`Diameter: ${c.diameter}`);

console.log(`Area: ${c.area}`);

//Radius: 2
//Diameter: 4
//Area: 12.566370614359172
//Radius: 0.8
//Diameter: 1.6
//Area: 2.0106192982974678
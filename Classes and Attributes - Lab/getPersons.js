function getPerson() {
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        };
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }
    let person = [];
    let person1 = new Person("Anna", "Simpson", 22, "anna@yahoo.com");
    person.push(person1);

    let person2 = new Person("SoftUni");
    person.push(person2);

    let person3 = new Person("Stephan", "Johnson", 25);
    person.push(person3);

    let person4 = new Person("Gabriel", "Peterson", 24, "g.p@gmail.com");
    person.push(person4);

    return person;


}


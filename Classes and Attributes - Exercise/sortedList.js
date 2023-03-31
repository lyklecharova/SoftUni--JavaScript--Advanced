class List {
    constructor() {
        this.numbers = [];
        this.size = this.numbers.length;
    }

    add(element) {
        this.numbers.push(element);
        this.size++;
        return this.numbers.sort((a, b) => a - b);
    };

    remove(index) {
        if (index >= 0 && index < this.numbers.length) {
            this.numbers.splice(index, 1);
            this.size--;
        } else {

        }
    };

    get(index) {
        if (index >= 0 && index < this.numbers.length) {
            return this.numbers[index];
        } else {

        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));

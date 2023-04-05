class RefurbishedSmartphones {
    constructor(retailer) {
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
        this.revenue = 0;
    }

    addSmartphone(model, storage, price, condition) {
        if (
            typeof model !== "string" ||
            model.length === 0 ||
            typeof storage !== "number" ||
            storage <= 0 ||
            typeof price !== "number" ||
            price <= 0 ||
            typeof condition !== "string" ||
            condition.length === 0
        ) {
            throw new Error("Invalid smartphone!");
        }

        const newSmartphone = {
            model: model,
            storage: storage,
            price: price,
            condition: condition,
        };
        this.availableSmartphones.push(newSmartphone);

        return `New smartphone added: ${newSmartphone.model} / ${newSmartphone.storage} GB / ${newSmartphone.condition} condition - ${newSmartphone.price.toFixed(2)}$`;
    }

    sellSmartphone(model, desiredStorage) {
        let index = this.availableSmartphones.findIndex(
            (phone) => phone.model === model);
        if (index === -1) {
            throw new Error(`${model} was not found!`);
        }

        let smartphone = this.availableSmartphones[index];
        let soldPrice = smartphone.price;

        if (smartphone.storage >= desiredStorage) {
        } else if (desiredStorage - smartphone.storage <= 128) {
            soldPrice *= 0.9;
        } else {
            soldPrice *= 0.8;
        }

        soldPrice = soldPrice.toFixed(2);
        this.revenue += soldPrice;
        this.availableSmartphones.splice(index, 1);
        this.soldSmartphones.push({
            model: smartphone.model,
            storage: smartphone.storage,
            soldPrice: soldPrice,
        });

        return `${model} was sold for ${soldPrice}$`;
    }

    upgradePhones() {
        if (this.availableSmartphones.length === 0) {
            throw new Error("There are no available smartphones!");
        }

        let output = "Upgraded Smartphones:\n";
        for (const phone of this.availableSmartphones) {
            phone.storage *= 2;
            output += `${phone.model} / ${phone.storage} GB / ${phone.condition} condition / ${phone.price.toFixed(2)}$\n`;
        }

        return output;
    }

    salesJournal(criteria) {
        let sortedSoldSmartphones = [];
        if (criteria === "storage") {
            sortedSoldSmartphones = this.soldSmartphone
                .sort((a, b) => b.storage - a.storage);
        } else if (criteria === "model") {
            sortedSoldSmartphones = this.soldSmartphones
                .sort((a, b) => a.model.localeCompare(b.model));
        } else {
            throw new Error("Invalid criteria!");
        }

        let soldSmartphonesCount = sortedSoldSmartphones.length;
        let totalIncome = this.revenue.toFixed(2);

        let output = `${this.retailer} has a total income of ${totalIncome}$\n${soldSmartphonesCount} smartphones sold:\n`;
        for (const phone of sortedSoldSmartphones) {
            output += `${phone.model} / ${phone.storage} GB / ${phone.soldPrice.toFixed(2)}$\n`;
        }
    }
}
let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
console.log(retailer.sellSmartphone('Samsung S20 Ultra', 256));
console.log(retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256));
console.log(retailer.sellSmartphone('Samsung Galaxy A13', 64));



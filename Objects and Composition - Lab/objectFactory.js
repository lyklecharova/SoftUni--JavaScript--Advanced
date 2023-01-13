function factory(library, orders) {
    let fulfilledOrders = [];
    for (let productOrder of orders) {
        let product = productOrder.template;
        for (let part of productOrder.parts) {
            product[part] = library[part]
        }
        fulfilledOrders.push(product)
    }
    return fulfilledOrders;
}
const library = {

    print: function () {

        console.log(`${this.name} is printing a page`);

    },

    scan: function () {

        console.log(`${this.name} is scanning a document`);

    },

    play: function (artist, track) {

        console.log(`${this.name} is playing '${track}' by ${artist}`);

    },

};

const orders = [

    {

        template: { name: 'ACME Printer' },

        parts: ['print']

    },

    {

        template: { name: 'Initech Scanner' },

        parts: ['scan']

    },

    {

        template: { name: 'ComTron Copier' },

        parts: ['scan', 'print']

    },

    {

        template: { name: 'BoomBox Stereo' },

        parts: ['play']

    }

];

const products = factory(library, orders); console.log(products);
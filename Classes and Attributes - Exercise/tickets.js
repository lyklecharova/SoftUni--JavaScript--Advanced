function tickets(array, sortingCriterian) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    };

    let tickets = [];

    for (let ticketL of array) {
        let [destination, price, status] = ticketL.split("|");
        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket);
    }
    if (sortingCriterian === 'price') {
        tickets.sort((a, b) => a[sortingCriterian] - (b[sortingCriterian]));
    } else {
        tickets.sort((a, b) => a[sortingCriterian].localeCompare(b[sortingCriterian]));
    }

    return tickets;
}
console.log(tickets(
    ['Philadelphia|94.20|available',

        'New York City|95.99|available',

        'New York City|95.99|sold',

        'Boston|126.20|departed'],

    'destination'
));
// tickets(['Philadelphia|94.20|available',

// 'New York City|95.99|available',

// 'New York City|95.99|sold',

// 'Boston|126.20|departed'],

// 'status')
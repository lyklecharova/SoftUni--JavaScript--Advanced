function roadRader(speed, area) {
    speed = Number(speed);
    let limit = 0;
    let status = '';
    switch (area) {
        case 'city':
            limit = 50;
            break;
        case 'residential':
            limit = 20;
            break;
        case 'interstate':
            limit = 90;
            break;
        case 'motorway':
            limit = 130;
            break;
    }
    if (speed > limit) {
        if (speed - limit <= 20) {
            status = 'speeding';
        } else if ((speed - limit > 20) && (speed - limit <= 40)) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving'
        }
        console.log(`The speed is ${Math.abs(speed - limit)} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
    if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    }
}
roadRader(50, 'city')
//Driving 40 km/h in a 50 zone

roadRader(21, 'residential')
// The speed is 1 km/h faster than the allowed speed of 20 - speeding

roadRader(120, 'interstate')
// The speed is 30 km/h faster than the allowed speed of 90 - excessive speeding

roadRader(200, 'motorway')
// The speed is 70 km/h faster than the allowed speed of 130 - reckless driving
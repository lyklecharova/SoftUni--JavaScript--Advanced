const { findNewApartment } = require('./findApartment');
const { assert } = require('chai');

describe('findNewApartment', () => {
    describe('isGoodLocation', () => {
        it('1: If the value of the string city is different than a "Sofia", "Plovdiv" or "Varna" ', () => {
            assert.equal(findNewApartment.isGoodLocation('Balchik', false), "This location is not suitable for you.");
        });
        it('2: If the value of the boolean nearPublicTransportation is false', () => {
            assert.equal(findNewApartment.isGoodLocation('Plovdiv', false), "There is no public transport in area.");
        });
        it('3:  if the above conditions are not met', () => {
            assert.equal(findNewApartment.isGoodLocation('Plovdiv', true), "You can go on home tour!");
        });
        it('4: thrown an error if the city is not a string and boolean', () => {
            assert.throws(() => findNewApartment.isGoodLocation(5), "Invalid input!");
            assert.throws(() => findNewApartment.isGoodLocation([]), "Invalid input!");
            assert.throws(() => findNewApartment.isGoodLocation({}), "Invalid input!");
            assert.throws(() => findNewApartment.isGoodLocation(undefined), "Invalid input!");
        });
        it('5: thrown an error if the nearPublicTransportation is not a string an boolean', () => {
            assert.throws(() => findNewApartment.isGoodLocation(5), "Invalid input!");
            assert.throws(() => findNewApartment.isGoodLocation([]), "Invalid input!");
            assert.throws(() => findNewApartment.isGoodLocation({}), "Invalid input!");
            assert.throws(() => findNewApartment.isGoodLocation(undefined), "Invalid input!");
        });
    });
    describe('isLargeEnough', () => {
        it('1: thrown an error if the minimalSquareMeters is not a number', () => {
            assert.throws(() => findNewApartment.isLargeEnough('hello'), "Invalid input!");
            assert.throws(() => findNewApartment.isGoodLocation([]), "Invalid input!");
            assert.throws(() => findNewApartment.isGoodLocation({}), "Invalid input!");
            assert.throws(() => findNewApartment.isGoodLocation(undefined), "Invalid input!");
            assert.throws(() => findNewApartment.isLargeEnough(true), "Invalid input!");
        });
        it('2: thrown an error if apartments is empty array', () => {
            assert.throws(() => findNewApartment.isGoodLocation([]), "Invalid input!");
        });
        it('3: thrown an error if passed apartments parameter is not an array', () => {
            assert.throws(() => findNewApartment.isLargeEnough('hello'), "Invalid input!");
            assert.throws(() => findNewApartment.isGoodLocation({}), "Invalid input!");
            assert.throws(() => findNewApartment.isGoodLocation(undefined), "Invalid input!");
            assert.throws(() => findNewApartment.isLargeEnough(false), "Invalid input!");
            assert.throws(() => findNewApartment.isLargeEnough(6), "Invalid input!");
        });
        it('4: must add the area of apartment in resultArr if is equal or bigger than minimalSquareMeters', () => {
            assert.equal(findNewApartment.isLargeEnough([40], 40), 40);
        });
    });
    describe('isItAffordable', () => {
        it('1: thrown an error if he price and budget are not a number', () => {
            assert.throws(() => findNewApartment.isItAffordable('6', []), "Invalid input!");
            assert.throws(() => findNewApartment.isItAffordable({}, []), "Invalid input!");
            assert.throws(() => findNewApartment.isItAffordable(undefined, false), "Invalid input!");
            assert.throws(() => findNewApartment.isItAffordable(true, false), "Invalid input!");
        });
        it('2: thown an error if the price and budget are less or equal to 0', () => {
            assert.throws(() => findNewApartment.isItAffordable(-5, 0), "Invalid input!");
        });
        it('3: to calculate if you can afford buying the apartment by subtracting the price of the apartment from your budget, if the result is lower than 0', () => {
            assert.equal(findNewApartment.isItAffordable(50, 10), "You don't have enough money for this house!");
        });
        it('4:  if the above conditions are not met', () => {
            assert.equal(findNewApartment.isItAffordable(90, 100), "You can afford this home!");
        });
    });
})
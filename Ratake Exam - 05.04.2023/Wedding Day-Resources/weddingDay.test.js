const { weddingDay } = require('./weddingDay');
const { assert } = require('chai');

describe('weddingDay', () => {
    describe('pickVenue', () => {
        it('1: capicity is not a number', () => {
            assert.throws(() => weddingDay.pickVenue('hello'), "Invalid Information!");
        });
        it('2:pricePerGuest is not a number', () => {
            assert.throws(() => weddingDay.pickVenue('6'), "Invalid Information!");
        });
        it('3: location is not a string', () => {
            assert.throws(() => weddingDay.pickVenue([]), "Invalid Information!");
        });
        it('4: location is empty string', () => {
            assert.throws(() => weddingDay.pickVenue(''), "Invalid Information!");
        });
        it('5: thrown an error If the value of the string location is different from "Varna"', () => {
            assert.throws(() => weddingDay.pickVenue(100, 10, 'Plovdiv'), Error, 'The location of this venue is not in the correct area!');
        });
        it('6: If the capacity of the venue is greater or equal to 150 and pricePerGuest is less or equal to 120 ', () => {
            assert.equal(weddingDay.pickVenue(150, 120, 'Varna'), "This venue meets the requirements, with capacity of 150 guests and 120$ cover.");
        });
        it('7: if the above conditions are not met', () => {
            assert.equal(weddingDay.pickVenue(50, 5, 'Varna'), "This venue does not meet your requirements!");
        });
    });
    describe('otherSpendings', () => {
        it('1: thrown an error if if the weddingDecoration, photography and discount are not an array, array and Boolean', () => {
            assert.throws(() => weddingDay.otherSpendings('Plovdiv'), "Invalid Information!");
            assert.throws(() => weddingDay.otherSpendings(60), "Invalid Information!");
            assert.throws(() => weddingDay.otherSpendings({}), "Invalid Information!");
            assert.throws(() => weddingDay.otherSpendings(undefined), "Invalid Information!");
        });
        it('2:If the discount is true, a 15% discount should be applied', () => {
            let discount = true;
            let flowers = [500];
            let decoration = [400];
            assert.equal(weddingDay.otherSpendings(flowers, decoration, discount), 'You spend 0$ for wedding decoration and photography with 15% discount!');
        });
        it('3:If the discount is true, a 15% discount should be applied', () => {
            let discount = true;
            let pictures = [700];
            let video = [1300];
            assert.equal(weddingDay.otherSpendings(pictures, video, discount), 'You spend 0$ for wedding decoration and photography with 15% discount!');
        });
        it('4: if the above condition is not met', () => {
            let discount = false;
            let pictures = [700];
            let video = [1300];
            assert.equal(weddingDay.otherSpendings(pictures, video, discount), "You spend 0$ for wedding decoration and photography!");
        });
    });
    describe('tableDistribution', () => {
        it('1:thrown an error if the guests and tables are not a numbers', () => {
            assert.throws(() => weddingDay.tableDistribution('6', []), "Invalid Information!");
            assert.throws(() => weddingDay.tableDistribution(false, undefined), "Invalid Information!");
        });
        it('2: thrown an error if guests and tables are not a negative numbers', () => {
            assert.throws(() => weddingDay.tableDistribution([-5, 8]), "Invalid Information!");
        });
        it('3: thrown an error if guests and tables are string', () => {
            assert.throws(() => weddingDay.tableDistribution('a', 'b'), "Invalid Information!");
        });
        it('4: If the peopleOnTable are  less than 6', () => {
            assert.equal(weddingDay.tableDistribution(1, 2, 8), "There is only 1 people on every table, you can join some tables.");
        });
        it('5: If the peopleOnTable are  more than 6', () => {
            assert.equal(weddingDay.tableDistribution(30, 5), "You have 5 tables with 6 guests on table.");
        });

    });
})

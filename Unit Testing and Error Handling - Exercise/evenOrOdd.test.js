const isOddOrEven = require('./evenOrOdd');
const {assert} = require('chai');

describe('isOddOrEven function tests',()=>{

    // Invalid input tests
    it('Should return undefined if the parameter is number',()=>{
        assert.equal(isOddOrEven(10), undefined);
    });

    it('Should return undefined if the parameter is object',()=>{
        assert.equal(isOddOrEven({}), undefined);
    });

    it('Should return undefined if the parameter is array',()=>{
        assert.equal(isOddOrEven([]), undefined);
    });

    it('Should return undefined if the parameter is undefined',()=>{
        assert.equal(isOddOrEven(undefined), undefined);
    });

    it('Should return undefined if the parameter is null',()=>{
        assert.equal(isOddOrEven(null), null);
    });

    // Valid input tests
    it('Should return even as result',()=>{
        assert.equal(isOddOrEven('Hi'), 'even');
    });

    it('Should return odd as result',()=>{
        assert.equal(isOddOrEven('Hello'), 'odd');
    });
});
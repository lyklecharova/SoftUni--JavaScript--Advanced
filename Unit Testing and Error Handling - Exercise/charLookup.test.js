const lookupChar = require('./charLookup');
const { assert} = require('chai');

describe('lookupChar function tests', ()=>{
    it('Should return undefined the first parameter is NOT a string', ()=>{
        assert.equal(lookupChar([10]), undefined);
    });

    it('Should return undefined the second parameter is NOT a number', ()=>{
        assert.equal(lookupChar([10],'10'), undefined);
    });

    it('should return undefined with string the first parameter and decimal second',()=>{
        assert.equal(lookupChar('10',10.5), undefined);
    })

    it('Should return "Incorrect index" if index is negative',()=>{
        assert(lookupChar('Love',-1) === "Incorrect index");
    });

    it('Should return "Incorrect index" if index is positve',()=>{
        assert(lookupChar('Love',10) === "Incorrect index");
    });

    it('Should return char at index', ()=>{
        assert(lookupChar('Love',0) === 'L');
    });
});
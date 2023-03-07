const mathEnforcer = require('./mathEnforcer');
const {expect} = require('chai');

describe('mathEnforcer is function test',()=>{
    describe('addFive is function tests',()=>{
        it('should return correct result with a non-number parameter',()=>{
            expect(mathEnforcer.addFive('hello')).to.be.undefined;
        });

        it('should return 5 with positive number(10) as parameter', ()=>{
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });
    });

    describe('subtractTen is function tests',()=>{
        it('should return undefined if the parameter is NOT a number',()=>{
            expect(mathEnforcer.subtractTen('hello')).to.be.undefined;
        });

        it('should  return 1 with positive number(11) as parameter',()=>{
            expect(mathEnforcer.subtractTen(11)).to.equal(1);
        });
       
    });

    describe('sum is function tests',()=>{
        it('should return undefined if 2 parameters are  NOT a number',()=>{
            expect(mathEnforcer.subtractTen('hello', "hi")).to.be.undefined;
        });

        it(' should return 3.1 with one floating-point number(1.1 and 2) as parameters',()=>{
            expect(mathEnforcer.sum(1.1, 2)).to.closeTo(3.1, 0.01);
        });
    });
});
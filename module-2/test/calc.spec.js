const { should } = require('chai');
const calc = require('../calc');
const expect = require('chai').expect;

describe.only('calc', () => {
    /*
     * calc(3).v // 3
     * calc(3).add(5).v // 8
     * calc(3).minus(2).v // 1
     * calc(4).sqrt().v // 2
     * calc(3).times(10).v // 30
     * calc(10).divide(2).v // 5
     * calc(10).modulo(5).v // 0
     * calc(5).divide(0) // throw error
     * calc(-3).sqrt() // throw error
     * calc(3).add(4)
     *     .minus(3)
     *     .times(6).v // 24
     */
    // TODO: write test cases to test the calculator
    let myCalc = calc();

    describe("General", () => {

        beforeEach(()=>{
            myCalc.v = 3;
        });
        
        it("Calc should be defined", () => {
            expect(calc).to.be.instanceof(Function);
        });

        it("should give back the actual value", () => {
            expect(myCalc.v).to.be.equal(3);
        });
    });

    describe("Add", () => {

        beforeEach(() => {
            myCalc.v = 3;
        });

        it("should be defined", () => {
            expect(myCalc.add).to.be.instanceof(Function);
        });

        it("should be able to add two positives", () => {
            
            expect(myCalc.add(5).v).to.be.equal(8);
        });

        it("should be able to add two negatives", () => {
            myCalc.v *= -1;
            expect(myCalc.add(-3).v).to.be.equal(-6);
        });

        it("should be able to add a positive and a negative", () => {
            expect(myCalc.add(-1).v).to.be.equal(2);
        });
    });

    describe("Minus", () => {

        beforeEach(() => {
            myCalc.v = 3;
        });

        it("should be defined", () => {
            expect(myCalc.minus).to.be.instanceof(Function);
        });

        it("should be able to subtract two positives", () => {
            expect(myCalc.minus(1).v).to.be.equal(2);
        });

        it("should be able to subtract two negatives", () => {
            myCalc.v *= -1;
            expect(myCalc.minus(-3).v).to.be.equal(0);
        });

        it("should be able to subtract a positive and a negative", () => {
            expect(myCalc.minus(-1).v).to.be.equal(4);
        });
    });

    describe("Times", () => {

        beforeEach(() => {
            myCalc.v = 3;
        });

        it("should be defined", () => {
            expect(myCalc.times).to.be.instanceof(Function);
        });

        it("should be able to multiply two positives", () => {
            expect(myCalc.times(10).v).to.be.equal(30);
        });

        it("should be able to multiply two negatives", () => {
            myCalc.v *= -1;
            expect(myCalc.times(-10).v).to.be.equal(30);
        });

        it("should be able to multiply a positive and a negative", () => {
            expect(myCalc.times(-10).v).to.be.equal(-30);
        });
    });

    describe("Sqrt", () => {

        beforeEach(() => {
            myCalc.v = 4;
        });

        it("should be defined", () => {
            expect(myCalc.sqrt).to.be.instanceof(Function);
        });

        it("should throw if the actual value is negative", () => {
            myCalc.v *= -1;
            expect(() => myCalc.sqrt()).to.throw();
        });

        it("should be able to give back the sqrt of a positive", () => {
            expect(myCalc.sqrt().v).to.be.equal(2);
        });
    });

    describe("Divide", () => {

        beforeEach(() => {
            myCalc.v = 10;
        });

        it("should be defined", () => {
            expect(myCalc.divide).to.be.instanceof(Function);
        });

        it("should throw if the given number is 0", () => {
            expect(() => myCalc.divide(0)).to.throw();
        });

        it("should be able to divide two positives", () => {
            expect(myCalc.divide(2).v).to.be.equal(5);
        });

        it("should be able to divide two negatives", () => {
            myCalc.v *= -1;
            expect(myCalc.divide(-10).v).to.be.equal(1);
        });

        it("should be able to divide a positive and a negative", () => {
            expect(myCalc.divide(-10).v).to.be.equal(-1);
        });
    });

    describe("Modulo", () => {

        beforeEach(() => {
            myCalc.v = 10;
        });

        it("should be defined", () => {
            expect(myCalc.modulo).to.be.instanceof(Function);
        });

        it("should be able to give back the modulo of a positive", () => {
            expect(myCalc.modulo(3).v).to.be.equal(1);
        });

        it("should be able to give back the modulo of a negative", () => {
            myCalc.v *= -1;
            expect(myCalc.modulo(7).v).to.be.equal(-3);
        });
    });

    describe("toString", () => {

        beforeEach(() => {
            myCalc.v = 10;
        });

        it("should be defined", () => {
            expect(myCalc.toString).to.be.instanceof(Function);
        });

        it("should be able to give back the actual value as a string", () => {
            expect(myCalc.toString()).to.be.equal("10");
        });
    });
    
    describe("Chaining", () => {

        beforeEach(() => {
            myCalc.v = 3;
        });
        
        it("should be able to chain methods", () => {
            expect(myCalc.add(4)
                 .minus(3)
                 .times(6).v).to.be.equal(24);
        });
    });
});
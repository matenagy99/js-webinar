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
    describe("General", () => {
        it("Calc should be defined", () => {
            expect(calc).to.be.instanceof(Function);
        });

        it("should give back the actual value", () => {
            let myCalc = calc(3);
            expect(myCalc.v).to.be.equal(3);
        });
    });

    describe("Add", () => {

        it("should be defined", () => {
            let myCalc = calc(3);
            expect(myCalc.add).to.be.instanceof(Function);
        });

        it("should be able to add two positives", () => {
            let myCalc = calc(3);
            expect(myCalc.add(5).v).to.be.equal(8);
        });

        it("should be able to add two negatives", () => {
            let myCalc = calc(-3);
            expect(myCalc.add(-3).v).to.be.equal(-6);
        });

        it("should be able to add a positive and a negative", () => {
            let myCalc = calc(3);
            expect(myCalc.add(-1).v).to.be.equal(2);
        });
    });

    describe("Minus", () => {

        it("should be defined", () => {
            let myCalc = calc(3);
            expect(myCalc.minus).to.be.instanceof(Function);
        });

        it("should be able to subtract two positives", () => {
            let myCalc = calc(3);
            expect(myCalc.minus(1).v).to.be.equal(2);
        });

        it("should be able to subtract two negatives", () => {
            let myCalc = calc(-3);
            expect(myCalc.minus(-3).v).to.be.equal(0);
        });

        it("should be able to subtract a positive and a negative", () => {
            let myCalc = calc(3);
            expect(myCalc.minus(-1).v).to.be.equal(4);
        });
    });

    describe("Times", () => {

        it("should be defined", () => {
            let myCalc = calc(3);
            expect(myCalc.times).to.be.instanceof(Function);
        });

        it("should be able to multiply two positives", () => {
            let myCalc = calc(3);
            expect(myCalc.times(10).v).to.be.equal(30);
        });

        it("should be able to multiply two negatives", () => {
            let myCalc = calc(-3);
            expect(myCalc.times(-10).v).to.be.equal(30);
        });

        it("should be able to multiply a positive and a negative", () => {
            let myCalc = calc(3);
            expect(myCalc.times(-10).v).to.be.equal(-30);
        });
    });

    describe("Sqrt", () => {

        it("should be defined", () => {
            let myCalc = calc(4);
            expect(myCalc.sqrt).to.be.instanceof(Function);
        });

        it("should throw if the actual value is negative", () => {
            let myCalc = calc(-4);
            expect(() => myCalc.sqrt()).to.throw();
        });

        it("should be able to give back the sqrt of a positive", () => {
            let myCalc = calc(4);
            expect(myCalc.sqrt().v).to.be.equal(2);
        });
    });

    describe("Divide", () => {

        it("should be defined", () => {
            let myCalc = calc(10);
            expect(myCalc.divide).to.be.instanceof(Function);
        });

        it("should throw if the given number is 0", () => {
            let myCalc = calc(5);
            expect(() => myCalc.divide(0)).to.throw();
        });

        it("should be able to divide two positives", () => {
            let myCalc = calc(10);
            expect(myCalc.divide(2).v).to.be.equal(5);
        });

        it("should be able to divide two negatives", () => {
            let myCalc = calc(-20);
            expect(myCalc.divide(-10).v).to.be.equal(2);
        });

        it("should be able to divide a positive and a negative", () => {
            let myCalc = calc(30);
            expect(myCalc.divide(-10).v).to.be.equal(-3);
        });
    });

    describe("Modulo", () => {

        it("should be defined", () => {
            let myCalc = calc(3);
            expect(myCalc.modulo).to.be.instanceof(Function);
        });

        it("should be able to give back the modulo of a positive", () => {
            let myCalc = calc(10);
            expect(myCalc.modulo(3).v).to.be.equal(1);
        });

        it("should be able to give back the modulo of a negative", () => {
            let myCalc = calc(-30);
            expect(myCalc.modulo(7).v).to.be.equal(-2);
        });
    });

    describe("toString", () => {

        it("should be defined", () => {
            let myCalc = calc(3);
            expect(myCalc.toString).to.be.instanceof(Function);
        });

        it("should be able to give back the actual value as a string", () => {
            let myCalc = calc(10);
            expect(myCalc.toString()).to.be.equal("10");
        });
    });
    
    describe("Chaining", () => {

        it("should be able to chain methods", () => {
            let myCalc = calc(3);
            expect(myCalc.add(4)
                 .minus(3)
                 .times(6).v).to.be.equal(24);
        });
    });
});
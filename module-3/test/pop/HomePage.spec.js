const HomePage = require("../../pop/HomePage");
const Element = require("../../pop/Element");
const Elements = require("../../pop/Elements");
const expect = require('chai').expect;

describe.only('HomePage Class', () => {
    // TODO: write tests
    beforeEach(() => {
        global.myHomePage = new HomePage;
    });

    afterEach(() => {
        delete myHomePage;
    })

    it("Should be defined", () => {
        expect(HomePage).to.be.instanceof(Function);
    });

    describe("Header", () => {
        it("Should be an Element", () =>{
            expect(myHomePage.header).to.be.instanceof(Element);
        });

        it("Should have children", () => {
            const children = myHomePage.getChildren();
            expect(children).to.be.equal("Logo, Contact Us, Search");
        });
    });

    describe("Logo", () => {
        it("Should give back logo", () =>{
            expect(myHomePage.getLogo("Logo").locator().css).to.be.equal(".header__logo");
        })

        it("Should throw error if logo not found", () => {
            expect(() => myHomePage.getLogo("logo")).to.throw();
        })
    })

    describe("Rollover Tiles", () => {
        it("Should be Elements", () => {
            expect(myHomePage.rolloverTiles).to.be.instanceof(Elements);
        });
    });

    describe("Partners", () => {
        it("Shoud be defined", () => {
            expect(myHomePage.partners).not.to.be.undefined;
        });

        it("Should give back partners' locator", () => {
            expect(myHomePage.getPartners("museo-slab")).to.be.equal("museo-slab");
        });

        it("Should throw error for wrong locator", () => {
            expect(() => myHomePage.getPartners("museo-snap")).to.throw();
        })
    });
});
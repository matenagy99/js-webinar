/**
 * Create HomePage class representing the EPAM.com home page.
 * Add main widgets and element of the page and write tests
 * for it (test/pop/HomePage.spec.js).
 */
const Layout = require('./Layout');
const Element = require('./Element');
const Elements = require('./Elements');

module.exports = class HomePage extends Layout {
    constructor() {
        super('/');

        this.header = new Element('Header', { css: 'header' });
        this.header.addChildren(new Element("Logo", { css:'.header__logo'}));
        this.menuItems = new Elements("Menu Items", { css: '.top-navigation__item-link'});

        this.header.addChildren(new Element("Contact Us", { css: "cta-button-ui cta-button--envelope header__control"}));
        this.header.addChildren(new Element("Search", { css: "header-search__button header__icon"}));
        this.rolloverTiles = new Elements("Rollover Tiles", { css: "rollover-tiles-ui"});
        this.partners = new Element("Partners", { css: "museo-slab"});
    }

    getLogo(logo) {
        return this.header.get(logo);
    }

    getChildren() {
        const children = Object.keys(this.header.children).join(", ");
        return children;
    }

    getPartners(loc) {
        if(loc === this.partners.locator.css){
            return this.partners.locator.css;
        } else {
            throw new Error("No partners with this locator");
        }
    }

}

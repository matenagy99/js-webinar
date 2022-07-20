/**
 * Create the Circle class.
 *
 * @typedef {object} Circle
 * @property {number} r the radius of the circle
 * @function getArea return the area of the circle
 * @function getPerimeter return the perimeter of the circle
 */

"use strict";

function Circle(r){

    if(this.r < 0) {
        throw new Error("Radius cannot be negative");
    }
    
    this.r = r
}

Circle.prototype.getPerimeter = function () {
    return 2 * this.r * Math.PI;
}

Circle.prototype.getArea = function() {
    return Math.PI * Math.pow(this.r, 2);
}

module.exports = Circle;
/**
 * It reverses the given object, i.e. return a copy of the object 
 * where the keys have become the values and the values the keys
 * 
 * @param {object} o the object
 * @returns {object} the new object
 */

function reverse(o) {

    if (typeof o !== "object") {
        throw new Error("The parameter is not an object");
    }

    const keys = Object.keys(o);
    const values = Object.values(o);

    const new_o = {};

    for (let i = 0; i < keys.length; i++) {
        new_o[values[i]] = keys[i];
    }

    return new_o;
}

module.exports = reverse;
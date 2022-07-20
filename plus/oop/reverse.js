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

    const new_o = {};

    for (const [key, value] of Object.entries(o)) {
        new_o[value] = key;
    }

    return new_o;
}

module.exports = reverse;
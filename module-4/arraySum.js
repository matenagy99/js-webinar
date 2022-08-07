/**
 * It receives an array of strings, integers and
 * arrays, like itself.
 * Return the summary of all integers in it on
 * any level.
 *
 * @param {Array} elements
 * @returns {number} summary of all integers or 0 in other cases
 */

module.exports = function arraySum(arr) {

    if (!(arr instanceof Array) || arr.length === 0) {
        return 0;
    }

    arr = arr.flat(Infinity);
    let sum = 0;

    arr.forEach((item) => {
        if (typeof item === "number"){
            sum += item;
        }
    }); 

    return sum;
}
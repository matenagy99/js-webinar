/**
 * It receives an array of strings, integers and
 * arrays, like itself.
 * Return the summary of all integers in it on
 * any level.
 *
 * @param {Array} elements
 * @returns {number} summary of all integers or 0 in other cases
 */

module.exports = function arraySum(arr, sum = 0) {
    
    if (!(arr instanceof Array) || arr.length === 0) {
        return 0;
    }

    let sumItems = sum;

    for (const item of arr) {
        if (typeof item === "number") {
            sumItems += item;
        }

        if (item instanceof Array) {
            arraySum(item, sumItems);
        }
    }

    /*
    arr.forEach((element) => {
        
        if (typeof element === "number") {
            sumItems += element;
        }
        
        if (element instanceof Array) {
            arraySum(element, sumItems);
        }

    });*/

    return sumItems;
}
/**
 * It receives an array of strings, integers and
 * arrays, like itself.
 * Return the summary of all integers in it on
 * any level.
 *
 * @param {Array} elements
 * @returns {number} summary of all integers or 0 in other cases
 */

module.exports = function arraySum(arr, ints = []) {

    if (!(arr instanceof Array) || arr.length === 0) {
        return 0;
    }

    let integers = ints;

    for (let i = 0; i < arr.length; i++) {

        if (typeof arr[i] === "number") {
            integers.push(arr[i])
        }

        if (arr[i] instanceof Array) {
            arraySum(arr[i], integers);  
        } 
        
    }

    return integers.reduce((sum, item) => sum + item); 
}
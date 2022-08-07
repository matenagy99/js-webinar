/**
 * It determines, whether the given two arrays
 * are equal, by considering the number of elements,
 * those order and value, in all levels.
 * 
 * It prints out a message in case of any
 * difference in an array, using the console.warn!
 * 
 * @param {Array} first The first array
 * @param {Array} second The second array
 * @returns {boolean} true if the two arrays are equal,
 *                    false otherwise
 */

module.exports = function arrayEqual(arr1, arr2) {

    arr1 = arr1.flat(Infinity);
    arr2 = arr2.flat(Infinity);

    if (arr1.length !== arr2.length) {
        console.warn(`Different lengths: ${arr1.length} !== ${arr2.length}`);
        return false;
    } else {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                console.warn(`Different items: ${arr1[i]} !== ${arr2[i]}`);
                return false;
            } 
        }
    }
    
    return true;
}
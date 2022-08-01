/**
 * It determines whether the given array is sorted in
 * alphabetically ascending order.
 * 
 * It ignores
 *  - case of the character
 *  - given special characters (nothing by default)
 *  - whitespaces
 * 
 * @param {string[]} items the subject items
 * @param {string} ignore characters to ignore
 * @returns {boolean} true if the array is properly sorted,
 *                    false otherwise
 */

module.exports = function arraySorted(arr, ignore) {
    
    let isSorted = true;

    for (let idx = 0; idx < arr.length - 1; idx++) {

        arr[idx] = arr[idx].toString().split(" ").join("").replace(/\s+/, "");
        arr[idx + 1] = arr[idx + 1].toString().split(" ").join("").replace(/\s+/, "");

        if (arr[idx].indexOf(ignore) !== -1) {
            arr[idx] = arr[idx].replace(ignore, "");
        }

        if (arr[idx + 1].indexOf(ignore) !== -1) {
            arr[idx + 1] = arr[idx + 1].replace(ignore, "");
        }

        if (arr[idx].toLowerCase() > arr[idx + 1].toLowerCase()) {
            isSorted =  false;
        }
    }

    return isSorted;
}
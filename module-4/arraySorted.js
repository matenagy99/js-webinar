/**
 * It determines whether the given newArray is sorted in
 * alphabetically ascending order.
 * 
 * It ignores
 *  - case of the character
 *  - given special characters (nothing by default)
 *  - whitespaces
 * 
 * @param {newArr[]} items the subject items
 * @param {newArr} ignore characters to ignore
 * @returns {boolean} true if the newArray is properly sorted,
 *                    false otherwise
 */

module.exports = function newArraySorted(arr, ignore) {
    
    let formatted = arr.map((item) => {

        item = item.toString();
        item = item.split(/[" "\s]/).join("");
        
        if (item.indexOf(ignore) !== -1) {
            item = item.replace(ignore, "");
        }

        return item;
    });

    let isSorted = true;

    for (let idx = 0; idx < formatted.length - 1; idx++) {

        if (formatted[idx].toLowerCase() > formatted[idx + 1].toLowerCase()) {
            isSorted =  false;
        }
    }

    return isSorted;
}
/**
 * It determines whether the given newArray is sorted in
 * alphabetically ascending order.
 * 
 * It ignores
 *  - case of the character
 *  - given special characters (nothing by default)
 *  - whitespaces
 * 
 * @param {arr} items the subject items
 * @param {string} ignore characters to ignore
 * @returns {boolean} true if the newArray is properly sorted,
 *                    false otherwise
 */

module.exports = function arraySorted(arr, ignore) {

    let formatted = arr.map((item) => {

        item = item.toString().toLowerCase();
        item = item.replace(/\s/g, "");

        if (ignore && ignore.length > 1) {
            for (let char = 0; char < ignore.length; char++) {
                item = item.replaceAll(ignore[char], "");
            }
        } else {
            item = item.replaceAll(ignore, "");
        }

        return item;
    });

    for (let idx = 0; idx < formatted.length - 1; idx++) {

        if (formatted[idx] > formatted[idx + 1]) {
            return false;
        }
    }

    return true;
}

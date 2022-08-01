/**
 * It receives an array of strings and returns
 * the first longest string from it.
 * Also, in the alphabetically first in case of more.
 *
 * @param {string[]} strings
 * @returns {string} longest string or empty string in other cases
 */

module.exports = function longestString(strings) {

    if (!(strings instanceof Array) || strings.length < 2) {
        return "";
    }

    let max = "";

    for (const word of strings.sort()) {
        if (word.length > max.length) {
            max = word;
        }
    }

    return max;
}
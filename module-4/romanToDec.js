/**
 * It receives a Roman number (as string)
 * and converts it to its Arabic (decimal) equivalent.
 *
 * @see https://en.wikipedia.org/wiki/Roman_numerals
 * @param {string} roman
 * @returns {number} the Arabic (decimal) equivalent of the parameter
 * @throws Error in case of invalid input
 */

module.exports = function romanToDec(string) {

    const isRoman = {
        "i": 1,
        "v": 5,
        "x": 10,
        "l": 50,
        "c": 100,
        "d": 500,
        "m": 1000 
    };

    if (typeof string !== "string") {
        console.warn("Not a string");
    }

    let isArabic = 0;

    for (let char = 0; char < string.length; char++) {

        if (!isRoman.hasOwnProperty(string[char])) {
            console.warn("Not a valid roman number");
            return false;
        }

        if (isRoman[string[char]] < isRoman[string[char + 1]]) {
            isArabic -= isRoman[string[char]];
        } else {
            isArabic += isRoman[string[char]];
        }
    }

    return isArabic;
}
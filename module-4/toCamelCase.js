/**
 * It returns the camel-case version of string.
 * E.g.: simple lowercase string => SimpleLowercaseString
 *
 * @param {string} toConvert
 * @returns {string} camel-case string or empty string in other cases
 */

module.exports = function toCamelCase(string) {
    
    if (typeof string === "number"){
        return "";
    }

    let str = "";
    
    let subStrs = string.trim().split(/\s+/);
    str += subStrs[0].toLowerCase();

    for(let idx = 1; idx < subStrs.length; idx++){
        str += subStrs[idx].slice(0, 1).toUpperCase() + subStrs[idx].trim().slice(1);
    }

    let specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";

    for(let char = 0; char < specialChars.length; char++) {
       if (str.includes(specialChars[char])) {
            str = str.replace(specialChars[char], "");
       }
    }

    return str;
}
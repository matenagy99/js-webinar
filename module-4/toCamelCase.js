/**
 * It returns the camel-case version of string.
 * E.g.: simple lowercase string => SimpleLowercaseString
 *
 * @param {string} toConvert
 * @returns {string} camel-case string or empty string in other cases
 */

module.exports = function toCamelCase(string) {
    
    if (typeof string !== "string"){
        return "";
    }

    let str = "";
    
    let subStrs = string.trim().split(/[^A-Za-z0-9]/);
    str += subStrs[0].toLowerCase();

    for(let idx = 1; idx < subStrs.length; idx++){
        str += subStrs[idx].slice(0, 1).toUpperCase() + subStrs[idx].trim().slice(1);
    }
    
    return str;
}
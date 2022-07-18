/**
 * It wait for the given seconds, but at most 10 seconds.
 *
 * @param {number} sec the seconds to wait
 * @returns {Promise} the promise which resolves when wait if over
 *                    or rejects if parameter is not correct
 */

module.exports = async function sleep(sec) {

    if (typeof sec !== "number") {
        throw new Error("Not a valid paramter");
    }
        
    if (sec > 10) {
        sec = 10;
    }else if (sec < 1) {
        sec = 1;
    }

    return new Promise(resolve => setTimeout(resolve, sec * 1000));
}
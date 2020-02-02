/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
    let xBet = '1xBet',
        xxx = 'XXX';

    str = str.toLowerCase();
    if(str.includes(xBet.toLowerCase()) || str.includes(xxx.toLowerCase())) {
        return true;
    }
    return false;
}

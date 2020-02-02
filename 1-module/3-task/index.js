/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
    if(str && str.length >= 0 ){
        return str = str[0].toUpperCase() + str.slice(1);
    }
    return '';
}

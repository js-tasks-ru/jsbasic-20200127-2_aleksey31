/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
    let newArr = str.toLowerCase().split("-");

    let result = newArr.filter((item) => item)
        .map((item, index, arr) => index > 0 ? arr[index] = item[0].toUpperCase() + item.slice(1) : item);

    return result.join("");
}

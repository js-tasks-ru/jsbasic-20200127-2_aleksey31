/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
    let arr = str.split(/,|\s/);
    console.log(arr);

    let num = arr.map((item) => parseFloat(item)).filter((item) => !isNaN(item));

    let result = {
        min: Math.min(...num),
        max: Math.max(...num)
    };

    return result;
}

/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
    let sum = 0;
    for (let salary in arr) {
        if (typeof arr[salary] === "number") {
            sum += arr[salary];
        }
    }
    return sum;
}

/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
    let totalSalary = data.filter((item) => item.age <= age)
        .map((item) => `${item.name}, ${item.balance}`);
    let stringSalary = totalSalary.join("\n");
    return stringSalary;
}

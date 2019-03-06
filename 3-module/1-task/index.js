/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  return data.map((obj) => obj.age <= age ? `${obj.name}, ${obj.balance}` : '')
            .filter((str) => !!str)
            .join('\n');
}



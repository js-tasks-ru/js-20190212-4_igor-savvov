/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone (obj) {
  let copyObj = {};
  for (const key in obj) {
    typeof obj[key] === 'object' && obj[key] != null ? copyObj[key] = clone(obj[key]) : copyObj[key] = obj[key];
  }
  return copyObj;
}
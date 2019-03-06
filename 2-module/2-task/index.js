/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */
function find (obj, value) {
  var paths = [];

  function getPath(obj, str) {
    for (const key in obj) {
      if (typeof obj[key] === 'object') {
        getPath(obj[key], str ? `${str}.${key}` : key);
      } else {
        obj[key] === value ? paths.push(str ? `${str}.${key}` : key) : '';
      }
    }
  }

  getPath(obj, '');

  return !paths.length ? null : paths.length === 1 ? paths[0] : paths;
}
'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let pos = 0, result = [];
  while (pos < str.length) {
    if (str[pos] >= '0' && str[pos] <= '9' || str[pos] === '-') {
      result.push(isNaN(parseFloat(str.slice(pos))) ? '' : parseFloat(str.slice(pos)));
      pos += String(parseFloat(str.slice(pos))).length;
    } else {
      pos++;
    }
  }
  return {
    min: Math.min(...result),
    max: Math.max(...result)
  }
}


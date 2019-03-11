'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight (table) {
  table.querySelectorAll('tbody td:nth-child(4)').forEach((el) => {
    !el.dataset.available ? el.parentNode.hidden = true :
      el.dataset.available === 'true' ? el.parentNode.classList.add('available') :
        el.parentNode.classList.add('unavailable');
  });
  table.querySelectorAll('tbody td:nth-child(3)').forEach((el) => {
    el.innerHTML === 'm' ? el.parentNode.classList.add('male') :
      el.parentNode.classList.add('female');
  });
  table.querySelectorAll('tbody td:nth-child(2)').forEach((el) => {
    el.innerHTML < 18 ? el.parentNode.setAttribute('style', 'text-decoration: line-through') : false;
  });
}
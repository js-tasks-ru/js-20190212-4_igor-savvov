'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList (friends) {
  if (!friends.length) return;
  let ul = document.createElement('ul');
  friends.forEach((el) => {
    let li = document.createElement('li');
    li.innerHTML = `${el.firstName} ${el.lastName}`;
    ul.appendChild(li);
  });
  return ul;
}

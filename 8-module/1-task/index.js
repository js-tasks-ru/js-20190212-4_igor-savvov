'use strict';

/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {

    /**
     * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
     */
  if (!new.target) {
    return new SortableTable(items);
  }
  this.items = items || [];
  this.el = document.createElement('table');
  createThead(this.el);
  createTbody(this.el, this.items);

  function createThead(table) {
    let thead = document.createElement('thead'),
      tableHeadings = ['Name', 'Age', 'Salary', 'City'],
      tr = document.createElement('tr');
    thead.appendChild(tr);

    for (let i = 0; i < tableHeadings.length; i++) {
      let td = document.createElement('td');
      td.appendChild(document.createTextNode(tableHeadings[i]));
      tr.appendChild(td);
    }
    table.appendChild(thead);
  }

  function createTbody(table, items) {
    let tbody = document.createElement('tbody');

    for (let i = 0; i < items.length; i++) {
      let tr = document.createElement('tr');
      tbody.appendChild(tr);
      for (const key in items[i]) {
        let td = document.createElement('td');
        td.appendChild(document.createTextNode(items[i][key]));
        tr.appendChild(td);
      }
    }
    table.appendChild(tbody);
  }

  /**
     * Метод выполняет сортировку таблицы
     * @param {number} column - номер колонки, по которой нужно выполнить сортировку (отсчет начинается от 0)
     * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
     */
  this.sort = function (column, desc = false) {
    let rows = [];

    for (let i = 1; i < this.el.rows.length; i++) {
      rows.push(this.el.rows[i]);
    }
    rows.sort((a, b) => a.cells[column].innerHTML > b.cells[column].innerHTML ? 1 : -1)

    if (desc) rows.reverse();

    for (let i = 0; i < rows.length; i++) {
      this.el.tBodies[0].appendChild(rows[i]);
    }
  }
}


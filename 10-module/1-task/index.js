(function () {
  'use strict';

  /**
   * Компонент, который реализует таблицу
   * с возможностью удаления строк
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
  class ClearedTable {

    constructor(data) {
      this.el = document.createElement('table');
      this.data = data;
      this.el.className = 'pure-table';
      this._createThead(this.el);
      this._createTbody(this.el, this.data);
      this.el.addEventListener('click', (ev) => {
        if (ev.target.getAttribute('href') !== '#delete') return;
        this._removeRow(ev.target.parentNode);
      });
    }

    _createThead(table) {
      let thead = document.createElement('thead'),
        tableHeadings = ['Name', 'Age', 'Salary', 'City', ''],
        tr = document.createElement('tr');
      thead.appendChild(tr);

      for (let i = 0; i < tableHeadings.length; i++) {
        let td = document.createElement('td');
        td.appendChild(document.createTextNode(tableHeadings[i]));
        tr.appendChild(td);
      }
      table.appendChild(thead);
    }

    _createTbody(table, items) {
      let tbody = document.createElement('tbody');
      for (let i = 0; i < items.length; i++) {
        let tr = document.createElement('tr');
        tbody.appendChild(tr);
        for (const key in items[i]) {
          if (key === 'id') continue;
          let td = document.createElement('td');
          td.appendChild(document.createTextNode(items[i][key]));
          tr.appendChild(td);
        }
        let td = document.createElement('td');
        td.innerHTML = '<a href="#delete">X</a>';
        tr.appendChild(td);
      }
      table.appendChild(tbody);
    }

    _removeRow(row) {
      this.onRemoved(row.parentNode.rowIndex);
      row.parentNode.remove();
    }

    /**
     * Метод который выщывается после удалении строки
     * @param {number} id - идентификатор удаляемого пользователя
     */
    onRemoved(id) {
      console.log(`Из таблицы удален пользователь ${id}`);
    }
  }

    window.ClearedTable = ClearedTable;
  })();

(function () {

  class Tooltip {

    /**
     * Имя компонента
     * @property {string}
     */
    get name() {
      return 'tooltip';
    }

    /**
     * Обязательный отступ
     */
    get indent() {
      return 5;
    }

    constructor() {
      /**
       * Данное свойство содержит ссылку на
       * елемент содержащий подсказку
       * @type {HTMLDivElement}
       */
      this.el = document.createElement('div');
      this.el.style.position = 'absolute';

      this.el.classList.add(this.name);
      document.body.appendChild(this.el);
    }

    /**
     * Метод подключает включает работу подсказок
     * на элементе
     *
     * @param {Element} root - элемент, внутри которого, нужно включить работу подсказок
     */
    attach(root) {
      let tooltipBlock = this.el;

      document.onmouseover = (ev) => {
        let target = ev.target,
          tooltipText = target.getAttribute('data-tooltip');
        if (!tooltipText) return;

        tooltipBlock.innerText = tooltipText;
        tooltipBlock.classList.add(`${this.name}_active`);

        let spanCoords = target.getBoundingClientRect(),
            tooltipCoords = tooltipBlock.getBoundingClientRect();

        this.el.style.left = `${spanCoords.left}px`;

        let top = spanCoords.bottom + this.indent;
        if (top + tooltipCoords.height > document.documentElement.clientHeight) {
          top = spanCoords.top - elCoords.height - this.indent;
        }
        this.el.style.top = `${top}px`;

      };
      document.onmouseout = (ev) => {
        tooltipBlock.classList.remove(`${this.name}_active`);
      };
    }

    /**
     * Удаляет все обработчики событий
     */
    detach() {
      document.onmouseover = (ev) => {
          ev.stopPropagation();
        }
      };
  }

    window.Tooltip = Tooltip;
})();
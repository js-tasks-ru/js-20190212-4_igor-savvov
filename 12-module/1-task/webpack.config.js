'use strict';
const path = require('path');

module.exports = {
    /**
     * Здесь должен быть описан ваш конфиг для сборки.
     * Для ссылки на текущую папку используйте встроенную переменную __dirname
     */
    entry: './modules/app.js',
    output: {
        path: path.resolve(__dirname, ''),
        filename: 'infex.js'
    }
};
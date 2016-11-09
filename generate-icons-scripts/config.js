'use strict';

let path = require('path');

module.exports = {
  iconsSourcePath: path.resolve(__dirname, '../src/client/icons'),
  iconsDestinationPath: path.resolve(__dirname, '../generate-icons-result'),
  baseComponentsPath: path.resolve(__dirname, './baseComponents')
};

'use strict';

let config = require('./config');
let iconsSourcePath  = config.iconsSourcePath;
let iconsDestinationPath  = config.iconsDestinationPath;
let baseComponentsPath = config.baseComponentsPath;

let generateIcons = require('./generate-icons');

generateIcons(iconsSourcePath, iconsDestinationPath, baseComponentsPath);

'use strict';

let fs = require('fs');
let fse = require('fs-extra');
let path = require('path');
let lodash = require('lodash');
let fsUtils = require('./fsUtils');

function renameComponentFiles(directory, oldName, componentName) {
  let files = fs.readdirSync(directory);
  files.map(file => {
    let filePath = path.join(directory, file);
    let fileNewName = file.replace(oldName, componentName);
    fs.renameSync(filePath, path.join(directory, fileNewName));
  });
}

function generateIndexFile(directory) {
  let directories = fs.readdirSync(directory);
  let indexFileContent = `module.exports = {
    ${directories.map(directory => `\n\t${directory}: require('./${directory}').default`)}
  }`;
  let indexFilePath = path.resolve(directory, './index.js');
  fs.writeFileSync(indexFilePath, indexFileContent);
};

function fixSVGSource(content) {
  let fixedSVGSource = content.replace(/fill\=("|').*("|')/gi, ''); // Fix hardcoded 'fill' property
  return fixedSVGSource;
}

function generateIcon(baseComponentsPath, iconsDestinationPath, fileName, svg) {
  svg = fixSVGSource(svg);
  let iconName = fileName.replace('.svg', '');
  let componentName = 'SVG' + lodash.startCase(iconName).replace(/ /g, '');

  let componentDirectory = path.join(iconsDestinationPath, componentName);

  let isComponentAlreadyExists = fs.existsSync(componentDirectory);
  if(isComponentAlreadyExists) {
    throw new Error(`File or directory ${componentDirectory} already exists.`);
  }

  let defaultComponentTemplateName = 'I';
  let defaultComponentTemplatePath = path.join(baseComponentsPath, defaultComponentTemplateName);

  fse.copySync(defaultComponentTemplatePath, componentDirectory);
  renameComponentFiles(componentDirectory, defaultComponentTemplateName, componentName);
  let filesToModify = fsUtils.findFilesByGlobs(componentDirectory, ['**/*']);

  let stringsToReplace = [
    {
      'old': /__jcatalog-react-app_component-name--uppercamel-case__/g,
      'new': componentName
    },
    {
      'old': /__jcatalog-react-app_component-name--kebab-case__/g,
      'new': lodash.kebabCase(componentName)
    },
    {
      'old': /__jcatalog-react-app_svg-content__/g,
      'new': svg
    }
  ];

  filesToModify.map(file => {
    if(!fs.statSync(file).isDirectory()) {
      stringsToReplace.map(replacer => {
        fsUtils.replaceIn(file, replacer.old, replacer.new);
      });
    }
  });
}

function generateIcons(iconsSourcePath, iconsDestinationPath, baseIconComponentPath) {
  let iconsFileNames = fs.readdirSync(iconsSourcePath);
  iconsFileNames.map(iconFileName => generateIcon(
    baseIconComponentPath,
    iconsDestinationPath,
    iconFileName,
    fs.readFileSync(path.resolve(iconsSourcePath, iconFileName), 'utf-8')
  ));
  generateIndexFile(iconsDestinationPath);
}

module.exports = generateIcons;

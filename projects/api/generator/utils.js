const fs = require('fs');

function trimClassName(ref) {
  return ref.replace('#/definitions/', '');
}

/**
 * converts WhatDaFuck -> whatDaFuck
 * @param {string} inputString
 */
function toCamelCase(inputString) {
  return `${inputString[0].toLowerCase()}${inputString.substring(1)}`;
}
/**
 * converts whatDaFuck -> WhatDaFuck
 * @param {string} inputString
 */
function toPascalCase(inputString) {
  return `${inputString[0].toUpperCase()}${inputString.substring(1)}`;
}
/**
 * converts 'asd_asd_asd' into 'asdasdasd'
 * @param {string} inputString
 */
function dropUnderscores(inputString) {
  return inputString.replace(/_/g, '');
}

/**
 * converts 'asd-asd-asd' into 'asdasdasd'
 * @param {string} inputString input value
 */
function dropHyphens(inputString) {
  return inputString.replace(/\-/g, '');
}

/**
 * adds -last field to last element of and object array
 * @param {Array<Object>} items
 */
function markLastItem(items) {
  // copy array
  const result = [...items];
  const index = result.length - 1;
  result[index]['-last'] = true;
  return result;
}

function writeFile(fileName, fileContent, resolve, reject) {
  fs.writeFile(fileName, fileContent, err => {
    if (err) {
      reject(err);
      return;
    }

    resolve();
  });
}

/**
 * Checks for folder presence and create one if needed
 * @param {string} dirName name of directory to create - absolute path
 * @returns {Promise<void>} once folder is created or exists rejects on error.
 */
function createFolder(dirName) {
  return new Promise((resolve, reject) => {
    fs.exists(dirName, exists => {
      if (exists) {
        resolve();
        return;
      }
      fs.mkdir(dirName, err => {
        if (err) {
          reject(err);
          return;
        }
        resolve();
      });
    });
  });
}

module.exports = {
  trimClassName,
  toCamelCase,
  toPascalCase,
  dropUnderscores,
  dropHyphens,
  markLastItem,
  writeFile,
  createFolder,
};

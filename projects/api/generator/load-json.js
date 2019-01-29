const fetch = require('node-fetch');
const { getModels, getApis, getVersion } = require('./parse-json');

/**
 * Function does heavy lifting of processing fetching swagger.json file and creating data for
 * both models and api services.
 * @param {string} url location of file. Used for web
 * @param {string} file location of file. In file system
 * @returns {Promise<{models: Object, apis:Object}, version:string>} prepared models.
 */
function loadSwaggerJSON(url, file) {
  const read = url ? readFileFromWeb(url) : readFileFromDisk(file);
  return read.then(dzejson => ({
    models: getModels(dzejson.definitions),
    apis: getApis(dzejson.paths),
    version: getVersion(dzejson.info),
  }));
}

/**
 * Swagger configuration can also be processed offline.
 * @param {string} filePath location of file. Can be relative or absolute
 * @returns {Promise<Object>} Promise which resolves to json content.
 */
function readFileFromDisk(filePath) {
  const fs = require('fs');
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (data, err) => {
      if (err) {
        reject(err);
        return;
      }
      try {
        const result = JSON.parse(data);
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  });
}

/**
 * Fetch swagger json from web and return its content
 * @param {string} url location of swagger.json file in web
 * @returns {Promise<Object>} Promise which resolves to json content.
 */
function readFileFromWeb(url) {
  return fetch(url).then(result => result.json());
}

module.exports = {
  loadSwaggerJSON,
};

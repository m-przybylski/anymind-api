const { toCamelCase, writeFile, markLastItem, createFolder } = require('./utils');
const Mustache = require('mustache');
const path = require('path');

function writeApiServices(apis, view, templates) {
  createFolder(path.resolve(__dirname, '..', 'src', 'api')).then(() => {
    return Promise.all(apis.map(api => writeApiService(api, view, templates)).concat(writeBarrelApi(apis, templates)));
  });
}

function writeBarrelApi(apis, templates) {
  const operations = apis.map(api => {
    return {
      classname: api.classname,
      classFilename: `${api.fileName}.service`,
    };
  });
  const modelView = {
    operations: markLastItem(operations),
  };

  return new Promise((resolve, reject) => {
    const modelFile = Mustache.render(templates['apis'], modelView, templates);
    templates['models'];
    writeFile(path.resolve(__dirname, '..', 'src', 'api', 'api.ts'), modelFile, resolve, reject);
  });
}

function writeApiService(api, view, templates) {
  return new Promise((resolve, reject) => {
    const apiView = { ...view, ...api };
    const apiFile = Mustache.render(templates['api.service'], apiView, templates);
    const fileName = `${toCamelCase(api.fileName)}.service.ts`;
    writeFile(path.resolve(__dirname, '..', 'src', 'api', fileName), apiFile, resolve, reject);
  });
}

module.exports = {
  writeApiServices,
};

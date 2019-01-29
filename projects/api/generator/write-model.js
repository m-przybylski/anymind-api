const Mustache = require('mustache');
const path = require('path');
const { createFolder, writeFile } = require('./utils');

function writeModels(models, view, templates) {
  createFolder(path.resolve(__dirname, '..', 'src', 'model')).then(() => {
    return Promise.all(
      models.map(model => writeModel(model, view, templates)).concat(writeBarrelModel(models, templates)),
    );
  });
}

function writeModel(model, view, templates) {
  return new Promise((resolve, reject) => {
    const modelView = { ...view, ...model };
    const modelFile = Mustache.render(templates['model'], modelView, templates);
    const fileName = `src/model/${model.classname[0].toLowerCase()}${model.classname.substring(1)}.ts`;
    writeFile(path.resolve(__dirname, '..', fileName), modelFile, resolve, reject);
  });
}

function writeBarrelModel(models, templates) {
  const modelView = {
    models: models.map(model => ({
      model: {
        classFilename: `${model.classname[0].toLowerCase()}${model.classname.substring(1)}`,
      },
    })),
  };

  return new Promise((resolve, reject) => {
    const modelFile = Mustache.render(templates['models'], modelView, templates);
    templates['models'];
    writeFile(path.resolve(__dirname, '..', 'src', 'model', 'model.ts'), modelFile, resolve, reject);
  });
}

module.exports = {
  writeModels,
};

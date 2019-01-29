const templateLoader = require('./load-files');
const loadJSON = require('./load-json');

const { writeModels } = require('./write-model');
const { writeApiServices } = require('./write-api');
const argv = require('minimist')(process.argv.slice(2));
const { updatePackageJson } = require('./write-package-json');

const view = {
  appName: 'AnyMind API',
  appDescription: 'Auto generated services',
};
const defaultSwaggerUrl = 'https://stage.anymind.com/api/docs/swagger/swagger.json';

let swaggerUrl = argv.url;
const swaggerFile = argv.file;

if (swaggerUrl == undefined && swaggerFile == undefined) {
  console.warn('no input provided falling back to default value');
  swaggerUrl = defaultSwaggerUrl;
}
const sth = [templateLoader.init('templates'), loadJSON.loadSwaggerJSON(swaggerUrl, swaggerFile)];

Promise.all(sth).then(([templates, data]) => {
  const version = data.version;
  const viewWithVersion = { ...view, version };
  writeModels(data.models, viewWithVersion, templates);
  writeApiServices(data.apis, viewWithVersion, templates);
  updatePackageJson({ version });
});

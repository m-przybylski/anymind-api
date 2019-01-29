const path = require('path');
const packageJson = require('../package.json');
const { writeFile } = require('./utils');
/**
 * bump package json file
 * @param {{version: string}} info object contains version number
 */
function updatePackageJson(info) {
  return new Promise((resolve, reject) => {
    const version = info.version;
    packageJson.version = version;
    writeFile(path.resolve(__dirname, '..', 'package.json'), JSON.stringify(packageJson, null, 2), resolve, reject);
  });
}

module.exports = { updatePackageJson };

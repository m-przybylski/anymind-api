const fs = require('fs');
const path = require('path');

/**
 * loads all templates from given directory
 * @param {string} dirName name of directory (optional)
 * @returns {Promise<{ [fileName:string]: string }>} something
 */
async function init(dirName) {
  const files = await readDirectory(dirName);
  const map = await buildTemplateMap(files, dirName);
  return map;
}

/**
 * loads all templates from given directory
 * @param {string} dirName name of directory (optional)
 * @returns {Promise<string[]>} list of files in templates directory
 */
function readDirectory(dirName) {
  return new Promise((resolve, reject) => {
    fs.readdir(path.resolve(__dirname, dirName) || '', 'utf8', (err, files) => {
      if (err) {
        reject(err);
        return;
      }
      if (dirName !== '' || dirName !== undefined) {
        resolve(files.map(file => `${dirName}/${file}`));
        return;
      }

      resolve(files);
    });
  });
}
/**
 * builds map of templateName: templateContent
 * @param {string[]} files list of files in template folder
 * @return {}
 */
function buildTemplateMap(files, dirName) {
  const result = files.map(file => readTemplate(file, dirName));
  return Promise.all(result).then(files => files.reduce((acc, curr) => ({ ...acc, ...curr }), {}));
}

/**
 * reads a file from disk
 * @param {string} fileName
 * @returns {Promise<{ [fileName:string]: string }>} file name and content of the file
 */
function readTemplate(fileName, dirName) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(__dirname, fileName), 'utf8', (err, content) => {
      if (err) {
        reject(err);
        return;
      }
      const name = fileName.replace(`${dirName}/`, '').replace('.mustache', '');
      resolve({ [name]: content });
    });
  });
}

module.exports = {
  init,
};

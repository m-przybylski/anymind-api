const getModels = require('./parse-models').getModels;
const getApis = require('./parse-endpoints').getApis;
const getVersion = require('./parse-version').getVersion;

module.exports = {
  getModels,
  getApis,
  getVersion,
};

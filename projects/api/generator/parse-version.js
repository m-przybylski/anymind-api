/**
 * pluck version from info model
 * @param {{ description: string, version: string, title: string, termsOfService: string}} info
 * @returns {string}
 */
function getVersion(info) {
  return info.version;
}

module.exports = { getVersion };

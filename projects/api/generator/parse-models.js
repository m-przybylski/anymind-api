const { dropUnderscores, toCamelCase, toPascalCase, trimClassName, markLastItem } = require('./utils');

const typeMap = {
  integer: 'number',
  string: 'string',
  array: items => {
    const type = getType(items);
    // overwrite datatype with ReadonlyArray
    type.datatype = `ReadonlyArray<${type.datatype}>`;
    return type;
  },
};

const formatMap = {
  'date-time': 'Date',
  int32: 'number',
  int64: 'number',
  double: 'number',
};

function getModels(definitions) {
  const types = Object.keys(definitions);
  const filteredTypes = types.filter(type => definitions[type].properties !== undefined);
  const models = filteredTypes.map(type => {
    const classDefinitions = getModel(definitions[type], type);
    return {
      classname: type,
      hasEnums: classDefinitions.vars.find(prop => prop.isEnum) !== undefined,
      model: classDefinitions.imports,
      vars: classDefinitions.vars,
    };
  });
  return models;
}

function getModel(definition, type) {
  const mapper = parseProperty(definition.required || [], type);
  const props = Object.keys(definition.properties);
  const mappedProps = props.map(prop => mapper(prop, definition.properties[prop]));
  const imports = mappedProps
    .map(prop => {
      if (prop.import != undefined && prop.filename != undefined) {
        return { classname: prop.import, filename: prop.filename };
      }
    })
    .filter(prop => prop != undefined)
    .reduce(
      (tsImportsList, tsImport) =>
        tsImportsList.find(tsImportsItem => tsImportsItem.classname === tsImport.classname) !== undefined
          ? tsImportsList
          : tsImportsList.concat(tsImport),

      [],
    );
  return { vars: mappedProps, imports };
}
/**
 * converts swagger definition into property object
 * @param {string[]} requiredList list of required fields
 */
function parseProperty(requiredList, classname) {
  return function(propName, propertyDetails) {
    const required = requiredList.includes(propName);
    const type = getType(propertyDetails, propName, classname);
    return { name: propName, ...type, required };
  };
}

function getType(propertyDetails, propName, classname) {
  /**
   * reference to different file
   */
  if (propertyDetails.$ref != undefined) {
    const datatype = trimClassName(propertyDetails.$ref);
    return {
      datatype,
      import: datatype,
      filename: toCamelCase(datatype),
    };
  }

  if (propertyDetails.enum != undefined) {
    const enumMapper = enumDefinition => ({
      name: toPascalCase(dropUnderscores(enumDefinition)),
      value: `'${enumDefinition}'`,
    });
    const result = {
      isEnum: true,
      datatypeWithEnum: `${classname}.${toPascalCase(propName)}Enum`,
      enumName: `${toPascalCase(propName)}Enum`,
      allowableValues: {
        enumVars: markLastItem(propertyDetails.enum.map(enumMapper)),
      },
    };
    return result;
  }
  if (typeof typeMap[propertyDetails.type] === 'function') {
    return typeMap[propertyDetails.type](propertyDetails.items);
  }
  if (propertyDetails.format !== undefined) {
    return { datatype: formatMap[propertyDetails.format] };
  }
  if (typeMap[propertyDetails.type] !== undefined) {
    return { datatype: typeMap[propertyDetails.type] };
  }
  return { datatype: propertyDetails.type };
}

module.exports = {
  getModels,
};

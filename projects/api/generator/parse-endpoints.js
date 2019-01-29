const { toPascalCase, dropHyphens, trimClassName } = require('./utils');

const typeMap = {
  integer: 'number',
  string: 'string',
};

function getApis(paths) {
  const pathsGroupedByTag = groupByTag(paths);
  const services = Object.keys(pathsGroupedByTag);
  return services.map(service => {
    const { operations, ...result } = pathsGroupedByTag[service];
    // can be removed if verification checked.
    operations.sort((a, b) => {
      if (a.operationId === b.operationId) {
        return 0;
      }

      if (a.operationId > b.operationId) {
        return 1;
      }

      if (a.operationId < b.operationId) {
        return -1;
      }
    });
    result.fileName = service;
    result.imports = getImports(pathsGroupedByTag[service]);
    result.operations = operations.map(mapEndpointDetails);
    return result;
  });
}

function groupByTag(paths) {
  const urls = Object.keys(paths);
  const methods = ['get', 'post', 'put', 'delete', 'patch'];
  const operations = urls
    .map(url => {
      return methods
        .map(httpMethod => ({ ...paths[url][httpMethod], httpMethod }))
        .filter(operationObj => operationObj.operationId !== undefined)
        .map(operationObj => ({
          ...operationObj,
          group: operationObj.tags[0],
          url,
        }));
    })
    .reduce((outerOperationList, innerOperationList) => outerOperationList.concat(innerOperationList), []);
  return operations.reduce((operationList, operation) => {
    const { group, ...trimmedOperation } = operation;
    if (operationList[operation.group]) {
      // group already exist need to append variable to the list of operations
      operationList[operation.group].operations.push(trimmedOperation);
    } else {
      operationList[operation.group] = {
        classname: `${toPascalCase(operation.group)}Service`,
        operations: [trimmedOperation],
      };
    }
    return operationList;
  }, {});
}

function mapEndpointDetails(operation) {
  const params = getParams(operation.parameters);
  return {
    ...params,
    httpMethod: operation.httpMethod,
    path: getPath(operation.url, operation.parameters),
    summary: operation.summary,
    nickname: operation.operationId,
    returnType: getResponseType(operation.responses),
    required: getRequired(operation.parameters),
  };
}

function getParams(params) {
  const paramsObj = {
    allParams: [],
    headerParams: [],
    queryParams: [],
    bodyParam: [],
  };
  params.forEach(param => {
    paramsObj.allParams.push({
      paramName: dropHyphens(param.name),
      description: param.description,
      required: param.required,
      dataType: getType(param.type || param.schema),
    });
    switch (param.in) {
      case 'body':
        paramsObj.bodyParam.push({ paramName: param.name });
        break;
      case 'header':
        paramsObj.headerParams.push({ paramName: dropHyphens(param.name), baseName: param.name });
        break;
      case 'query':
        paramsObj.queryParams.push({ paramName: param.name, baseName: param.name });
        break;
    }
  });
  if (paramsObj.allParams.length === 0) {
    return {};
  }

  if (paramsObj.bodyParam.length !== 0) {
    paramsObj.isBodyAllowed = true;
  }

  if (paramsObj.queryParams.length !== 0) {
    paramsObj.hasQueryParams = true;
  }

  return paramsObj;
}

function getPath(url, params) {
  return params
    .map(param => param.name)
    .reduce((accUrl, param) => {
      const pattern = new RegExp(`{${param}}`, 'g');
      return accUrl.replace(pattern, `\${encodeURIComponent(String(${param}))}`);
    }, url);
}

function getType(typeOrSchema) {
  if (typeOrSchema.$ref !== undefined) {
    return trimClassName(typeOrSchema.$ref);
  }
  if (typeOrSchema.type === 'array') {
    return `ReadonlyArray<${getType(typeOrSchema.items)}>`;
  }
  return typeMap[typeOrSchema];
}

function getResponseType(responses) {
  if (responses['200'] === undefined) {
    return undefined;
  }
  if (responses['200'].schema !== undefined) {
    responses['200'].schema; //?
    return { returnType: getType(responses['200'].schema) };
  }
  return undefined;
}

function getRequired(params) {
  return params
    .filter(param => param.required)
    .map(param => ({
      paramName: param.name,
    }));
}

function getImports(service) {
  const imports = service.operations
    .map(operation => {
      return operation.parameters
        .filter(parameter => parameter.schema !== undefined)
        .map(parameter => trimClassName(parameter.schema.$ref))
        .concat(getImportsFromResponsesObject(operation.responses));
    })
    .reduce((flatParams, parameter) => flatParams.concat(parameter))
    .reduce((importClasses, importClass) => {
      if (importClasses.includes(importClass)) return importClasses;
      importClasses.push(importClass);
      return importClasses;
    }, [])
    .map(tsImport => ({
      classname: tsImport,
    }));
  return Array.from(new Set(imports));
}

function getImportsFromResponsesObject(responses) {
  return Object.keys(responses)
    .filter(key => responses[key].schema !== undefined)
    .map(key => {
      if (responses[key].schema !== undefined) {
        if (responses[key].schema.type === 'array') {
          return trimClassName(responses[key].schema.items.$ref);
        }
        return trimClassName(responses[key].schema.$ref);
      }
    });
}

module.exports = {
  getApis,
};

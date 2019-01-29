const getApis = require('../scripts/parse-endpoints').getApis;

describe('getApis', () => {
  beforeEach(() => {});

  it('should do magic', () => {
    const input = {
      '/api/accounts/exists/email/{email}': {
        get: {
          tags: ['account'],
          summary: 'Check if email is taken',
          description: '',
          operationId: 'getAccountEmailExistsRoute',
          parameters: [
            {
              name: 'email',
              in: 'path',
              description: 'Email',
              required: true,
              type: 'string',
            },
          ],
          responses: {
            '200': {
              description: 'Email exists',
            },
            '404': {
              description: 'Email does not exist',
            },
          },
        },
      },
      '/api/accounts/{accountId}': {
        patch: {
          tags: ['account'],
          summary: 'Partial update account',
          description: '',
          operationId: 'patchUpdateAccountRoute',
          parameters: [
            {
              name: 'accountId',
              in: 'path',
              description: 'Account ID',
              required: true,
              type: 'string',
            },
            {
              in: 'body',
              name: 'body',
              description: 'Account to update',
              required: true,
              schema: {
                $ref: '#/definitions/PatchAccount',
              },
            },
          ],
          responses: {
            '200': {
              description: 'successful operation',
              schema: {
                $ref: '#/definitions/Account',
              },
            },
          },
        },
      },
    };

    const expected = [
      {
        classname: 'AccountService',
        fileName: 'account',
        imports: [
          {
            classname: 'PatchAccount',
          },
          {
            classname: 'Account',
          },
        ],
        operations: [
          {
            httpMethod: 'get',
            path: '/api/accounts/exists/email/{email}',
            summary: 'Check if email is taken',
            nickname: 'getAccountEmailExistsRoute',
            allParams: [
              {
                paramName: 'email',
                description: 'Email',
                required: true,
                dataType: 'string',
              },
            ],
            returnType: undefined,
            required: [{ paramName: 'email' }],
          },
          {
            httpMethod: 'patch',
            path: '/api/accounts/{accountId}',
            summary: 'Partial update account',
            nickname: 'patchUpdateAccountRoute',
            allParams: [
              {
                paramName: 'accountId',
                description: 'Account ID',
                dataType: 'string',
                required: true,
              },
              {
                paramName: 'body',
                description: 'Account to update',
                dataType: 'PatchAccount',
                required: true,
              },
            ],
            returnType: {
              returnType: 'Account',
            },
            required: [{ paramName: 'accountId' }, { paramName: 'body' }],
          },
        ],
      },
    ];

    const result = getApis(input);
    result[0].operations[0].required; //?
    expect(result).to.deep.equal(expected);
  });

  it('should map input array', () => {
    const input = {
      '/api/accounts/settings/countries': {
        get: {
          tags: ['account'],
          summary: 'Get all supported countries',
          description: '',
          operationId: 'getSupportedCountriesRoute',
          parameters: [],
          responses: {
            '200': {
              description: 'successful operation',
              schema: {
                type: 'array',
                items: {
                  $ref: '#/definitions/Country',
                },
              },
            },
          },
        },
      },
    };

    const expected = [
      {
        classname: 'AccountService',
        fileName: 'account',
        imports: [
          {
            classname: 'Country',
          },
        ],
        operations: [
          {
            httpMethod: 'get',
            path: '/api/accounts/settings/countries',
            summary: 'Get all supported countries',
            nickname: 'getSupportedCountriesRoute',
            allParams: [],
            returnType: {
              returnType: 'ReadonlyArray<Country>',
            },
            required: [],
          },
        ],
      },
    ];

    const result = getApis(input);
    expect(result).toEqual(expected);
  });
});

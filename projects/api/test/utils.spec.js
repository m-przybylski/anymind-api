const utils = require('../scripts/utils');
describe('utils', () => {
  describe('trimClassName', () => {
    it('should remove "#/definitions/" from reference string', () => {
      const input = {
        $ref: '#/definitions/FakeClass',
      };
      expect(utils.trimClassName(input)).toEqual('FakeClass');
    });
  });
});

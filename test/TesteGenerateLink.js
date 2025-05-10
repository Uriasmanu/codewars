const { assert } = require('chai');

describe('Example tests', () => {
  describe('Fixed Tests', () => {
    it("Basic Tests", () => {
      assert.strictEqual(generateLink('matt c'),'http://www.codewars.com/users/matt%20c');
      assert.strictEqual(generateLink('g964'),'http://www.codewars.com/users/g964');
      assert.strictEqual(generateLink('GiacomoSorbi'),'http://www.codewars.com/users/GiacomoSorbi');
      assert.strictEqual(generateLink('ZozoFouchtra'),'http://www.codewars.com/users/ZozoFouchtra');
      assert.strictEqual(generateLink('colbydauph'),'http://www.codewars.com/users/colbydauph');
    });
  });
});

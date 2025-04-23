const { Distinct } = require('../Distinct');
const { assert } = require('chai');
const chai = require('chai')

chai.config.truncateThreshold=0;

describe("Sample Tests", () => {
  it("test", () => {
    assert.deepEqual(Distinct([1]), [1]);
    assert.deepEqual(Distinct([1,2]), [1,2]);
    assert.deepEqual(Distinct([1,1,2]), [1,2]);
  });
});
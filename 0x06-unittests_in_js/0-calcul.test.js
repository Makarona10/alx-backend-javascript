const assert = require('assert');
const calculateNumber = require('./0-calcul');
describe('calculateNumber', function() {
  it('', function() {
    assert.strictEqual(calculateNumber(1.0, 3.0), 4);
  })
  it('', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  })
  it('', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  })
  it('', function() {
    assert.strictEqual(calculateNumber(1.9, 3.2), 5);
  })
  it('', function() {
    assert.strictEqual(calculateNumber(1.1, 3.3), 5);
  })
  it('', function() {
    assert.strictEqual(calculateNumber(1.65484, 3.1355), 5);
  })
});

const assert = require('assert');
const calculateNumber = require('./1-calcul');
describe('calculateNumber', () => {
    describe('type == "SUM"', () => {
      it('', () => {
        assert.equal(calculateNumber('SUM', 2.0, 2.0), 4);
      });
  
      it('', () => {
        assert.equal(calculateNumber('SUM', 2.3, 1.8), 4);
      });
  
      it('', () => {
        assert.equal(calculateNumber('SUM', -2.0, -2.0), -4);
      });
  
      it('', () => {
        assert.equal(calculateNumber('SUM', -2.3, -1.8), -4);
      });
  
      it('', () => {
        assert.equal(calculateNumber('SUM', -2.0, 2.0), 0);
      });
  
      it('', () => {
        assert.equal(calculateNumber('SUM', 2.0, -2.0), 0);
      });
  
      it('', () => {
        assert.equal(calculateNumber('SUM', 0.0, 0.0), 0);
      });
    });
  
    describe('type == "SUBTRACT"', () => {
      it('', () => {
        assert.equal(calculateNumber('SUBTRACT', 2.0, 2.0), 0);
      });
  
      it('', () => {
        assert.equal(calculateNumber('SUBTRACT', 2.3, 1.8), 0);
      });
  
      it('', () => {
        assert.equal(calculateNumber('SUBTRACT', -2.0, -2.0), 0);
      });
  
      it('', () => {
        assert.equal(calculateNumber('SUBTRACT', -2.3, -1.8), 0);
      });
  
      it('', () => {
        assert.equal(calculateNumber('SUBTRACT', -2.0, 2.0), -4.0);
      });
  
      it('', () => {
        assert.equal(calculateNumber('SUBTRACT', 2.0, -2.0), 4.0);
      });
  
      it('', () => {
        assert.equal(calculateNumber('SUBTRACT', 0.0, 0.0), 0);
      });
    });
  
    describe('type == "DIVIDE"', () => {
      it('', () => {
        assert.equal(calculateNumber('DIVIDE', 8.0, 2.0), 4.0);
      });
  
      it('', () => {
        assert.equal(calculateNumber('DIVIDE', -7.0, 2.0), -3.5);
      });
  
      it('', () => {
        assert.equal(calculateNumber('DIVIDE', 7.0, -2.0), -3.5);
      });
  
      it('', () => {
        assert.equal(calculateNumber('DIVIDE', -7.0, -2.0), 3.5);
      });
  
      it('', () => {
        assert.equal(calculateNumber('DIVIDE', 2.0, 2.0), 1);
      });
  
      it('', () => {
        assert.equal(calculateNumber('DIVIDE', -2.0, -2.0), 1);
      });
  
      it('', () => {
        assert.equal(calculateNumber('DIVIDE', 2.6, 3.0), 1);
      });
  
      it('', () => {
        assert.equal(calculateNumber('DIVIDE', 2.4, 2.0), 1);
      });
  
      it('', () => {
        assert.equal(calculateNumber('DIVIDE', 0.0, 5.0), 0);
      });
  
      it('', () => {
        assert.equal(calculateNumber('DIVIDE', 0.0, -5.0), -0);
      });
  
      it('', () => {
        assert.equal(calculateNumber('DIVIDE', 5.0, 0), 'Error');
      });
  
      it('', () => {
        assert.equal(calculateNumber('DIVIDE', 5.0, 0.2), 'Error');
      });
  
      it('', () => {
        assert.equal(calculateNumber('DIVIDE', 5.0, -0.2), 'Error');
      });
  
      it('', () => {
        assert.equal(calculateNumber('DIVIDE', -5.0, 0), 'Error');
      });
  
      it('', () => {
        assert.equal(calculateNumber('DIVIDE', -5.0, 0.2), 'Error');
      });
  
      it('', () => {
        assert.equal(calculateNumber('DIVIDE', -5.0, -0.2), 'Error');
      });
  
      it('', () => {
        assert.equal(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
      });
    });
  });
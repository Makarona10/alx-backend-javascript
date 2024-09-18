const { expect } = require('chai');
const calculateNumber = require('./2-calcul');
describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('', () => {
      expect(calculateNumber('SUM', 2.0, 2.0)).to.be.equal(4);
    });
  
    it('', () => {
      expect(calculateNumber('SUM', 2.3, 1.8)).to.be.equal(4);
    });
  
    it('', () => {
      expect(calculateNumber('SUM', -2.0, -2.0)).to.be.equal(-4);
    });
  
    it('', () => {
      expect(calculateNumber('SUM', -2.3, -1.8)).to.be.equal(-4);
    });
  
    it('', () => {
      expect(calculateNumber('SUM', -2.0, 2.0)).to.be.equal(0);
    });
  
    it('', () => {
      expect(calculateNumber('SUM', 2.0, -2.0)).to.be.equal(0);
    });
  
    it('', () => {
      expect(calculateNumber('SUM', 0.0, 0.0)).to.be.equal(0);
    });
  });
  
  describe('type == "SUBTRACT"', () => {
    it('', () => {
      expect(calculateNumber('SUBTRACT', 2.0, 2.0)).to.be.equal(0);
    });
  
    it('', () => {
      expect(calculateNumber('SUBTRACT', 2.3, 1.8)).to.be.equal(0);
    });
  
    it('', () => {
      expect(calculateNumber('SUBTRACT', -2.0, -2.0)).to.be.equal(0);
    });
  
    it('', () => {
      expect(calculateNumber('SUBTRACT', -2.3, -1.8)).to.be.equal(0);
    });
  
    it('', () => {
      expect(calculateNumber('SUBTRACT', -2.0, 2.0), -4.0).to.be.equal(-4.0);
    });
  
    it('', () => {
      expect(calculateNumber('SUBTRACT', 2.0, -2.0), -4.0).to.be.equal(-4.0);
    });
  
    it('', () => {
      expect(calculateNumber('SUBTRACT', 0.0, 0.0), 0).to.be.equal(0);
    });
    });
  
  describe('type == "DIVIDE"', () => {
    it('', () => {
      expect(calculateNumber('DIVIDE', 8.0, 2.0), 4.0).to.be.equal(4.0);
    });
  
    it('', () => {
      expect(calculateNumber('DIVIDE', -7.0, 2.0)).to.be.equal(-3.5);
    });
  
    it('', () => {
      expect(calculateNumber('DIVIDE', 7.0, -2.0)).to.be.equal(-3.5);
    });
  
    it('', () => {
      expect(calculateNumber('DIVIDE', -7.0, -2.0)).to.be.equal(3.5);
    });
  
    it('', () => {
      expect(calculateNumber('DIVIDE', 2.0, 2.0)).to.be.equal(1);
    });
  
    it('', () => {
      expect(calculateNumber('DIVIDE', -2.0, -2.0)).to.be.equal(1);
    });
  
    it('', () => {
      expect(calculateNumber('DIVIDE', 2.6, 3.0)).to.be.equal(1);
    });
  
    it('', () => {
      expect(calculateNumber('DIVIDE', 2.4, 2.0)).to.be.equal(1);
    });
  
    it('', () => {
      expect(calculateNumber('DIVIDE', 0.0, 5.0)).to.be.equal(0);
    });
  
    it('', () => {
      expect(calculateNumber('DIVIDE', 0.0, -5.0)).to.be.equal(0);
    });
  
    it('', () => {
      expect(calculateNumber('DIVIDE', 5.0, 0)).to.be.equal('Error');
    });
  
    it('', () => {
      expect(calculateNumber('DIVIDE', 5.0, 0.2)).to.be.equal('Error');
    });
  
    it('', () => {
      expect(calculateNumber('DIVIDE', 5.0, -0.2)).to.be.equal('Error');
    });
  
    it('', () => {
      expect(calculateNumber('DIVIDE', -5.0, 0)).to.be.equal('Error');
    });
  
    it('', () => {
     expect(calculateNumber('DIVIDE', -5.0, 0.2)).to.be.equal('Error');
    });
  
    it('', () => {
      expect(calculateNumber('DIVIDE', -5.0, -0.2)).to.be.equal('Error');
    });
  
    it('', () => {
      expect(calculateNumber('DIVIDE', 0.0, 0.0)).to.be.equal('Error');
    });
  });
});

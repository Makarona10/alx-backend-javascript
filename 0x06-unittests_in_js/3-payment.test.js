const expect = require('chai').expect;
const sinon = require('sinon');
const Utils = require('./utils')
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('', () => {
    const controller = sinon.spy(Utils);
  
    sendPaymentRequestToApi(100, 20);
    expect(controller.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(controller.calculateNumber.callCount).to.be.equal(1);
    controller.calculateNumber.restore();
  });
});

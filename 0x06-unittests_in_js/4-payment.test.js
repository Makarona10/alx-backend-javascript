const expect = require('chai').expect;
const sinon = require('sinon');
const Utils = require('./utils')
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('', () => {
    const _stub = sinon.stub(Utils, 'calculateNumber');
    const consol = sinon.spy(console);
    
    _stub.returns(10)
    sendPaymentRequestToApi(100, 20);
    expect(_stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(_stub.callCount).to.be.equal(1);
    expect(consol.log.calledWith('The total is: 10')).to.be.true;
    expect(consol.log.callCount).to.be.equal(1);
    _stub.restore();
    consol.log.restore();
  });
});

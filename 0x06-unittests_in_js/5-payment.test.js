const expect = require('chai').expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consol;

  beforeEach(() => {
    if (!consol) {
        consol = sinon.spy(console);
    }
  });

  afterEach(() => {
    consol.log.resetHistory();
  });

  it('', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consol.log.calledWith('The total is: 120')).to.be.true;
    expect(consol.log.calledOnce).to.be.true;
  });

  it('', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consol.log.calledWith('The total is: 20')).to.be.true;
    expect(consol.log.calledOnce).to.be.true;
  });
});

var expect = require('chai').expect

describe('Test1 true=true', () => {
  it('should pass', () => {
    expect(true).to.equal(true)
  });
});

describe('Test2 "true"=true', () => {
  it('should have h1 that says Users', (done) => {
      expect("true").to.equal(true)
      done()
  })
})

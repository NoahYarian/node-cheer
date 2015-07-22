var should = require('chai').should();
var cp = require('child_process');

describe('Mocha + Chai', function () {
  it('truthyness', function () {
    true.should.be.true;
    false.should.be.false;
  });
});

describe('CLI', function () {
  it('should cheer my name', function (done) {
    cp.execFile('./app.js', ['Noah'], function(err, stdout) {
      stdout.should.equal("Give me an N!\nGive me an o!\nGive me an a!\nGive me an h!\nWhat's that spell?\nNoah!!\n");
      done();
    });
  });
  it('should handle spaces', function (done) {
    cp.execFile('./app.js', ['Noah', 'Yarian'], function(err, stdout) {
      stdout.should.equal("Give me an N!\nGive me an o!\nGive me an a!\nGive me an h!\nGive me a Y!\nGive me an a!\nGive me an r!\nGive me an i!\nGive me an a!\nGive me an n!\nWhat's that spell?\nNoah Yarian!!\n");
      done();
    });
  });
});

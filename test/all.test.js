var _ = require("lodash"),
  expect = require("expect.js"),
  parser = require("../lib/dox-docco");

describe("dox-docco basics", function () {

  it("should fail with invalid options", function (done) {
    parser({}, function (err, data) {
      expect(err.message).to.equal("No buffer specified. Aborting.");
      done();
    });
  });

  it("should work with empty input", function (done) {
    parser({
      buffer: ""
    }, function (err, data) {
      expect(err).to.equal(null);
      expect(data).to.be.ok();
      done();
    });
  });

});
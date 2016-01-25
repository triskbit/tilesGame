'use strict';

describe('Service: levelService', function () {

  // load the service's module
  beforeEach(module('tilesApp'));

  // instantiate service
  var levelService;
  beforeEach(inject(function (_levelService_) {
    levelService = _levelService_;
  }));

  it('should do something', function () {
    expect(!!levelService).toBe(true);
  });

});

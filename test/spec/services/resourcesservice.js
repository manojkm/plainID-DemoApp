'use strict';

describe('Service: ResourcesService', function () {

  // load the service's module
  beforeEach(module('demoApp'));

  // instantiate service
  var ResourcesService;
  beforeEach(inject(function (_ResourcesService_) {
    ResourcesService = _ResourcesService_;
  }));

  it('should do something', function () {
    expect(!!ResourcesService).toBe(true);
  });

});

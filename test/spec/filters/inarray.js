'use strict';

describe('Filter: inArray', function () {

	// load the filter's module
	beforeEach(module('demoApp'));
	
	// initialize a new instance of the filter before each test
	var inArray;
	beforeEach(inject(function ($filter) {
		inArray = $filter('inArray');
	}));
	
	it('passes if arrays are equal', function () {
		expect( inArray([{id: 1}, {id: 2}], [1], 'id') ).toEqual( [{id: 1}] );
	});

});

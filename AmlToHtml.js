var AMLTranslator = (function () {
	
	var amlDict = {
		'^': 'openingElement',
		'!': 'closingElement',
		'%': 'STRONG',
		'~': 'EM'
	};
	// The main function that accepts the test cases
	var translate = function(input) {
		return input;
	};

	return { "translate": translate };
}());

if(module.exports) {
	module.exports = AMLTranslator;
}
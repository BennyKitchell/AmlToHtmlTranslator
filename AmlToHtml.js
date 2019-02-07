var AMLTranslator = (function () {
	// This will act as a traditional stack data structure
	// Since JS doesnt support stacks, we will use an array and just push and pop accordingly
	var elementStack = [];

	// aml dictionary for easier lookup for translating
	// alternatively we could include another dictionary for other translations
	var amlDict = {
		'^': 'openingElement',
		'!': 'closingElement',
		'%': 'STRONG',
		'~': 'EM'
	};

	// The main function that accepts the test cases
	var translate = function(input) {
		var output = [];
		// Split the input
		var amlArray = input.split('');
		// search through the array each character in the string
		amlArray.forEach( function(element, index) {
			// get the next element
			var nextElement = amlArray[index+1];
			//get the element two down
			var elementAfterNext = amlArray[index+2];

		});
		
		return input;
	};

	// This function will be used for translating aml to html
	// Alternatively we could have other functions for different translations
	var amlToHtml = function(nextElement, elementAfterNext){
		
	}

	return { "translate": translate };
}());

if(module.exports) {
	module.exports = AMLTranslator;
}
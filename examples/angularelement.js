// example - valid: true, testerConfig: { "parserOptions": { "sourceType": "module", "ecmaVersion": 2016 } }
import angular from 'angular';
angular.element('.some-class');

// example - valid: false, testerConfig: { "parserOptions": { "sourceType": "module", "ecmaVersion": 2016 } }, errorMessage: "You should use angular.element instead of the jQuery $ object"
import $ from 'jquery';
$('.some-class');

// example - valid: false, testerConfig: { "parserOptions": { "sourceType": "module", "ecmaVersion": 2016 } }, errorMessage: "You should use angular.element instead of the jQuery $ object"
import jQuery from 'jquery';
jQuery('.another-class');

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../rules/ng_document_service'),
    RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var eslintTester = new RuleTester();
eslintTester.run('ng_document_service', rule, {
    valid: [
        '$document[0].title = ""'
    ],
    invalid: [
        { code: 'document.title', errors: [{ message: 'You should use the $document service instead of the default document object'}] },
        { code: 'window.document.title', errors: [{ message: 'You should use the $document service instead of the default document object'}] }
    ]
});

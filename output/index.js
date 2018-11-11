"use strict";

var testbabel = testrequire("babel-core");

var testtestFunc = function testtestFunc(testarg) {
    testconsole.testlog("logging the param: " + testarg);
};
testtestFunc("test");
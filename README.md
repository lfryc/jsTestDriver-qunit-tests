JSTD QUnit Runner
=================

Checking out
------------

To start with the project, you need to check out source repositories
including qUnit and runner code.

    git clone git://github.com/lfryc/jsTestDriver-qunit-tests.git
    cd jsTestDriver-qunit-tests/
    git submodule init
    git submodule update


Running tests for QUnit 
-----------------------

### Starting JSTD server

To kick-off the tests, you need first start JSTD server:

    java -jar JsTestDriver.jar --config qunit.jstd --port 9876

You should see following output in the server's console:

    setting runnermode QUIET

### Capturing browser

Then open the browser and point to the following URL:

    http://localhost:9876/capture

You should see the page with green header saying:

    JsTestDriver
    Last:1335179901788 | Next:1994 | Server:Waiting...

### Running tests

Finally, you can instruct the JSTD server to load the tests:

    java -jar JsTestDriver.jar --config qunit.jstd --reset; java -jar JsTestDriver.jar --config qunit.jstd --tests all

The expected output:

    setting runnermode QUIET
    Chrome: Reset
    Chrome: Reset
    setting runnermode QUIET
    ....................................................
    Total 52 tests (Passed: 52; Fails: 0; Errors: 0) (0.00 ms)
      Chrome 18.0.1025.151 Linux: Run 52 tests (Passed: 52; Fails: 0; Errors 0) (0.00 ms)
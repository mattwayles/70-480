module('Qunit Test Suite', { setup: function () { initialize(); } });

test("Initialize Test", function () {
    expect(2);
    var expected = '0';
    equal($('#txtInput').val(), expected, 'Expected value: ' + expected + ' Actual Value: ' +  $('#txtInput').val());
    equal($('#txtResult').val(), expected, 'Expected value: ' + expected + ' Actual Value: ' + $('#txtResult').val());
});
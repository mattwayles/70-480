test("Object Literal Test", function () {
    expect(2);
    var car1 = getVehicle(2000, 'Ford', 'Fusion');
    var car2 = getVehicle(2010, 'BMW', 'Z4');
    var expected = 'Vehicle: 2000 Ford Fusion';
    var actual = car1.getInfo();
    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
    var expected = 'Vehicle: 2010 BMW Z4';
    var actual = car2.getInfo();
    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
});

test("Function Test", function () {
    expect(2);
    var car1 = new Vehicle(2000, 'Ford', 'Fusion');
    var car2 = new Vehicle(2010, 'BMW', 'Z4');
    var expected = 'Vehicle: 2000 Ford Fusion';
    var actual = car1.getInfo();
    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
    var expected = 2000;
    var actual = year;
    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
});

test("Function Replacement Test", function () {
    expect(2);
    var car1 = new Vehicle(2000, 'Ford', 'Fusion');
    var car2 = new Vehicle(2010, 'BMW', 'Z4');
    car1.getInfo = function () {
        return 'This is a car';
    }
    var expected = 'This is a car';
    var actual = car1.getInfo();
    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
    var expected = 'This is a car';
    var actual = car2.getInfo();
    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
});

test("Prototype Test", function () {
    expect(2);
    var car1 = new Vehicle(2000, 'Ford', 'Fusion');
    var car2 = new Vehicle(2010, 'BMW', 'Z4');
    var expected = 'Vehicle: 2000 Ford Fusion';
    var actual = car1.getInfo();
    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
    var expected = 'Vehicle: 2010 BMW Z4';
    var actual = car2.getInfo();
    equal(actual, expected, 'Expected value: ' + expected + ' Actual value: ' + actual);
});
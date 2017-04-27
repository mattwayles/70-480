var greeting = "Hello World";
test("A Hello World Test", 1, function () {
    equal(greeting, "Hello World", "Expect greeting of hello world");
});
function areaOfPizzaSlice(diameter, slicesPerPizza) {
    return areaOfPizza(diameter) / slicesPerPizza;
    function areaOfPizza(diameter) {
        var radius = diameter / 2;
        return 3.141592 * radius * radius;
    }
}

test("Area of a pizza slice", 1, function () {
    equal(areaOfPizzaSlice(18, 8), 31.808619, 'Expected 31.808619');
});
//Dynamic Object Creation
function getVehicle(theYear, theMake, theModel) {
    var vehicle = new Object();
    vehicle.year = theYear;
    vehicle.make = theMake;
    vehicle.model = theModel;
    vehicle.getInfo = function () {
        return 'Vehicle: ' + this.year + ' ' + this.make + ' ' + this.model;
    };
    return vehicle;
}

/*Constructor function
function Vehicle(theYear, theMake, theModel) {
    var year = theYear;
    var make = theMake;
    var model = theModel;
    this.getInfo = function () {
        return 'Vehicle: ' + year + ' ' + make + ' ' + model;
    }
}
*/

//Prototype function
function Vehicle(theYear, theMake, theModel) {
    this.year = theYear;
    this.make = theMake;
    this.model = theModel;
}
Vehicle.prototype.getInfo = function () {
    return 'Vehicle: ' + this.year + ' ' + this.make + ' ' + this.model;
}

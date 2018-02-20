function Car (desc) {
    this.desc = desc;
    this.color = "red";
}
Car.prototype = {
    getInfo: function() {
        return 'A ' + this.color + ' ' + this.desc + '.';
    }
};
//instantiate object using the constructor function
var car = Object.create(Car.prototype);
car.color = "blue";
alert(car.getInfo());
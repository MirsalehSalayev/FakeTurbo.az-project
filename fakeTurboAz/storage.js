
function Storage() {
    Storage.prototype.addCarToS = function (newCar) {
        let cars = this.getCarsFromS();
        cars.push(newCar);

        localStorage.setItem("cars", JSON.stringify(cars));


    }
    Storage.prototype.getCarsFromS = function () {
        let cars;
        if (localStorage.getItem("cars") === null) {
            cars = [];
        } else {
            cars = JSON.parse(localStorage.getItem("cars"));
        }
        return cars;
    }
}
Storage.prototype.deleteCarFromS = function (carTitle) {
    let cars = this.getCarsFromS();
    cars.forEach(function (car, index) {
        cars.splice(index, 1);
        localStorage.setItem("cars", JSON.stringify(cars));
    });

}
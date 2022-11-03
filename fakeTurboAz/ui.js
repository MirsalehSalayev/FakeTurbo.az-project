function UI() {

}
UI.prototype.addCarToUI = function (newCar) {


    const carList = document.getElementById("cars");
    carList.innerHTML += `
        <tr>
            <td><img src="${newCar.url}" class="img-fluid img-thumbnail"></td>
            <td>${newCar.title}</td>
            <td>${newCar.price}</td>
            <td><a href="#" id = "delete-car" class = "btn btn-danger">Aracı Sil</a></td>
        </tr>
    
    `
}
UI.prototype.clearInputs = function (input1, input2, input3) {
    input1.value = "";
    input2.value = "";
    input3.value = "";

}
UI.prototype.displayMessage = function (message, type) {
    const cardBody = document.querySelector(".card-body");
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;
    cardBody.appendChild(div);
    setTimeout(function () {
        div.remove();
    }, 1000)

}
UI.prototype.loadAllCars = function (cars) {
    const carList = document.getElementById("cars");
    cars.forEach(function (car) {
        carList.innerHTML += `<tr>
            <td><img src="${car.url}" class="img-fluid img-thumbnail"></td>
            <td>${car.title}</td>
            <td>${car.price}</td>
            <td><a href="#" id = "delete-car" class = "btn btn-danger">Maşını sil</a></td>
        </tr>`
    });
}
UI.prototype.deleteCarFromUI = function (element) {
    element.parentElement.parentElement.remove();



}

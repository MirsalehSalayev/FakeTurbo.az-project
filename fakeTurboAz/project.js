
const form = document.getElementById("car-form");
const titleELement = document.querySelector("#title");
const priceElement = document.querySelector("#price");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];


const ui = new UI();
const storage = new Storage();


eventListeners();

function eventListeners() {
    form.addEventListener("submit", addCar);
    document.addEventListener("DOMContentLoaded", function () {
        let cars = storage.getCarsFromS();
        ui.loadAllCars(cars);
    });
    cardBody.addEventListener("click", deleteCar);

}
function addCar(e) {
    const title = titleELement.value;
    const price = priceElement.value;
    const url = urlElement.value;

    if (title === "" || price === "" || url === "") {
        ui.displayMessage("boşluğları doldurun", "danger")


    } else {
        const newCar = new Car(title, price, url);
        ui.addCarToUI(newCar);
        storage.addCarToS(newCar);

        ui.displayMessage("maşın qeydiyyatdan keçdi", "success")

    }
    ui.clearInputs(titleELement, priceElement, urlElement)

    e.preventDefault();

}
function deleteCar(e) {
    if (e.target.id === "delete-car") {
        ui.deleteCarFromUI(e.target);
        storage.deleteCarFromS(e.target.parentELement.parentELement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessage("silindi", "Success");
    }

}


import CarService from "./CarService.js"

let carService = new CarService()

export default class CarController {

 constructor() {

 }

 addCar(triggeredEvent) {
  triggeredEvent.preventDefault();
  let formData = triggeredEvent.target
  console.log(triggeredEvent.target)
 }
}
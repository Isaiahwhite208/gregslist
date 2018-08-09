import CarController from "./app/components/car/CarController.js"

export default class app {
 constructor() {
  this.controllers = {
   carController: new CarController()
  }
 }
}
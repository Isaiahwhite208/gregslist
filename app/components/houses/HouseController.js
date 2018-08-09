import HouseService from "./HouseService.js";

let houseService = new HouseService()

function drawHouses() {
  let houses = houseService.getHouses()
  let template = ''

  for (let i = 0; i < houses.length; i++) {
    const house = houses[i];
    template += `
    <div style="outline: 1px solid black" class="col-3">
        <p>Make: ${house.make}</p>
        <p>${house.builder}</p>
        <p>${house.price}</p>
        <p>${house.year}</p>
        <p>${house.stories}</p>
        <img src="${house.imgUrl}" alt="somethingelse">
    </div>
    `
  }

  document.getElementById('houses').innerHTML = template


}

export default class HouseController {

  constructor() {
    drawHouses()
  }

  addHouse(triggeredEvent) {
    triggeredEvent.preventDefault();
    let formData = triggeredEvent.target
    houseService.addHouse(formData)
    formData.reset()
    drawHouses()
  }

}
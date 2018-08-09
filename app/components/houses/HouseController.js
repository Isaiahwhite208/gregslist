import HouseService from "./HouseService.js";

let houseService = new HouseService()

function drawHouses() {
  let houses = houseService.getHouses()
  let template = ''

  for (let i = 0; i < houses.length; i++) {
    const house = houses[i];
    template += `
    <div style="outline: 1px solid black" class="col-3">
        <p>Builder: ${house.builder}</p>
        <p>Price: ${house.price}</p>
        <p>Year Built: ${house.year}</p>
        <p>Stories: ${house.stories}</p>
        <p> Sqr Ft: ${house.squareFt}</p>
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
import House from '../../models/House.js'

let house = []

export default class HouseService {
  constructor() {

  }

  getHouses() {
    let housesCopy = []

    house.forEach(house => {
      housesCopy.push(new House(
        house.builder,
        house.year,
        house.price,
        house.stories,
        house.squareFt,
        house.imgUrl
      ))
    })
    return housesCopy
  }

  addHouse(formData) {
    let newHouse = new House(
      formData.builder.value,
      formData.year.value,
      formData.price.value,
      formData.stories.value,
      formData.squareFt.value,
      formData.imgUrl.value
    )
    house.push(newHouse)
    console.log(house)

  }
}
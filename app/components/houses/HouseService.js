import House from '../../models/House.js'

let house = []

export default class HouseService {
  constructor() {

  }

  getHouses() {
    let housesCopy = []

    //same as below
    // for (let i = 0; i < houses.length; i++) {
    //   const house = houses[i];

    // }

    // this is just saying for each 'house'
    //  in the whole houses array do whatever is in the code block 
    house.forEach(house => {
      housesCopy.push(new House(
        house.make,
        house.builder,
        house.year,
        house.price,
        house.stories,
        house.imgUrl
      ))
    })
    return housesCopy
  }

  addHouse(formData) {
    let newHouse = new House(
      formData.make.value,
      formData.builder.value,
      formData.year.value,
      formData.price.value,
      formData.stories.value,
      formData.imgUrl.value
    )
    house.push(newHouse)
    console.log(house)

  }
}
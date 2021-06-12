import Faker from 'faker'

class ApiClient {
  constructor() {
    this.url = 'localhost:3000'
  }

  people_list() {
    // var faker = require('faker')
    return(
      [
        {name: "Rey Verga", lastActivity: "a year ago"},
        {name: "Noremberga", lastActivity: "right now"},
        {name: "Sinecrap", lastActivity: "two hours ago"},
        {name: Faker.internet.userName(), lastActivity: "last month"}
      ]
    )
  }

  product_list(page_size = 25, page_number = 0) {
    var products = []
    for (let i=0; i < page_size; i++) {
      products.push({
        id: page_size * page_number + i,
        name: Faker.commerce.productName(),
        price: Faker.commerce.price(),
        description: Faker.commerce.productDescription(),
        img: Faker.image.imageUrl,
      })
    }
    return(products)
  }
}

export default ApiClient

const imagesPath = `${process.env.PUBLIC_URL}/images`

module.exports = {
  "user": {
    "avatar": `${imagesPath}/avatar.png`,
    address: "Norra Larsmovägen 70, KUOPIO\n70260\nFinland"
  },
  "products": {
    "item1": {
      "name": "Nike Air Force 1 '07",
      "price": "€95.00",
      "category": "Men’s Shoe",
      "description": "Men’s Shoe, Black",
      "image": `${imagesPath}/item1.png`
    },
    "item2": {
      "name": "Nike Air Shadow Force",
      "price": "€105.00",
      "category": "Men’s Shoe",
      "description": "Men’s Shoe, Black",
      "image": `${imagesPath}/item2.png`
    },
    "item3": {
      "name": "Nike Air Force 1 '07",
      "price": "€95.00",
      "category": "Men’s Shoe",
      "description": "Men’s Shoe, Black",
      "image": `${imagesPath}/item3.png`
    },
    "item4": {
      "name": "Nike Air Force 1 '07",
      "price": "€95.00",
      "category": "Men’s Shoe",
      "description": "Men’s Shoe, Black",
      "image": `${imagesPath}/item4.png`
    }
  },
  deliveryOptions: [
    { title: "DHL Express", value: "dhl" },
    { title: "Fedex", value: "fedex" },
    { title: "Pick up at store", value: "pickup" },
  ],
}
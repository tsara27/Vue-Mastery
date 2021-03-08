const product = 'Socks'

const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      image: './assets/images/socks_green.jpg',
      url: 'https://google.com',
      description: 'This is the description of the product',
      inStock: true,
      inventory: 8,
      onSale: true
    }
  }
})

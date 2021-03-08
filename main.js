const product = 'Socks'

const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      image: './assets/images/socks_green.jpg',
      url: 'https://google.com',
      description: 'This is the description of the product',
      details: ['50% cotton', '30% wool', '20% polyester'],
      inStock: true,
      inventory: 8,
      onSale: true
    }
  }
})

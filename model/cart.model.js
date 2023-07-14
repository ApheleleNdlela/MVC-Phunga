//const Product = require('./product.model')
module.exports= mongoose =>{
    const CartSchema = mongoose.Schema({
      userId: String,

    products: [{
      productId: String,
      quantity: {
        type: Number,
        default: 1
      }
    }],
  });

  const Cart = mongoose.model('Cart', CartSchema);
  return Cart
}
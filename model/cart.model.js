//const Product = require('./product.model')
module.exports= mongoose =>{
    const CartSchema = mongoose.Schema({
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        
      },

    products: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    }],
    // total:{
    //   type: Number,
    //   require: true,
    // }
  });

  const Cart = mongoose.model('Cart', CartSchema);
  return Cart
}
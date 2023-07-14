const db = require('../model')
const Cart = db.cart
const Product = db.product
const User = db.user
//const { authJwt } = require("../middlewares")

exports.addToCart = async (req, res)=>{



    let cart = new Cart({
        userId: req.userId,
        products: req.body.products
    })

    cart.save()
        .then(data => {
            res.status(500).send(data)
        })

    // try{
    //     const {pid} = req.body;

    //     // Find the cart
    //     let cart = await Cart.findOne({userId: req.userId});

    //     // If cart doesn't exist, create a new one
    //     if (!cart) {
    //     cart = await Cart.create({userId:req.userId});
    //     }
    //     //const user = await User.findById(userId)
    //     // Find the product and add it to the cart
    //     const product = await Product.findById(pid);
       
    //     if (!product) {
    //     return res.status(404).json({ error: 'Product not found' });
    //     }
      
    //     //const productInCart = await cart.products.find(product => product.id === pid)
    //     // console.log(productInCart[0])
    //     // // if(!productInCart){
    //     // //   
    //     // // }else{
    //     // //   productInCart.quantity = productInCart.quantity + 1
    //     // // console.log(productInCart.quantity)
    //     // // }
        
       
        
    //     cart.products.push(product);
    //     await cart.save();
    //     res.send(cart)
    // }
    // catch(err) {
    //     res.send({message: err})
    // }

}

exports.getCart = async (req, res) => {
    try {
    
      const cart = await Cart.findOne({userId: req.userId}).populate('products');
      res.json(cart);
    } catch (err) {
      res.status(500).json({ error: 'Failed to retrieve the cart for user '+ {userId: req.userId} });
    }
  }
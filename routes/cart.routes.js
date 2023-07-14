//const { authJwt } = require('../middlewares')

module.exports = app =>{
    const router = require('express').Router()
    const { authJwt } = require("../middlewares")
    // const controller = require('../controllers/cart.controller')
    const controller = require("../controller/cart.controller") 

    app.use(async(req, res, next) => {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    })


    
    router.get('/all', async (req, res) => {
    try {
      //const {pid} = req.body
      const cart = await Cart.find().populate('products');
      res.json(cart);
    } catch (err) {
      res.status(500).json({ error: 'Failed to retrieve the cart' });
    }
  })



  router.get('/',authJwt.verifyToken, controller.getCart)

  router.post('/', authJwt.verifyToken, controller.addToCart)
   

 app.use('/api/cart', router);

}

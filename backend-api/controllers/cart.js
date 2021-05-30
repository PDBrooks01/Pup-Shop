const Cart = require ('../models/cart')

exports.getAllCartItems = async (req,res,next) =>{
  try{
    const [cartItems] = await Cart.fetchAll()
    res.status(200).json(cartItems)
  } catch (err){
    if (!err.statusCode){
      err.statusCode = 500;
    }
    next(err)
  }
}

exports.postCart = async (req,res,next)  =>{
  try {
    const postResponse = await Cart.post(req.body.product_name, req.body.unit_price)
    res.status(201).json(postResponse)
  } catch (err){
    if (!err.statusCode){
      err.statusCode = 500;
    }
    next(err)
  }
}

exports.deleteCart = async (req,res,next) =>{
  try {
    const deleteResponse = await Cart.delete(req.params.id)
    res.status(200).json(deleteResponse)
  } catch (err){
    if (!err.statusCode){
      err.statusCode = 500;
    }
    next(err)
  }
}

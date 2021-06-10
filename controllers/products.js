const Products = require('../models/products')

exports.getProducts = async (req,res,next) =>{
  try {
    const [allProducts] = await Products.fetchAll();
    res.status(200).json(allProducts)
  }catch (err){
    if (!err.statusCode){
      err.statusCode = 500;
    }
    next(err)
  }
}
exports.showProducts = async (req,res,next)=>{
  const id = req.params.id
  try {
    const [singleProduct] = await Products.show(id)
    res.status(200).json(singleProduct)
  } catch (err){
    if (!err.statusCode){
      err.statusCode = 500;
    }
    next(err)
  }
}

// exports.add = async(req,res,next)=>{
//   try{
//     const [addProducts] = await Products.add();
//     res.status(200).json(addProducts)
//   }catch(err){
//     if(!err.statusCode){
//       err.statusCode=500;
//     }
//   }
//   next(err)
// }
//
// exports.delete = async(req,res,next)=>{
//   try{
//     const [addProducts] = await Products.add();
//     res.status(200).json(addProducts)
//   }catch(err){
//     if(!err.statusCode){
//       err.statusCode=500;
//     }
//   }
//   next(err)
// }

import Product from '../models/productModel.js';


const getProducts = async (req , res) => {
    try {
        const products = await Product.find({});
    
        res.json(products);
      } catch (error) {
        console.log(error);
      }
}


const getProductByID = async (req , res) => {
    try {
        const product = await Product.findById(req.params.id);
    
        if (product) {
          res.json(product);
        } else {
          res.status(404).json({ message: 'Product Not Found' });
        }
      } catch (error) {
        console.log(error);
      }
}

export { getProducts , getProductByID}
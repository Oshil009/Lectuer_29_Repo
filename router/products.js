const express=require("express")
const {showAllProducts,setNewProducts,updatingProducts,deletedProducts}=require("../controllers/products")
const productsRouter=express.Router();
productsRouter.get("/",showAllProducts);
productsRouter.post("/",setNewProducts)
productsRouter.put("/:id",updatingProducts)
productsRouter.delete("/:id",deletedProducts)
module.exports= productsRouter;
const express=require("express")
const {showAllProducts,setNewProducts}=require("../controllers/products")
const productsRouter=express.Router();
productsRouter.get("/",showAllProducts);
productsRouter.post("/",setNewProducts)
module.exports= productsRouter;
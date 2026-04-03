const express = require("express");
const app = express();
const PORT = 5000;
app.use(express.json());
const productsRouter=require("./router/products")
const db=require("./models/db")
app.use("/product",productsRouter);
productsRouter.get("/",(req,res)=>{
    res.json("database")
})
app.listen(PORT, () => {
    console.log(`Example application listening at http://localhost:${PORT}`); 
});
const productsModel = require("../models/productsSchema");
const showAllProducts = (req, res) => {
    productsModel.find({}).then(result => res.json(result)).catch(err => res.json({ error: err }))
}
const setNewProducts = (req, res) => {
    const { name, price, category } = req.body;
    const newProducts = new productsModel({
        name, price, category
    })
    newProducts.save().then((result) => {
        console.log("result", result);
        res.json("new user has been created")

    }).catch((err) => {
        console.log(err);
        res.json({ error: err })

    })
}
const updatingProducts=async(req,res)=>{
    try{
        const productId= req.params.id;
        const updatedData= req.body;
        const product=await productsModel.findByIdAndUpdate(productId,{$set:updatedData},{new:true , runValidators: true});
        if(!product){return res.status(404).json({ message: "product not found" });}
        res.status(200).json({ message: "Update successful", product });
    }catch(err){
        res.status(500).json({ message: "Server error", error: err.message })
    }
}
const deletedProducts=async(req,res)=>{
    try{
        const productId= req.params.id;
        const product=await productsModel.findByIdAndDelete(productId);
        if(!product){return res.status(404).json({ message: "product not found" });}
        res.status(200).json({ message: "Delete successful", product });
    }catch(err){
        res.status(500).json({ message: "Server error", error: err.message })
    }
}
module.exports = { showAllProducts, setNewProducts ,updatingProducts,deletedProducts};
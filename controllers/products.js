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
module.exports = { showAllProducts, setNewProducts };
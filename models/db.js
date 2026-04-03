const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/productsDB").then(() => {
    console.log("DB ready to use");
}).catch((err) => {
    console.log(err);
})

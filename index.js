const mongoose = require("mongoose")
mongoose.set('strictQuery', true);


//creating a schema
const Individual = new mongoose.Schema({
    name: String,
    father: String,
    age: Number,
    graduate: Boolean
})


//creating model / collection with name

const customers = new mongoose.model("Customers", Individual)

//adding data into collection or model by async await
const adder = async () => {
    await customers.create({
        name: "adil",
        father: "younas",
        age: 2500,
        graduate: true,
    })
}

adder()




mongoose.connect("mongodb://127.0.0.1:27017/testing").then(() => {
    console.log("MongoDB Connected!");
}).catch((err) => {
    console.log(err);
})
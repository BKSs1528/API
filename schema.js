const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/V1", { useNewUrlParser: true }).then(() => {
    console.log("connected to DB....");
}).catch((err) => {
    console.log(err);
})


const taskSchema = new mongoose.Schema({
    taskId: {
        type: String,
        required: true
    }
})
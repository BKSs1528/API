const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/V1", { useNewUrlParser: true }).then(() => {
    console.log("connected to DB....");
}).catch((err) => {
    console.log(err);
})


const taskSchema = new mongoose.Schema({
    taskId: {
        type: Number,
        required: true,unique:true
    },
    title:{
        type: String,
        // required: true
    },
    is_completed:{
        type: Boolean,
        required: true
    }
})


const taskModel = new mongoose.model("taskAPI",taskSchema)


module.exports = taskModel;
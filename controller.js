const express = require("express")
const taskModel = require("./schema")
const generateID = async () => {
    const taskCount = await taskModel.find({})
    const id = taskCount.length + 1
    return id
}
exports.createTask = async (req, res) => {
    try {
        const id = await generateID()
        const taskData = await taskModel.create({
            taskId: id,
            title: req.body.title,
            is_completed: false
        })
        res.status(200).send({ data: taskData })
    } catch (err) {
        console.log(err);
        res.status(400).json({ err })
    }
}

exports.allTasks = async (req, res) => {
    try {
        const allData = await taskModel.find({})
        if (allData.length) {
            res.status(200).send({ data: allData })
        } else {
            res.status(400).json({ status: "success" }, { message: "Data not available" })
        }
    } catch (err) {
        console.log(err);
        res.status(400).json({ err })
    }
}

exports.taskDetails = async (req, res) => {
    try {
        const Data = await taskModel.find({ taskId: req.params.id })
        if (Data.length) {
            res.status(200).send({ data: Data })
        } else {
            res.status(400).json({ status: "success" }, { message: "Data not available" })
        }
    } catch (err) {
        console.log(err);
        res.status(400).json({ err })
    }
}

exports.deleteTask = async (req, res) => {
    try {
        const Data = await taskModel.deleteOne({ taskId: req.params.id })
        if (Data.length) {
            res.status(200).send({ message: "Data deleted sucessfully" })
        } else {
            res.status(400).json({ status: "success" }, { message: "Data not available" })
        }
    } catch (err) {
        console.log(err);
        res.status(400).json({ err })
    }
}

exports.editTask = async (req, res) => {
    try {
        const Data = await taskModel.updateOne({ taskId: req.params.id },{
            $set:{
                is_completed: new Boolean(req.body.is_completed),
                title:req.body.title
            }
        })
        if (Data.length) {
            res.status(200).send({ message: "Data updated sucessfully" })
        } else {
            res.status(400).json({ status: "success" }, { message: "Data not available" })
        }
    } catch (err) {
        console.log(err);
        res.status(400).json({ err })
    }
}

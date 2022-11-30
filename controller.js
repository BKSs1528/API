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
            title: req.query.title,
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
            res.status(200).send({ tasks: [allData] })
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
            res.status(404).json({ status: "success" }, { message: "There is no task at that id" })
        }
    } catch (err) {
        console.log(err);
        res.status(400).json({ err })
    }
}

exports.deleteTask = async (req, res) => {
    try {
        const Data = await taskModel.delete({ taskId: req.params.id })
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
        const Data = await taskModel.updateOne({ taskId: req.params.id }, {
            $set: {
                itle: req.query.title,
                is_completed: new Boolean(req.query.is_completed)
            }
        })
        console.log(Data);
        if (Data.length) {console.log(66);
            res.status(200).send({ message: "Data updated sucessfully",Data })
        } else {
            console.log(77);
            res.status(400).send({ status: "success" ,message: `Data not available ${69}` })
        }
    } catch (err) {
        console.log(err);
        res.status(400).json({ err })
    }
}

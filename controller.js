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
            title:req.query.title,
            is_completed:false
        })
        res.status(200).send({data:taskData})
    } catch (err) {
        console.log(err);
        res.status(400).json({ err })
    }
}

exports.allTasks = async (req, res) => {
    try {
        
    } catch (err) {
        console.log(err);
        res.status(400).json({ err })
    }
}

exports.taskDetails = async (req, res) => {
    try {

    } catch (err) {
        console.log(err);
        res.status(400).json({ err })
    }
}

exports.deleteTask = async (req, res) => {
    try {

    } catch (err) {
        console.log(err);
        res.status(400).json({ err })
    }
}

exports.editTask = async (req, res) => {
    try {

    } catch (err) {
        console.log(err);
        res.status(400).json({ err })
    }
}

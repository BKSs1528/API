const express = require("express")
const router = express.Router()
const taskManager = require("./controller")
router.post("/v1/task",taskManager.createTask)
router.get("/v1/task",taskManager.allTasks)
router.get("/v1/task/:id",taskManager.taskDetails)
router.put("/v1/task/:id",taskManager.editTask)
router.delete("/v1/task/:id",taskManager.deleteTask)



module.exports = router;
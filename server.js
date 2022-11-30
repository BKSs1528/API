const express = require("express")
const router = require("./route")
const app = express()
const port = process.env.PORT || 3003



app.use("/",router)
app.listen(port, () => {
    console.log(`Server running on ${port}........`);
})


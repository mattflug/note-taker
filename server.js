const express = require("express")
const app = express()
const PORT = process.env.PORT || 3001

//routes
//const 

app.use(express.urlencoded({ extended: true })) // req.body in your post routes -- undefined
app.use(express.json())
app.use(express.static("public"))










app.listen(PORT, function () {
    console.log(`Server running on ${PORT}`)
})
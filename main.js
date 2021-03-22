require('custom-env').env()
const connect = require("./Data/mongose")
// Calling libries
const express = require('express')
// You need body parsser to regulate data
const path = require('path')
const userRouter = require("./Routes/userRoutes")
// Start the application
const app = express()
const port = 3000


connect.connectDb()
// Settingup Template engine
app.set("view engine", "pug")
app.set("views", "./views")

// Declare statique pages
app.use(express('public'))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// User Router to handle all http request form the user
app.use('', userRouter)

// Error page it get called if the request did not meet any route above
app.get('*', function(req, res){
  res.status(404).send('what???');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
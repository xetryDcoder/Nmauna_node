const express = require('express')
const path = require('path')

const app = express()
const port = 3000


//Seting up View Engine
app.set('view engine', 'ejs')
app.set('views', 'view')


//Parsing Data to backend
app.use(express.urlencoded())
app.use(express.json())

//Public FIle
app.use(express.static(path.join(__dirname, "public")))

//Route call
const indexRouter = require('./route/home_route')
const aboutRouter = require('./route/about_route')
const addRouter = require('./route/add_router')

// Implementing Route
app.use(indexRouter)
app.use(aboutRouter)
app.use(addRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
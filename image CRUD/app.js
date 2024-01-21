const express = require('express')
const path =  require('path')
const app = express()
const port = 3001

//DB Connection
const db = require('./model/index')

db.sequelize.sync({force: false})

//Set View Engine
app.set('view engine', 'ejs')
app.set('views', 'view')


//Parsing data
app.use(express.json());
app.use(express.urlencoded());

//public file
app.use(express.static(path.join(__dirname, "public")))
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//Router Calling
const indexRouter = require('./route/index_route')
const blogRouter = require("./route/blog_route")

//Router Implemnting
app.use(indexRouter)
app.use(blogRouter)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
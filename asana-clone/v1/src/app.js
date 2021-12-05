const express =require("express")
const helmet = require("helmet")
require("./config")()
require("./loaders")()

const {projectRoutes} = require("./routes")
const app = express()
app.use(express.json())
app.use(helmet())



app.listen(process.env.APP_PORT,()=>{
    console.log(`Asana-clone-app listening at http://localhost:${process.env.APP_PORT}`)
    app.use("/",projectRoutes)
})
const express = require("express")
const helmet = require("helmet")
require("./config")()
require("./loaders")()
const app = express()

/** Routes */
const {ProjectRoutes,UserRoutes} = require("./routes")

/** Uses */
app.use(express.json())
app.use(helmet())

/** use Route */
app.use("/projects",    ProjectRoutes)
app.use("/users",       UserRoutes)


/** app.listen */
app.listen(process.env.APP_PORT, () => {
    console.log(`http://localhost:${process.env.APP_PORT}`)
})
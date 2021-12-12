const express = require("express")
const helmet = require("helmet")
require("./config")()
require("./loaders")()
require("./scripts/events")()
const app = express()

/** Routes */
const {ProjectRoutes,UserRoutes} = require("./routes")

/** Uses */
app.use(express.json())
app.use(helmet())

/** Routes */
app.use("/projects",    ProjectRoutes)
app.use("/users",       UserRoutes)


/** app.listen */
app.listen(process.env.APP_PORT, () => {
    console.log(`http://localhost:${process.env.APP_PORT}`)
})
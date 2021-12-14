const express = require("express")
const helmet = require("helmet")
const fileUpload = require("express-fileupload")
const path = require("path");
require("./config")()
require("./loaders")()
require("./scripts/events")()
const app = express()

/** Routes */
const {ProjectRoutes,UserRoutes,SectionRoutes,TaskRoutes} = require("./routes")

/** Uses */
app.use("/uploads", express.static(path.resolve(__dirname,"./uploads")))
app.use(express.json())
app.use(helmet())
app.use(fileUpload({
    // useTempFiles : true,
    // tempFileDir : '/tmp/'
}))

/** Routes */
app.use("/projects",ProjectRoutes)
app.use("/sections",SectionRoutes)
app.use("/tasks",   TaskRoutes)
app.use("/users",   UserRoutes)



/** app.listen */
app.listen(process.env.APP_PORT, () => {
    console.log(`http://localhost:${process.env.APP_PORT}`)
})
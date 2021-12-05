/** validations */

/** validate middleware */

//const express=require("express")
const router = require("express").Router()
const ProjectController = require("../controllers/ProjectController")


router.get("/",             ProjectController.index)
router.post("/project",     ProjectController.create)


module.exports = router

const router = require("express").Router()
//const express=require("express")
const ProjectController = require("../controllers/ProjectController")
/** validate middleware */
const validate = require("../middlewares/validate")
/** validations */
const schema = require("../validations/Project")



router
    .route("/")
    .get(ProjectController.index)
router
    .route("/")
    .post(validate(schema.createValidation), ProjectController.create)


module.exports = router

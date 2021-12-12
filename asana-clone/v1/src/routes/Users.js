const router = require("express").Router()
/** Controllers */
const {index, create, update, login, projectList, resetPassword} = require("../controllers/UserController")
/** Middlewares */
const validate = require("../middlewares/validate")
const authenticate = require("../middlewares/authenticate");
/** Validations */
const schema = require("../validations/Users")


router.route("/").get(index)
router.route("/").post(validate(schema.createValidation), create)
router.route("/").patch(authenticate,validate(schema.updateValidation), update)
router.route("/login").post(validate(schema.loginValidation), login)
router.route("/projects").get(authenticate, projectList)
router.route("/reset-password").post(validate(schema.resetPassword), resetPassword)

module.exports = router

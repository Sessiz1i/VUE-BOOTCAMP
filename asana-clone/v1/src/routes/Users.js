const router = require("express").Router()
const {index, login, create} = require("../controllers/UserController")
/** validate middleware */
const validate = require("../middlewares/validate")
/** validations */
const schema = require("../validations/Users")




router.route("/").get(index)
router.route("/").post(validate(schema.createValidation), create)
router.route("/login").post(validate(schema.loginValidation), login)

module.exports = router

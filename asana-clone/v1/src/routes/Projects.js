const router = require("express").Router()
/** Controllers */
const {index, create, update,remove} = require("../controllers/ProjectController")
/** Middlewares */
const validate = require("../middlewares/validate")
const auth = require("../middlewares/authenticate");
/** Validations */
const schema = require("../validations/Project")


router.route("/").get(auth, index)
router.route("/").post(auth,        validate(schema.createValidation), create)
router.route("/:id?").patch(auth,   validate(schema.updateValidation), update)
router.route("/:id?").delete(auth,   validate(schema.updateValidation), remove)


module.exports = router

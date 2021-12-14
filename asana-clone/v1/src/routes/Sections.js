const router = require("express").Router()
/** Controllers */
const {create,index,} = require("../controllers/Section")
//const {index, create, update,remove} = require("../controllers/Section")
/** Middlewares */
const validate = require("../middlewares/validate")
const authenticate = require("../middlewares/authenticate");
/** Validations */
const schema = require("../validations/Section")

router.route("/").post(authenticate, validate(schema.create), create)
router.route("/").get(authenticate, index)

/*
router.route("/:id?").patch(authhenticate,   validate(schema.updateValidation), update)
router.route("/:id?").delete(authhenticate,   validate(schema.updateValidation), remove)
*/


module.exports = router

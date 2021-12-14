const router = require("express").Router()
/** Controllers */
const {
    index,
    create,
    update,
    changePassword,
    remove,
    login,
    projectList,
    resetPassword,
    updateProfileImage
} = require("../controllers/UserController")
/** Middlewares */
const validate = require("../middlewares/validate")
const authenticate = require("../middlewares/authenticate");
/** Validations */
const schema = require("../validations/Users")


router.route("/").get(index)
router.route("/").post(validate(schema.createValidation), create)
router.route("/").patch(authenticate, validate(schema.updateValidation), update)
router.route("/:id").delete(authenticate, remove)
router.route("/login").post(validate(schema.loginValidation), login)
router.route("/projects").get(authenticate, projectList)
router.route("/change-password").post(authenticate, validate(schema.changePassword), changePassword)
router.route("/reset-password").post(validate(schema.resetPassword), resetPassword)
router.route("/update-profile-image").post(authenticate, updateProfileImage)

module.exports = router

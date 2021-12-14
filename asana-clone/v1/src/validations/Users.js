const Joi = require("joi")

const createValidation = Joi.object({
    full_name: Joi.string()
        .ruleset.min(3).message('Bu alan en az 3 karakter olmalıdır.')
        .ruleset.max(100).message('Bu alan en fazla 100 karakter olmalıdır.'),
    email:Joi.string()
        .lowercase()
        .ruleset.email().message("Geçerli bir Email giriniz.")
        .ruleset.min(15).message("En az {MIN} karakter olmalıdır.")
        .ruleset.max(150).message("En fazla {MAX} karakter olmalıdır."),
    password:Joi.string()

})
const updateValidation = Joi.object({
    full_name: Joi.string()
        .ruleset.min(3).message('Bu alan en az 3 karakter olmalıdır.')
        .ruleset.max(100).message('Bu alan en fazla 100 karakter olmalıdır.'),
    email:Joi.string()
        .lowercase()
        .ruleset.email().message("Geçerli bir Email giriniz.")
        .ruleset.min(15).message("En az {MIN} karakter olmalıdır.")
        .ruleset.max(150).message("En fazla {MAX} karakter olmalıdır."),
})
const loginValidation = Joi.object({
    email:Joi.string()
        .lowercase()
        .ruleset.email().message("Geçerli bir Email giriniz.")
        .ruleset.min(15).message("En az {MIN} karakter olmalıdır.")
        .ruleset.max(150).message("En fazla {MAX} karakter olmalıdır."),
    password:Joi.string()

})
const changePassword = Joi.object({
    password:Joi.string()
        .ruleset.min(6).message("En az {MIN} karakter olmalıdır.")
        .ruleset.max(25).message("En fazla {MAX} karakter olmalıdır."),
})
const resetPassword = Joi.object({
    email:Joi.string()
        .lowercase()
        .ruleset.email().message("Geçerli bir Email giriniz.")
        .ruleset.min(15).message("En az {MIN} karakter olmalıdır.")
        .ruleset.max(150).message("En fazla {MAX} karakter olmalıdır."),
})

module.exports = {
    createValidation,
    updateValidation,
    loginValidation,
    resetPassword,
    changePassword
}

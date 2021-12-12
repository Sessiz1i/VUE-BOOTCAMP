const Joi = require("joi")

const createValidation = Joi.object({
    name: Joi.string()
        .ruleset.min(5).message('Bu alan en az 5 karakter olmalıdır.')
        .ruleset.max(100).message('Bu alan en fazla 100 karakter olmalıdır.')
})
const updateValidation = Joi.object({
    name: Joi.string()
        .ruleset.min(5).message('Bu alan en az 5 karakter olmalıdır.')
        .ruleset.max(100).message('Bu alan en fazla 100 karakter olmalıdır.')
})
module.exports = {
    createValidation,
    updateValidation
}
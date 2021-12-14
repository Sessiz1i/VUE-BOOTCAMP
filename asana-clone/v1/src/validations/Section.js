const Joi = require("joi")

const create = Joi.object({
    name: Joi.string()
        .ruleset.min(5).message('Bu alan en az 5 karakter olmalıdır.')
        .ruleset.max(100).message('Bu alan en fazla 100 karakter olmalıdır.'),
    project:Joi.string().required().min(10)

})
const update = Joi.object({
    name: Joi.string()
        .ruleset.min(5).message('Bu alan en az 5 karakter olmalıdır.')
        .ruleset.max(100).message('Bu alan en fazla 100 karakter olmalıdır.'),
    project:Joi.string().required().min(10)

})
module.exports = {create, update}
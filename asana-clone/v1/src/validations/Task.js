const Joi = require("joi")

const create = Joi.object({
    title: Joi.string()
        .ruleset.min(3).message('Bu alan en az 5 karakter olmalıdır.')
        .ruleset.max(100).message('Bu alan en fazla 100 karakter olmalıdır.'),
    section_id: Joi.string().required(),
    project_id: Joi.string().required()
})
const update = Joi.object({
    title: Joi.string()
        .ruleset.min(5).message('Bu alan en az 5 karakter olmalıdır.')
        .ruleset.max(100).message('Bu alan en fazla 100 karakter olmalıdır.'),
    due_date: Joi.date()

})
module.exports = {create, update}
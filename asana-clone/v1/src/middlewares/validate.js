const httpStatus = require("http-status")

const validate = (schema) => (req, res, next) => {
    const {value, error} = schema.validate(req.body)
    if (error) {
        const errorMessages = error.details?.map(detail => detail.message).join(", ")
        return res.status(httpStatus.BAD_REQUEST).json({errors: errorMessages})
    }
    Object.assign(req, value)
    next()
}
module.exports = validate
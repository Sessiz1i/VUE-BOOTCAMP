/**
 * ---------- Models
 */
const {insert, list} = require("../services/Projects")
const httpStatus = require("http-status")

/**
 * ---------- Project Index
 */
const index = (req, res) => {
    list().then(result => {
        return res.status(httpStatus.OK).send(result)
    }).catch(err => {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
    })
}
/**
 * ---------- Project Create
 */
const create = (req, res) => {
    insert(req.body).then(result => {
        return res.status(httpStatus.CREATED).send(result)
    }).catch(err => {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
    })

}
module.exports = {
    index,
    create,
}
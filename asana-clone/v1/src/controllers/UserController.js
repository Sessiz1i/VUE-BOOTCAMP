/**
 * ---------- Models
 */
const httpStatus = require("http-status")
const {passwordToHash, passwordToCompare} = require("../scripts/utils/helper");
const User = require("../models/Users");

/**
 * ---------- Index Users
 */
const index = (req, res) => {
    User.find().then(result => {
        if (result) {
            res.status(httpStatus.OK).send(result)
        } else {
            res.status(httpStatus.OK).send({message: "User Not Fount."})
        }
    }).catch(err => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err))
}

/**
 * ---------- Login User
 */
const login = (req, res) => {
    User.findOne({email: req.body?.email})
        .then(async result => {
            if (result) {
                await passwordToCompare(req.body.password, result?.password)
                    ? res.status(httpStatus.OK).send(result)
                    : res.status(httpStatus.BAD_REQUEST).send({message: "Şifre Hatalı."})
            }
            if (!result) return res.status(httpStatus.NOT_FOUND).send({message: "Kulanıcı bulunamadı."})
        })
        .catch(err => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err))
}
/**
 * ---------- Create User
 */
const create = async (req, res) => {
    req.body.password = await passwordToHash(req.body.password)
    User.create(req.body)
        .then(result => {
            if (result) {
                return res.status(httpStatus.CREATED).send(result)
            }
        }).catch(err => {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
    })
}
module.exports = {
    index,
    login,
    create,
}
const Project = require("../models/Project")
const User = require("../models/User");
const httpStatus = require("http-status")
const uuid = require("uuid")
const eventEmitter = require("../scripts/events/eventEmitter")
const {
    passwordToHash, passwordToCompare, generateAccessToken, generateRefreshToken
} = require("../scripts/utils/helper");


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
        .then(async user => {
            if (user) {
                const passCheck = await passwordToCompare(req.body.password, user?.password)
                if (passCheck) {
                    user = {
                        ...user.toObject(),
                        tokens: {
                            access_token: generateAccessToken(user),
                            refresh_token: generateRefreshToken(user)
                        }
                    }
                    delete user.password
                    res.status(httpStatus.OK).send(user)
                } else {
                    res.status(httpStatus.BAD_REQUEST).send({message: "Şifre Hatalı."})
                }
            }
            if (!user) return res.status(httpStatus.NOT_FOUND).send({message: "Kulanıcı bulunamadı."})
        }).catch(err => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err))
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
/**
 * ---------- Update User
 */
const update = async (req, res) => {
    User.findOneAndUpdate({_id: req.user}, req.body,{new:true})
        .then(updatedUser => {
            if (updatedUser) {
                res.status(httpStatus.OK).send(updatedUser)
            } else {
                res.status(httpStatus.NOT_FOUND).send({error: "Kulanıcı bulunamadı"})
            }
        }).catch(err => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        error: err,
        message: "Beklenmeyen bir hata oluştu"
    }))
}
/**
 * ---------- User Project List
 */
const projectList = (req, res) => {
    Project.find({userId: req.user}).populate("user", "full_name email")
        .then(projectsUser => {
            if (projectsUser.length > 0) res.status(httpStatus.OK).send(projectsUser)
        }).catch(() => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({message: "Project Not Fount"}))
}

/**
 * ---------- Reset Password
 */
const resetPassword = async (req, res) => {
    const newPassword = uuid.v4()?.split("-")[0]
    User.findOneAndUpdate({email: req.body.email}, {password: await passwordToHash(newPassword)})
        .then(user => {
            if (user) {
                eventEmitter.emit("send_email", {
                    to: user.email, // list of receivers
                    subject: "Şifre yenileme ✔", // Subject line
                    text: "Hello world?", // plain text body
                    html: `<span>Şifre yenileme işleminiz yapıldı.<br/>
                            Sisteme girişyaptıktan sonra şifrenizi değiştirmeyi unutmayınız. <br/>
                            Yeni şifre: <b>${newPassword}</b></span>`,
                })
                res.status(httpStatus.OK).send({message: "Şifre yenileme işlemi başarılı. Email adresinizi kontrol ediniz."})
            } else {
                res.status(httpStatus.NOT_FOUND).send({error: "Kulanıcı bulunamadı"})
            }
        }).catch(err => res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        error: err,
        message: "Beklenmeyen bir hata oluştu"
    }))
}

module.exports = {
    index, create, update, login, projectList, resetPassword,
}
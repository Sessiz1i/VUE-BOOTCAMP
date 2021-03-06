/** ---------- Models */
const {insert, list} = require("../services/Projects")
const httpStatus = require("http-status")
const Project = require("../models/Project")

/** ---------- Project Index */
const index = (req, res) => {
    Project.find().populate('user',"full_name email profile_image").then(result => {
        return res.status(httpStatus.OK).send(result)
    }).catch(err => {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
    })
}
/** ---------- Project Create */
const create = (req, res) => {
    Project.create({...req.body,user:req.user}).then(result => {
        return res.status(httpStatus.CREATED).send(result)
    }).catch(err => {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
    })
}
/** ---------- Project Update */
const update = async (req, res) => {
    if (!req.params?.id) {
        return res.status(httpStatus.BAD_REQUEST).send({message: "ID Bilgisi eksik."})
    }
    Project.findOneAndUpdate(req.params?.id, req.body, {new: true, rawResult: true})
        .then(updateProject => {
            console.log(updateProject)
            return res.status(httpStatus.OK).send(updateProject)
        }).catch(err => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err))
}
/** ---------- Project Remove */
const remove = async (req, res) => {
    if (!req.params?.id) {
        return res.status(httpStatus.BAD_REQUEST).send({message: "ID Bilgisi eksik."})
    }
    Project.findByIdAndDelete(req.params?.id)
        .then(removeProject => {
            if (removeProject) return res.status(httpStatus.OK).send(removeProject)
            else return res.status(httpStatus.NOT_FOUND).send({message: "Project bulunamad─▒"})
        }).catch(err => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err))
}
module.exports = {index, create, update,remove}
/**
 * ---------- Models
 */
const {insert, list} = require("../services/Projects")
const httpStatus = require("http-status")
const Project = require("../models/Project")

/**
 * ---------- Project Index
 */
const index = (req, res) => {
    Project.find().populate('user',"full_name email").then(result => {
        return res.status(httpStatus.OK).send(result)
    }).catch(err => {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
    })
}
/**
 * ---------- Project Create
 */
const create = (req, res) => {
    Project.create({...req.body,user:req.user}).then(result => {
        return res.status(httpStatus.CREATED).send(result)
    }).catch(err => {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
    })
}
/**
 * ---------- Project Update
 */
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

module.exports = {index, create, update}
/** ---------- Models */
const httpStatus = require("http-status")
const Section = require("../models/Section")

/** ---------- Project Index */
const index = (req, res) => {
    Section.find({project:req.body.project})
        .populate("user", "full_name email profile_image")
        .populate('project', "name")
        .then(result => {
            return res.status(httpStatus.OK).send(result)
        })
        .catch(err => {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
        })
}


const create = (req, res) => {
    Section.create({...req.body, user: req.user, project: req.body.project})
        .then(createSection => {
            console.log(createSection)
            return res.status(httpStatus.CREATED).send(createSection)
        })
        .catch(err => {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
        })
}
/*
/!** ---------- Project Update *!/
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
/!** ---------- Project Remove *!/
const remove = async (req, res) => {
    if (!req.params?.id) {
        return res.status(httpStatus.BAD_REQUEST).send({message: "ID Bilgisi eksik."})
    }
    Project.findByIdAndDelete(req.params?.id)
        .then(removeProject => {
            if (removeProject) return res.status(httpStatus.OK).send(removeProject)
            else return res.status(httpStatus.NOT_FOUND).send({message: "Project bulunamadı"})
        }).catch(err => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err))
}
*/

module.exports = {create, index}
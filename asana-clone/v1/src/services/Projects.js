const Project = require("../models/ProjectModel")
const insert = async (projectData) => {
    //return await Project.create(projectData)
    const newProject = new Project(projectData)
    return newProject.save()
}
const list =()=>{
    return Project.find()
}
module.exports = {
    insert,
    list
}
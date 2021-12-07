const Project = require("../models/Project")
const insert = async (data) => {
    const newData = new Project(data)
    return newData.save()
}
const list =()=>{
    return Project.find()
}
module.exports = {
    insert,
    list
}
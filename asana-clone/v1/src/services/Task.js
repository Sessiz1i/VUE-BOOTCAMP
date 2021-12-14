const Task = require("../models/Task")
const insert = async (data) => {
    const newData = new Task(data)
    return newData.save()
}
const list =()=>{
    return Project.find()
}
module.exports = {
    insert,
    list
}
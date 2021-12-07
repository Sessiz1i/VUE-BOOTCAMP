const User = require("../models/Users")


const loginUser = async (data) => {
    return User.findOne({email: data.email})
}

const insert = async (data) => {
    return await User.create(data)
}

const list = () => {
    return User.find()
}

module.exports = {
    insert,
    list,
    loginUser
}
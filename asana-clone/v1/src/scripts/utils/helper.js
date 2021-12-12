const JWT = require("jsonwebtoken")
const bcrypt = require('bcrypt');
const saltRounds = 15;


const passwordToHash = async (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(saltRounds));

}
const passwordToCompare = async (password, dbPassword) => {
    return bcrypt.compareSync(password, dbPassword);

}


const generateAccessToken = (user) => {
    return JWT.sign({'name':user}, process.env.ACCESS_TOKEN_SECRET_KEY,{expiresIn: "1w"})
}
const generateRefreshToken = (user) => {
    return JWT.sign({'name':user}, process.env.REFRESH_TOKEN_SECRET_KEY)
}

module.exports = {
    passwordToHash,
    passwordToCompare,
    generateAccessToken,
    generateRefreshToken
}
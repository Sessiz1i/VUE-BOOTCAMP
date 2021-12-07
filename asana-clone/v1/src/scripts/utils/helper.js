const bcrypt = require('bcrypt');
const saltRounds = 15;


const passwordToHash = async (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(saltRounds));

}
const passwordToCompare = async (password,dbPassword) => {
    return bcrypt.compareSync(password, dbPassword);

}


const generateAccessToken = ()=>{

}
const generateRefreshToken = ()=>{

}

module.exports = {
    passwordToHash,
    passwordToCompare
}
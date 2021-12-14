const Mongoose = require("mongoose");
const logger = require("../scripts/logger/Sections")
const Schema = new Mongoose.Schema({
    name: {
        type: String,
        minlength: [5, `Bu alan en az {MINLENGTH} karakter olmalıdır`],
        //unique: true,
        required: [true, 'Bu alan Gerekli dir...'],
    },
    user: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    project:{
        type:Mongoose.Schema.Types.ObjectId,
        ref:"Project"
    },
    order:"Number"
}, {timestamps: true,versionKey: false})
Schema.post("save", (doc) => {
    logger.log({
        level: "info",
        message:{
            data:Date.now(),
            ...doc
        }
    })

})
module.exports = Mongoose.model("Sections", Schema);
const Mongoose = require("mongoose");
const logger = require("../scripts/logger/Project")
const ProjectSchema = new Mongoose.Schema({
    name: {
        type: String,
        minlength: [5, `Bu alan en az {MINLENGTH} karakter olmalıdır`],
        //unique: true,
        required: [true, 'Bu alan Gerekli dir...'],
    },
    user: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
}, {timestamps: true,versionKey: false})
ProjectSchema.post("save", (doc) => {
    logger.log({
        level: "info",
        message: doc
    })

})
module.exports = Mongoose.model("Project", ProjectSchema);
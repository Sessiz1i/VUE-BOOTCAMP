const Mongoose = require("mongoose")
const logger = require("../scripts/logger/Project")
const ProjectSchema = new Mongoose.Schema({
    id: Mongoose.Schema.Types.ObjectId,
    name: {
        type:String,
        minlength: [5, `Bu alan en az {MINLENGTH} karakter olmalıdır`],
        unique:true,
        required: [true, 'Bu alan Gerekli dir...'],
        dropDups: true,

    },
    /*    user_id:{
            type: Mongoose.Schema.Types.ObjectId,
            ref:"users"
        },*/
}, {
    timestamps: true, versionKey: false
})
/*
ProjectSchema.pre("save", async (doc,next) => {
    await console.log("Öncesi", doc,next)
    next()
})
*/
ProjectSchema.post("save",(doc) => {
    logger.log({
        level:"info",
        message:doc
    })

})
module.exports = Mongoose.model("project", ProjectSchema);
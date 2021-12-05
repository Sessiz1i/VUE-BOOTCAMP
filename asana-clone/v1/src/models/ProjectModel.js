const Mongoose = require("mongoose")
const ProjectSchema = new Mongoose.Schema({
    id: Mongoose.Schema.Types.ObjectId,
    name: String,
    /*    user_id:{
            type: Mongoose.Schema.Types.ObjectId,
            ref:"users"
        },*/
}, {
    timestamps: true, versionKey: false
})
module.exports = Mongoose.model("project", ProjectSchema);
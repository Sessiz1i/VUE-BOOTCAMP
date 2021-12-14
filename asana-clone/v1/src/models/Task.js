const Mongoose = require("mongoose");
const logger = require("../scripts/logger/Task")
const Schema = new Mongoose.Schema({
    title: {
        type: String,
        required: [true, `{PATH} alanı gereklidir..`],
        minlength: [5, "Bu alan en az {MINLENGTH} karakter olmalıdır..."],
    },
    description: {
        type: String,
        required: false,
    },
    assigned_to: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    due_date: Date,
    statuses: [String],

    section: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: "Section"
    },
    project: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: "Project"
    },
    user: {
        type: Mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    order: "Number",
    isCompleted: {
        type: Boolean,
        default: false
    },
    comments: [
        {
            value: {type: String},
            createdAt: Date,
            updatedAt: Date,
            user: {
                type: Mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
        }
    ],
    media: [String],
    subTasks: [
        {
            type: Mongoose.Schema.Types.ObjectId,
            ref: "Task"
        },
    ]
}, {
    timestamps: true, versionKey: false
})
Schema.post("save", (doc) => {
    logger.log({
        level: "info",
        message: {
            data: Date.now(),
            ...doc
        }
    })

})
module.exports = Mongoose.model("Task", Schema);
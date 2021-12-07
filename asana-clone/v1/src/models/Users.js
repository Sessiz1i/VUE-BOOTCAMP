const Mongoose = require("mongoose")
const {isEmail} = require("validator");
const logger = require("../scripts/logger/Project");

const Schema = new Mongoose.Schema({
    full_name: {
        type: String,
        required: [true, "{NAME} Bu alan gereklidir."],
        minlength: [3, "En az {MINLENGTH} karakter olmalıdır."],
        maxlength: [100, "En fazla {MINLENGTH} karakter olmalıdır."],
    },
    email: {
        type: String,
        index: true,
        unique: [true, "Önceden kayıt edilmiş veri."],
        lowercase: true,
        validate: [isEmail, "Geçerli bir {NAME} giriniz."],
        required: [true, "Bu alan gereklidir."],
        minlength: [15, "En az {MINLENGTH} karakter olmalıdır."],
        maxlength: [100, "En fazla {MINLENGTH} karakter olmalıdır."],
    },
    profile_image: {
        type: String,
        maxlength: [150, "En fazla {MINLENGTH} karakter olmalıdır."],
    },
    password: {
        type: String,
        required: [true, "Bu alan gereklidir."],
        minlength: [6, "En az {MINLENGTH} karakter olmalıdır."],
    },
}, {
    timestamps: true, versionKey: false
})
Schema.post("save", (doc) => {
    logger.log({
        level: "info",
        message: doc
    })

})
module.exports = Mongoose.model("user", Schema)
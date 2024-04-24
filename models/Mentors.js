const mongoose = require('mongoose')

const MentorSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const MentorModel = mongoose.model("Mentor",MentorSchema)
module.exports = MentorModel
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/work')

const TableUser = mongoose.model('work_test', {
    author: String,
    title: String,
    connect: String,
    picture: String,
    pdf: String
})

// const TableSkills = mongoose.model('skills', {
//     hardSkill: String,
//     softSkills: String,
//     levelHardSkills: Number,
//     levelSoftSkills: Number
// })

const ObjectId = mongoose.Types.ObjectId

module.exports = { TableUser, ObjectId}
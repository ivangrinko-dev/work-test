const express = require('express')
const {createUser, geteAllUser, updateUser, deleteUser} = require('./service')
const route = express.Router()

// route.get('/',  (req, res) => {
//     res.send('hi')
// })
// route.get('/',  async (req, res) => {
//     try {
//         const data = await geteAllUser()
//         res.send(data)
//     } catch (error) {
//         res.send(error.message)
//     }
// })


route.post('/',  async (req, res) => {
    try {
        // console.log(req.files);
        const data = await createUser (req.body, req.files.picture)
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
})


// route.put('/:_id',  async (req, res) => {
//     try {
//         const data = await updateUser (req.params._id, req.body)
//         res.send(data)
//     } catch (error) {
//         res.send(error.message)
//     }
// })

// route.delete('/:_id',  async (req, res) => {
//     try {
//         const data = await deleteUser (req.params._id)
//         res.send(data)
//     } catch (error) {
//         res.send(error.message)
//     }
// })



module.exports = route
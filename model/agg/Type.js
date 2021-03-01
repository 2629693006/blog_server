const mongoose = require('mongoose')
    // 分类集合
const TypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        require: true
    }
})
const TypeData = mongoose.model('Type', TypeSchema)
module.exports = {
    TypeData
}
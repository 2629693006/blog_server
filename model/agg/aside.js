// 配置侧边栏模块
const mongoose = require('mongoose')
const AsideSchema = new mongoose.Schema({
    // 一级菜单
    authname: {
        type: String
    },
    // 二级菜单
    children: [{
        authname: {
            type: String
        },
        path: {
            type: String
        }
    }]
})
const Aside = mongoose.model('aside', AsideSchema)
module.exports = {
    Aside
}
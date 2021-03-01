// 导入连接数据库模块
const mongoose = require('mongoose')
    // 连接数据库
mongoose.connect('mongodb://ajian:123456@127.0.0.1:27017/blog', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('数据库连接成功');
    })
    .catch(() => {
        console.log('数据库连接失败');
    })
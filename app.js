// 导入express服务器模块
const express = require('express')
const Cors = require('cors')
    // 创建服务器
const app = express()
    // 系统模块path
const path = require('path')
    // 导入session本地存储
const session = require('express-session')
app.use(session({
    secret: 'secret key',
    name: 'sessionld',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }
}))

// 配置模板引擎
const template = require('art-template')
template.defaults.root = path.join(__dirname, 'public', 'view')
template.defaults.extname = '.art'
app.use(Cors())
    // 配置跨域
    // app.use((req, res, next) => {
    //         // res.header('Access-Control-Allow-Origin', '*')
    //         // res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
    //         // res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
    //         // res.header('Access-Control-Allow-Origin', '*')
    //         // res.header('Access-Control-Allow-Headers', 'X-Requested-With, mytoken')
    //         // res.header('Access-Control-Allow-Headers', 'X-Requested-With, Authorization')
    //         // res.setHeader('Content-Type', 'application/json;charset=utf-8')
    //         // res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
    //         // res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    //         // res.header('X-Powered-By', ' 3.2.1')
    //         // next()
    //     })
    // 导入连接数据库文件
require('./model/index')
    // 配置post请求传递参数
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
    // post请求接收json格式的参数
app.use(bodyParser.json())
    // 静态资源托管
app.use(express.static(path.join(__dirname, 'public')))
    // 配置模块化路由进行路由监听
app.use('/api/v1', require('./router/router'))
    // 监听服务器端口
app.listen(3000)
console.log('服务器启动成功');
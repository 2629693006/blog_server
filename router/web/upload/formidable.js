// 导入解析二进制文件的模块
const formidable = require('formidable')
const path = require('path')
module.exports = (req, res) => {
    // 创建解决二进制对象
    const form = new formidable.IncomingForm()
        // 配置上传文件的存放地址
    form.uploadDir = path.join(__dirname, '../', '../', '../', 'public', 'upload')
        // 保留上传文件的后缀名
    form.keepExtensions = true
        // 解析客户端传递的二进制文件
    form.parse(req, (err, fields, files) => {
        // 截取上传文件的路径
        const pic = files.file.path.split('public')[1];
        const data = {
                temp_url: pic,
                view_url: pic
            }
            // 响应信息
        if (pic) {
            res.send({
                status: 201,
                msg: '上传成功',
                data: data
            })
        } else {
            res.send({
                status: 400,
                msg: '上传失败'
            })
        }
    })
}
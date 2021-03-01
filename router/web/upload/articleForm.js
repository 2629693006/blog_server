// 导入转换二进制模块
const formidable = require('formidable')
    // 导入路径模块path
const path = require('path')
module.exports = (req, res) => {
    // 创建解析对象
    const form = new formidable.IncomingForm()
        // 配置上传文件的地址
    form.uploadDir = path.join(__dirname, '../', '../', '../', 'public', 'article_upload')
        // 配置上传文件保留后缀名
    form.keepExtensions = true
        // 解析客户端传递的文件
    form.parse(req, (err, fields, files) => {
        const PIC = files.file.path.split('public')[1]
        const data = {
            temp_url: PIC,
            view_url: PIC
        }
        if (PIC) {
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
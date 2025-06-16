// username: hquan26122003
// password: eApcZKehmldRD38A

// mongodb compass: ứng dụng để trực quan hóa csdl
// mongoose: thư viện hỗ trợ dùng mongodb trong nodejs: CRUD -> code nodejs -> code mongodb

// connectionString: chuỗi kết nối
// crud:: tốc độ cao và có thể lưu trữ dữ liệu lớn

const mongoose = require('mongoose')
const CONNETION_STRING = 'mongodb+srv://hquan26122003:eApcZKehmldRD38A@cluster0.gf5fugd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

// router -> middleware -> controller <- model
// kết nối tới CSDL -> truy vấn | tìm kiếm -> thêm sửa xóa
const connectDatabase = () => {
    mongoose.connect(CONNETION_STRING)
    .then(() => {
        console.log("Database connection successful")
    })
    .catch((err) => {
        console.log("Database connection error: " + err.message)
    })
}

module.exports = connectDatabase
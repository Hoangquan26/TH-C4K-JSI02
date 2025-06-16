//B1: đặt tên COLLECTION/DOCUMENT -> B2: tạo schema: cấu trúc dữ liệu -> tạo model
const { Schema, model, Types } = require('mongoose')
// Schema: hỗ trợ cấu trúc dữ liệu
// Model: chuyển Schema thành model -> thao tác bằng nodejs
// Types: Định nghĩa kiểu dữ liệu
const DOCUMENT_NAME = "user"
const COLLECTION_NAME = "users"
const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    isAdmin: Boolean,
    avatar: String // cloudinary: up ảnh lên cloud => url
} , {
    // đặt tên cho collection
    collection: COLLECTION_NAME
})
// tạo model: tên và schema //Create -> Update -> Read -> Delele
const userModel = model(DOCUMENT_NAME, userSchema)
module.exports = userModel
const userModel = require('../models/user.model')
// chứa dữ liệu của trang web
const login = async(username, password) => {
    // username, password: do người dùng truyền vào từ view
    // userModel: dữ liệu thực tế của trang web
    // lặp qua model để kiểm tra
    
    const user = await userModel.find()
        
    // model.findOne()

    // userModel.create()
    // userModel.findByIdAndUpdate()

    // userModel.deleteOne()

    // Minh1 // Minh2 // Minh
}

const register = (username, password) => {

}

module.exports = {
    login,
    register
}
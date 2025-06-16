// req -> ||
// client -> middleware -> router -> controller
// next: dùng để cho phép req tiếp tục đi tới router
const authMiddleware = (req, res, next) => {
    const user = req.session.user
    if(user){
        return next()
    }
    res.redirect('/login')
}

module.exports = authMiddleware
// middle: xác thực đăng nhập sẽ kiểm tra nếu đăng nhập rồi thì cho đi tiếp
// đến router còn chưa thì chặn req lại
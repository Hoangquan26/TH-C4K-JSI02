// login
// register
const express = require('express')
const router = express.Router()
// định tuyến đường dẫn mà người dùng cần tới
const { login } = require('../controllers/auth.controller')
// client -> router -> controller <- model
router.post('/login', (req, res) => {
    console.log(req.body)
    // controller
    // fetch('/..', { body: {username: .. , password: ..} })
    const username = req.body.username
    const password = req.body.password
    const result = login(username, password)
    // 401
    if(result.statusCode == 401) {
        res.redirect('/login')
    }
    else if(result.statusCode == 200) {
        // truy cập tới request.session và lưu người dùng
        // lưu phiên đăng nhập của người dùng | mã hóa thông tin của người dùng -> server
        req.session.user = result.user
        res.redirect('/home')
    }
})


router.post('/register', (req, res) => {
    // controller
})

router.post('/logout', (req, res) => {
    req.session.user = null
})

module.exports = router
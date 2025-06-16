const express = require('express')
const authMiddleware = require('../middlewares/auth.middleware')
// router: 1 thành phần trong thư viện express 
// khởi tạo router
const router = express.Router() 

router.get('/dang-nhap', (req, res) => {
    res.render('home')
})

router.get('/chua-dang-nhap', (req, res) => {
    // request | 1: yêu cầu người dùng
    // response | 2: tín hiệu trả về
    const array = [
        {
          "id": 1,
          "name": "John",
          "salary": 5000
        },
        {
          "id": 2,
          "name": "Franc",
          "salary": 4000
        },
        {
          "id": 3,
          "name": "Rames",
          "salary": 9000
        }
    ]

    //name được lấy từ database
    res.render('home', {array})
})

router.get('/about', (req, res) => {
    res.render('about')
    // res.send(): gửi dữ liệu về
})

router.get('/login', (req, res) => {
  res.render('login')
  // res.send(): gửi dữ liệu về
})
// req.session.user
// middleware: client -> middleware: kiểm tra đăng nhập người dùng | thay đổi req.client -> router
// Kiểm tra phiên đăng nhập của người dùng
// C1: viết middleware tới đằng trước function của router
// CRUD 
router.use('', authMiddleware)

router.get('/check-out', (req, res) => {
})
router.get('/cart', (req, res) => {
})

// key: "không ai biết được" -> mã hóa
module.exports = router
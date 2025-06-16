// thư viện
const express = require('express')
const {engine} = require('express-handlebars')
const session = require('express-session')
const connectDatabase = require('./src/models/init.database')

// từ khóa require để yêu cầu thư viện express truyền vào 
// biến const express
const app = express()

app.use(session({
    secret: 'XBI1E#BRb&lBKVr&qQbZ5bS46CM0JXEtuRNAhRCOspxZdmN@SEmFlrhNk*4h3kJ2',
    resave: false,
    saveUninitialized: false
}))
// tạo ứng dụng express
app.use(express.json())
// tạo ứng dụng express
app.use(express.urlencoded())
// cài đặt engine HTML
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', './src/views')

app.use(express.static('./public'))
// định tuyến cho ứng dụng: lắng nghe yêu cầu người dùng tại
// vị trí bất kỳ
// localhost:3000

// router
const userRouter = require('./src/routers/user.router')
const authRouter = require('./src/routers/auth.router')
// 
app.use("/", userRouter)
app.use("/auth", authRouter)
// localhost:3000/auth/login
// localhost:3000/auth/register

connectDatabase()
// arrow function: ngắn hơn
app.listen(3000, () => {
    console.log("Express application is running | port: 3000")   
})
// chạy trên cổng 3000: 
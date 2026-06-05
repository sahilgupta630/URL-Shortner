const express = require('express')
const { connectDB } = require('./connectionDB/connection.js')
const cors = require('cors')
const authRoutes = require('./routes/authRoutes.js')
const urlRoutes = require('./routes/urlRoutes.js')
const cookieParser = require('cookie-parser')

const app = express()



require('dotenv').config()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: ['http://localhost:3000', 'https://url-shortner-client-two.vercel.app'],
    credentials: true
}))
// Connect to MongoDB

connectDB(process.env.URI).then(() => {
    console.log("connected to DB...")
    app.listen(process.env.PORT, () => console.log(`Server started on PORT: ${process.env.PORT}`))
})


// Url Routes

app.get('/api/user', urlcontrollers.get_url)
app.post('/api/user', urlcontrollers.post_url)
app.delete('/:shortid', urlcontrollers.delete_url)
app.get('/:shortid', urlcontrollers.get_click_short_url)
app.post('/api/user/premium', urlcontrollers.post_premium_url)
app.get('/analytics/:shortid', urlcontrollers.get_clicks_data)

// Auth routes
app.post('/signup', authcontrollers.signup_post)
app.post('/login', authcontrollers.login_post)
app.post('/workspace', userValidation)
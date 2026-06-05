const express = require('express')
const { connectDB } = require('./connectionDB/connection.js')
const cors = require('cors')
const authRoutes = require('./routes/authRoutes.js')
const urlRoutes = require('./routes/urlRoutes.js')
const cookieParser = require('cookie-parser')
const { errorHandler } = require('./middleware/errorHandler.js')

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


// Register Routers
app.use('/', urlRoutes)
app.use('/', authRoutes)

// Error Handler (must be after all routes)
app.use(errorHandler)
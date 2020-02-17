const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')

const app = express()

// Connect Database
connectDB()

// Init Middleware
app.use(express.json({ extended: false }))
app.use(cors({ origin: 'http://localhost:3000' }))

app.get('/', (req, res) => res.json({ msg: 'Welcome to the playground...' }))

// Define Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`)
})
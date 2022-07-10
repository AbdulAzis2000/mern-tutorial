console.log("Hello Azis")
const express = require('express')
const dotenv = require('dotenv').config()
const { erorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000


const app = express()
app.get('/api/goals',(req,res)=>{
    res.send('Get Goals')
})
app.use('/api/goals', require('./routes/goalRoutes.js'))
app.use(errorHandler)
app.listen(port, () => console.log(`Server started on port ${port}`))
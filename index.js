const express = require('express')
const app = express()
const router = require('./routes/route')
const cors = require('cors')
const mongoose = require('mongoose')

mongoose.connect("enter the database url here").then(()=>{console.log('Connected to database')
app.listen(5000,()=> console.log('server started'))
})

app.use(cors())
// routes
app.use(router)
// server is listening on port 5000


    
    


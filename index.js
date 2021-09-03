const express = require('express')
const app = express()
const router = require('./routes/route')
const cors = require('cors')
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://pendharisufiyan:uRH4v7rhjgf2Z6-@cluster0.u6mw7.mongodb.net/Data?retryWrites=true&w=majority').then(()=>{console.log('Connected to database')
app.listen(5000,()=> console.log('server started'))
})

app.use(cors())
// routes
app.use(router)
// server is listening on port 5000


    
    


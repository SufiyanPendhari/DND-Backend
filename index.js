const express = require('express')
const app = express()
const router = require('./routes/route')
const cors = require('cors')


app.use(cors())
// routes
app.use(router)
// server is listening on port 5000
app.listen(5000,()=> console.log('server started'))


    
    


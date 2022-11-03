const express = require('express')
const cors = require('cors')
require('dotenv/config')
const mongoose = require('mongoose')
const quotationRoute = require('./Routes/quotation')

const app = express()

mongoose.connect(process.env.MONGO_URL).then(console.log("Database Connected Successfully")).catch(err=>console.log(err))

app.use(cors())
app.use(express.json())

app.use('/api/quotation/', quotationRoute)

app.listen(process.env.PORT || 5000, ()=>{
    console.log('Server is running on port 5000')
})
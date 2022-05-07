// Imports 
const express = require('express');
const cors = require('cors')
const PORT = process.env.PORT || 3001;
const app = express();
const middleware = require('./middleware')

//Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

//All Routes




//Express Server
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
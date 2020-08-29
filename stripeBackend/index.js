const cors = require('cors');
const express = require('express');
//const stripe = require('stripe');
const uuid = require("uuid/v4");

const app= express();

app.use(express.json);
app.use(cors())

//Routes
app.get('/', (req, res)=>{
    res.send('It works great !!!')
})

//listen
app.listen(4000, ()=> console.log("Listening on port 4000"));
const express = require('express')
const app = express();
const db = require('./db');


const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/',(req,res)=>{
    res.send("welcome")
})

//Import the router files
const personRoutes = require('./routes/personRoutes');


//use the routes
app.use('/person',personRoutes);

app.listen(3000, ()=>{
    console.log(`listening on port 3000`);
})
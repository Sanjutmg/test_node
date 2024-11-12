const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();
const passport = require('./auth');


const bodyParser = require('body-parser');
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

//Middleware Function
const logRequest = (req, res, next)=>{
    console.log(`${new Date().toLocaleString()} Request Made to : ${req.originalUrl}`);
    next(); //move on to the next phase

}
app.use(logRequest);
//auth
app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate('local',{session:false})

app.get('/',(req,res)=>{
    res.send("welcome")
})

//Import the router files
const personRoutes = require('./routes/personRoutes');


//use the routes
app.use('/person', localAuthMiddleware ,personRoutes);

app.listen(PORT, ()=>{
    console.log(`listening on port 3000`);
})
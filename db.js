const mongoose = require('mongoose');
//for local service data store garn ko la
// mongoose.connect('mongodb://localhost:27017/nodes')

//for online or clould ma data store garn ko lagi
// mongoose.connect('mongodb+srv://sanjutamang:sanjutmg@cluster0.kgr0v.mongodb.net/')

mongoose.connect('mongodb+srv://<db_username>:sanju1234tmg@cluster0.d6ncg.mongodb.net/')
.then(()=>console.log("connected to MongoDB"))
.catch((error)=>console.error("connection error:",error));


// const db = mongoose.connection;
// db.on('connection',()=>{
//     console.log('MongoDB disconnected');
// });
// db.on('error',(err)=>{
//     console.error('mongoDB connection error',err);

// });

// db.on('disconnected', ()=>{
//     console.log('MongoDB disconnected');
// });
// module.exports = db;
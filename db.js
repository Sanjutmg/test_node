const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nodes')
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
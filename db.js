const mongoose = require('mongoose');
require('dotenv').config();

//for local service data store garn ko la
// mongoose.connect('mongodb://localhost:27017/nodes')

//for online altas or clould ma data store garn ko lagi
// mongoose.connect('mongodb+srv://sanjutamang:sanjutmg@cluster0.kgr0v.mongodb.net/')

// mongoose.connect('mongodb+srv://<db_username>:sanju1234tmg@cluster0.d6ncg.mongodb.net/')
// .then(()=>console.log("connected to MongoDB"))
// .catch((error)=>console.error("connection error:",error));
// const mongoURL = 'mongodb://localhost:27017/nodes'; // Replace with your MongoDB URL
// const mongoURL = 'mongodb+srv://sanjutamang:sanju1234tmg@cluster0.d6ncg.mongodb.net/'

const mongoURL = process.env.MONGODB_URL;

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURL)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB:', err));


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
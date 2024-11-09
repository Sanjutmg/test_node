const mongoose = require('mongoose')
const personSchema = new mongoose.Schema({
    name:{
        type:String,
        requred:true,
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        requred:true
    },
    mobile:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        requred:true,
        unique:true
    },
    address:{
        type:String
    },
    salary:{
        type:Number,
        requred:true
    }
});

const Person = mongoose.model("Person", personSchema);
module.exports = Person;
const express = require('express');
const router = express.Router();
const Person = require('../models/Person');

//Post
router.post('/',async(req,res)=>{
    try{
        const data = req.body
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

//Get method routes to get the person
router.get('/', async(req,res)=>{
    try{
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);

    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Sercer Error'});

    }
})

router.get('/:workType', async(req,res)=>{
    try{
        const workType = req.params.workType;
        if(workType=='chef' || workType=='manager' || workType=='waiter'){
            const response = await Person.find({work:workType});
            console.log('response fetched');
            res.status(200).json(response);
        }else{
            res.status(404).json({error:'Invalid Server Error'});
        }

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});

    }
})

//put method router to get the person update

router.put('/:id', async(req,res)=>{
    try{
        //Extract the id from the Url parameter
        const personId = req.params.id;

        //update data for the person
        const updatedPersonData = req.body;

        const response = await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new:true,
            runValidators:true,
        })
        if(!response){
            return res.status(404).json({error: 'Person not found'});
        }
        console.log('data Updated');
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});

    }
})

//delete method router 
router.delete('/:id',async(req,res)=>{
    try{
        const personId = req.params.id;

        //Assuming you have a person model

        const response = await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error:'Person not found'});
        }
        console.log('data delete');
        res.status(200).json({message:'Person delete Successfully'});

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});

    }
})
module.exports = router;
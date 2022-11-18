require('dotenv').config();

const express = require('express');
const app = express();
const Company = require('./models/company');
const mongoose = require('mongoose');

const dbURL = process.env.DB_URL;
main().catch(err => console.log(err));

async function main() {
    
    console.log('database connected');
  await mongoose.connect(dbURL);

}


app.post('/add', async(req, res)=> {

    const { name } = req.body;
    const company = new Company({name});
    await company.save();
    res.send('added');
 })




app.listen('5000', ()=>{
    console.log('listening to port 5000');
})
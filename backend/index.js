require('dotenv').config();

const express = require('express');
const app = express();
const Company = require('./models/company');
const mongoose = require('mongoose');


app.use(express.json());
app.use(express.urlencoded({extended:true}));

const dbURL = process.env.DB_URL;
main().catch(err => console.log(err));

async function main() {
    
    console.log('database connected');
  await mongoose.connect(dbURL);

}

app.get('/add', (req,res)=>{
  console.log('hey');
})


app.post('/add', async(req, res)=> {

  console.log(req.body);
    const { name } = req.body;
    const company = new Company({name});
    await company.save();
    res.send('added');
 })


 const port = 5000;


app.listen(port, ()=>{
    console.log(`listening to the port ${port}`);
})
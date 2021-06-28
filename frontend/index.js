const express= require('express');
const path = require('path')
const data=require('./data/bollywood.json');
const app=express();
app.set('view engine','hbs');
console.log(data);

app.use(express.static(path.join(__dirname , './public')))

app.get('/',(req,res)=>
{
    res.render('index.hbs',{item:data})
    // console.log(data);
    res.render('index.hbs',{allData:data})
})

app.listen(5698,()=>
{
    console.log('Surver running 5698......');
});

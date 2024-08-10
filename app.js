const express=require('express')
const app=express();
const ejs=require('ejs')
const cookieParser=require('cookie-parser')
const path=require('path');

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.send('hi')
})
app.listen(3000,(req,res)=>{
    console.log('server is runnig fine')
})
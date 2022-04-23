const express=require('express');

const app=express();


app.get('/',(req,res)=>{
    res.send( {
        name:"Express"
    })
})
app.listen(8000,()=>{
    console.log('server is running on 8000');
})
const express=require('express');

const app=express();


app.get('/',(req,res)=>{
    res.send( {
        name:"Express"
    })

});

app.get('/home',(req,res)=>{
    res.send( {
        name:"Express home"
    })

})

const PORT=process.env.PORT;
app.listen(8000,()=>{
    console.log('server is running on 8000');
})
// Sandeep_@#420
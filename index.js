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

const PORT=process.env.PORT || 8000;
app.listen(PORT,"0.0.0.0",()=>{
    console.log('server is running on 8000');
})
// Sandeep_@#420
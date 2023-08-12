const express=require('express');
const app=express();
const port=8001;

app.listen(port,function(err){
    if(err){
        console.log(`Error on running port:${err}`);
    }
    console.log(`Server is Running OP on Port:${port}`);

});
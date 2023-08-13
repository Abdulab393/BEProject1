const express=require('express');
const app=express();
const port=8001;

// setting our Router or use express router

app.use('/',require('./routes/index'));

app.listen(port,function(err){
    if(err){
        console.log(`Error on running port:${err}`);
    }
    console.log(`Server is Running OP on Port:${port}`);

});
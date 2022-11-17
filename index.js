const express = require('express');
const app = express();
const mid1=(res,req,next)=>{
    console.log("i am middleware1 globally");
    next();
}
const mid2=(res,req,next)=>{
    console.log("i am middleware1");
    next();
}
app.use(mid1);

app.get('/',mid1,(res,req)=>{
    res.send('<h1>hello from home</h1>');

});
app.get('/about', mid1,(res,req)=>{
    res.send('<h1> I am from About page</h1>')
});
app.get('/contact',(res,req)=>{
    res.send('<h1> I am from Contact Page</h1>')
});
app.get('/contact',(res,req)=>{
    res.send('<h1>I am from contact page</h1>')
});

app.listen(5000,()=>{
    console.log('server is running');
})
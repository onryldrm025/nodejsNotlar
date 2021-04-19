const express = require('express');
const router2 = require('./routers/router2')
const app = express();
const port = process.env.PORT || 3000;


//middleware
app.use((req,res,next)=>{
    //first middleware
    console.log('All request in...')
    next()

})

app.get('/',(req,res)=>{
    res.status(200)
    res.write('Home Page')
    res.end()
    
})


require('./routers/router1')(app) // <-------- /allRouterheader/hi first way router + middleware
app.use('/router2',router2)       // <-------- /router2/sayHello router + middleware

app.use('/err',(req,res,next)=>{
    //first middleware
    console.log('just err request in...')
    next()

})
app.get('/err',(req,res,next)=>{
    console.log('err')
    if(false){
        res.write('True')
    }else{
        next('Eror /err method')
    } 
})


const middleware3 = (req,res,next)=>{
    console.log('Fİrst middleware3')
    next()
}

app.get('/middleware3',[middleware3],(req,res,next)=>{
    console.log('')
    res.status(200)
    res.write('middleware3')
    res.end()
})

//middleware
app.use((err,req,res,next)=>{
    //first middleware
    console.log(err + 'deneme')
    res.status(400)
    res.write('err')
    res.end()
    
})



app.listen(port,()=>{
    console.log(`Port ${port} runnig... `)
})
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// --- import module way 1
const myModule = require('./myModule');
// --- use module way 1
console.log(myModule.f1(3,5))
console.log(myModule.f2(5,3))

// --- import module way 2
const {f1,f2} = require('./myModule');
// --- use module way 2
console.log(f1(3,5))
console.log(f2(5,3))


const myModule2 = require('./myModule2');
myModule2.sayHello('Onur')
myModule2.sayGoodBye('Onur')

const { sayHello, sayGoodBye} = require('./myModule2');
sayHello('Onur')
sayGoodBye('Onur')

require('./myDefaultModule')()
const myDefaultModule = require('./myDefaultModule')
myDefaultModule()




app.get('/a',function(req,res){
    console.log('Normal Function');
    res.send('Normal Function!!')
})  

app.get('/b',(req,res)=>{
    console.log('Arrow Function');
    res.send('Arrow Function!!')
})



app.listen(port,()=>{
    console.log(`${port} listen...`)
})
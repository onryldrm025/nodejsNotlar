const router = require('express').Router()


module.exports = (app)=>{

    app.use('/allRouterheader',router)

    router.get('/hi',(req,res)=>{
        console.log('/allRouterheader/hi')
        res.write('/allRouterheader/hi')
        res.end()
    })


};












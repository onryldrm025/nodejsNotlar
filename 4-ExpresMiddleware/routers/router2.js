const router = require('express').Router()




router.get('/sayHello',(req,res)=>{
    res.write('router2 runnig')
    res.end()
})


module.exports = router;
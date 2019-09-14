const router = require('express').Router();
router.get('/', (req,res)=>{
    res.send('this is phone');
})
router.get('/wall', (req,res)=>{
    res.render('wall-phone');
})

module.exports = router;

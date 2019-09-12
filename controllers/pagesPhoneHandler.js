const router = require('express').Router();
router.get('/wall', (req,res)=>{
  res.render('wall-phone');
})

module.exports = router;

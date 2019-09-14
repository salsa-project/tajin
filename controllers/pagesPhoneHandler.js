const router = require('express').Router();

router.get('/', (req,res)=>{
  res.redirect('/mobile/home');
})
router.get('/home', (req,res)=>{
  res.render('home-phone', {device: req.device.type.toUpperCase()});
})
router.get('/wall', (req,res,next)=>{
  res.render('wall-phone')
})
router.get('/explore', (req,res)=>{
  res.render('explore-phone');
})
router.get('/stores', (req,res)=>{
  res.render('stores-phone');
})

// Signup/Login Function
signs();

//Functions
// Signup/Login Function
function signs(){
  //login handlers
  router.get('/login', (req,res)=>{
    res.render('login-phone');
  })
  router.post('/login', (req,res)=>{
    console.log(req.body);
    res.redirect('/wall-phone');
  })
  //signup handlers
  router.get('/signup', (req,res)=>{
    res.render('signup-phone');
  })
  router.post('/signup', (req,res)=>{
    console.log(req.body);
    res.redirect('/login-phone');
  })
}

module.exports = router;

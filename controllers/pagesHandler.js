const router = require('express').Router();

router.get('/', (req,res)=>{
  res.redirect('/home');
})
router.get('/home', (req,res)=>{
  res.render('home', {device: req.device.type.toUpperCase()});
})
router.get('/wall', (req,res,next)=>{
  res.render('wall')
})
router.get('/explore', (req,res)=>{
  res.render('explore');
})
router.get('/stores', (req,res)=>{
  res.render('stores');
})

// Signup/Login Function
signs();

//Functions
// Signup/Login Function
function signs(){
  //login handlers
  router.get('/login', (req,res)=>{
    res.render('login');
  })
  router.post('/login', (req,res)=>{
    console.log(req.body);
    res.redirect('/wall');
  })
  //signup handlers
  router.get('/signup', (req,res)=>{
    res.render('signup');
  })
  router.post('/signup', (req,res)=>{
    console.log(req.body);
    res.redirect('/login');
  })
}

module.exports = router;

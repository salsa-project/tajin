const router = require('express').Router();
var dir = 'phone/';

router.get('/', (req,res)=>{
  res.redirect('/mobile/home');
})
router.get('/home', (req,res)=>{
  res.render(dir + 'home-phone', {device: req.device.type.toUpperCase()});
})
router.get('/wall', (req,res,next)=>{
  res.render(dir + 'wall-phone')
})
router.get('/explore', (req,res)=>{
  res.render(dir + 'explore-phone');
})
router.get('/stores', (req,res)=>{
  res.render(dir + 'stores-phone');
})

// Signup/Login Function
signs();

//Functions
// Signup/Login Function
function signs(){
  //login handlers
  router.get('/login', (req,res)=>{
    res.render(dir + 'login-phone');
  })
  router.post('/login', (req,res)=>{
    console.log(req.body);
    res.redirect('/mobile/wall');
  })
  //signup handlers
  router.get('/signup', (req,res)=>{
    res.render(dir + 'signup-phone');
  })
  router.post('/signup', (req,res)=>{
    console.log(req.body);
    res.redirect('/mobile/login');
  })
}

module.exports = router;

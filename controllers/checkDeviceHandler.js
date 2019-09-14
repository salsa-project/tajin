//desktop pages
const pagesHandler = require('./pagesHandler');
//phone pages
const pagesPhoneHandler = require('./pagesPhoneHandler');

module.exports = function (app){
  //check all requests (device type)
  app.get('*', desktopOrPhone, pagesHandler)
  //mobile requests handler
  app.use('/mobile', pagesPhoneHandler);
}


function desktopOrPhone(req, res, next){
  let currentUrl = req.url;
  if(req.device.type == "desktop"){
    //for DESKTOP device
    console.log("\nConnected With: " + req.device.type);
    console.log("To: " + req.url);
    //and if URL not containing "/mobile"
    if(currentUrl.indexOf('mobile') == -1){

      console.log("\nConnected With: " + req.device.type);
      next();

    }else{
      //if Url contains "mobile"
      res.send("<h1 style='text-align: center; transform: translateY(50vh);'>You Can't Access This URL From Desktop!</h1>")
    }

  }else if(req.device.type == "phone" && currentUrl.indexOf('mobile') < 0){
    //for PHONE device
    console.log("\nConnected With: " + req.device.type);
    res.redirect('/mobile')
    console.log('REDIRECTING..');
    console.log("From: " + req.url);
  }else{
    if(req.device.type != "desktop"){
      console.log('To: ' + req.url);
      next();
    }
  }
}

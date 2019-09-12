const pagesHandler = require('./pagesHandler');
const pagesPhoneHandler = require('./pagesPhoneHandler');

module.exports = function (app){
  app.get('/*', (req,res,next)=>{
    if(req.device.type == "desktop"){
      next();
      console.log(req.device.type);
      app.use('/', pagesHandler);
    }else if(req.device.type == "phone"){
      next();
      console.log('is : ' + req.device.type);
      app.use('/', pagesPhoneHandler);
    }

  })
}

const express = require('express');
var device = require('express-device');
const bodyParser = require('body-parser');
const path = require('path');

//DESKTOP pages handler
const pagesHandler = require('./controllers/pagesHandler');
//PHONE pages handler
const pagesPhoneHandler = require('./controllers/pagesPhoneHandler');
//serve files depend on devices type (desktop/phone)
const deviceChecker = require('./controllers/checkDeviceHandler');

//invoke express
const app = express();

//Server running on PORT
const PORT = process.env.PORT || 5050;

//Template "ejs"
app.set('view engine', 'ejs');

//serve static file
app.use(express.static(path.join(__dirname, 'views')));
//parse forms
app.use(bodyParser.urlencoded({extended: true}));
//parse json
app.use(bodyParser.json());
//device checker middelware
app.use(device.capture());

//Device Checker & Handler
deviceChecker(app);


//serve responses on PORT
app.listen(PORT, console.log(`Server running on PORT : ${PORT}`));

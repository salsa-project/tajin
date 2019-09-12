const express = require('express');
var device = require('express-device');
const bodyParser = require('body-parser');
const path = require('path');

const pagesHandler = require('./controllers/pagesHandler');

const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.static(path.join(__dirname, 'views')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(device.capture());

app.use('/', pagesHandler);

app.set('view engine', 'ejs');



app.listen(PORT, console.log(`Server running on PORT : ${PORT}`));

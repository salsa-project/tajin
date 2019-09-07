const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const pagesHandler = require('./routes/pagesHandler');

const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.static(path.join(__dirname, 'views')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', pagesHandler);

app.set('view engine', 'ejs');



app.listen(PORT, console.log(`Server running on PORT : ${PORT}`));

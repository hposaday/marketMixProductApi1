const express = require('express');
const app = express();
const morgan = require('morgan');

const {mongoose} = require('./database');

//Settings
app.set('port',process.env.PORT || 3001);

//MiddleWares
app.use(morgan('dev'));
app.use(express.json());


//Routes
app.use('/api/v1',require('./routes/routes'));

//starting serer
app.listen(app.get('port'),() =>{
    console.log("server on port", app.get("port"));

});
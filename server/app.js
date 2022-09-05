const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const db = require('./configs/db.config');

const indexRouter = require('./routes/index');
const customersRouter = require('./routes/customers');

const app = express();


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/customers', customersRouter(db));

// Add user authentication
app.post('/user-data',(req,res)=>{
  let credentials = { 
    email: req.body.data.email,
    password:req.body.data.password,
    token:'registered'
  };
  db.query(`SELECT * FROM users WHERE email = $1 AND password = $2`, [credentials.email,credentials.password])
    .then(response =>{
      response.rows[0]['token']=credentials.token
      res.send(response.rows[0])})
    .catch(e => console.error(e.stack));
})


module.exports = app;

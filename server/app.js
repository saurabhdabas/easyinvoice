const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const db = require('./configs/db.config');

const indexRouter = require('./routes/index');
const customersRouter = require('./routes/customers');
const invoicesRouter = require('./routes/invoices');

const app = express();


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/customers', customersRouter(db));
app.use('/invoices', invoicesRouter(db));

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
// Add the client
app.post('/customers/add',(req,res)=>{
  console.log(req.body.data)
  let formData = {
    name:req.body.data.name,
    email:req.body.data.email,
    country:req.body.data.country,
    street:req.body.data.street,
    city:req.body.data.city,
    province:req.body.data.province,
    zipcode:req.body.data.zipcode,
    company:req.body.data.company,
    taxnumber:req.body.data.taxnumber
  }
  db.query(
    `INSERT INTO customers(name,email,country,street,city,province,zipcode,company,taxnumber)
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
    [formData.name,formData.email,formData.country,formData.street,formData.city,formData.province,formData.zipcode,formData.company,formData.taxnumber])
  .then((response) => res.send(response))
  .catch((error) => res.send(error));
})

//Remove the client
app.put('/customers/:id/delete',(req, res) => {
  db.query(`DELETE FROM customers WHERE id = $1;`, [req.body.customerId])
    .then((response) => res.send(response))
    .catch((error) => res.send(error));
});

//Update the client
app.put('/customers/:id/update',(req, res) => {
  let formData = {
    name:req.body.data.name,
    email:req.body.data.email,
    country:req.body.data.country,
    street:req.body.data.street,
    city:req.body.data.city,
    province:req.body.data.province,
    zipcode:req.body.data.zipcode,
    company:req.body.data.company,
    taxnumber:req.body.data.taxnumber
  }
  db.query(`UPDATE customers SET name=$2, email=$3, country=$4, street=$5, city=$6, province=$7, zipcode=$8, company=$9, taxnumber=$10
  WHERE id = ($1) RETURNING *;`, [req.body.customerId,formData.name,formData.email,formData.country,formData.street,formData.city,formData.province,formData.zipcode,formData.company,formData.taxnumber])
    .then((response) => res.send(response))
    .catch((error) => res.send(error));
});
// Add the Invoice
app.post('/invoices/add',(req,res)=>{
  let formData = {
    name:req.body.data.name,
    email:req.body.data.email,
    country:req.body.data.country,
    street:req.body.data.street,
    city:req.body.data.city,
    province:req.body.data.province,
    zipcode:req.body.data.zipcode,
    company:req.body.data.company,
    taxnumber:req.body.data.taxnumber,
    date:req.body.data.date,
    duedate:req.body.data.duedate,
    notes:req.body.data.notes,
    phone:req.body.data.phone,
    title:req.body.data.title,
    subtotal:req.body.data.subtotal,
    balance:req.body.data.balance,
    message:req.body.data.message,
    tabledata:req.body.data.tabledata
  }
  db.query(
    `INSERT INTO invoices (name,email,country,street,city,province,zipcode,company,taxnumber,date,duedate,notes,phone,title,subtotal,balance,message,tabledata)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18) RETURNING *`,
    [formData.name,formData.email,formData.country,formData.street,formData.city,formData.province,formData.zipcode,formData.company,formData.taxnumber,formData.date,formData.duedate,formData.notes,formData.phone,formData.title,formData.subtotal,formData.balance,formData.message,formData.tabledata])
  .then((response) => {res.send(response)})
  .catch((error) => res.send(error));
})
// Retrieve particular Invoice
app.get('/invoices/:id',(req,res)=>{
  const invoice = req.params;
  db.query(`SELECT * FROM invoices WHERE id = $1`, [invoice.id])
    .then(response =>{
      res.send(response.rows[0])
    })
    .catch(e => console.error(e.stack));
})
//Remove the invoice
app.put('/invoices/:id/delete',(req, res) => {
  db.query(`DELETE FROM invoices WHERE id = $1;`, [req.body.invoiceId])
    .then((response) => res.send(response))
    .catch((error) => res.send(error));
});

//Update the invoice
app.put('/invoices/:id/update',(req, res) => {
  let formData = {
    name:req.body.data.name,
    email:req.body.data.email,
    country:req.body.data.country,
    street:req.body.data.street,
    city:req.body.data.city,
    province:req.body.data.province,
    zipcode:req.body.data.zipcode,
    company:req.body.data.company,
    taxnumber:req.body.data.taxnumber,
    date:req.body.data.date,
    duedate:req.body.data.duedate,
    notes:req.body.data.notes,
    phone:req.body.data.phone,
    title:req.body.data.title,
    message:req.body.data.message,
    tabledata:req.body.data.tabledata
  }
  db.query(`UPDATE invoices SET name=$2, email=$3, country=$4, street=$5, city=$6, province=$7, zipcode=$8, company=$9, taxnumber=$10, date=$11, duedate=$12, notes=$13, phone=$14, title=$15, message=$16, tabledata=$17
  WHERE id = ($1) RETURNING *;`, [req.body.invoiceId,formData.name,formData.email,formData.country,formData.street,formData.city,formData.province,formData.zipcode,formData.company,formData.taxnumber,formData.date,formData.duedate,formData.notes,formData.phone,formData.title,formData.message,formData.tabledata])
    .then((response) => res.send(response))
    .catch((error) => res.send(error));
});


module.exports = app;

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const db = require('./configs/db.config');
const addToCustomers = require('./db/queries/addToCustomers');
const addToCompanies = require('./db/queries/addToCompanies');
const updateCustomers = require('./db/queries/updateCustomers');
const updateCompanies = require('./db/queries/updateCompanies');
const customers = require('./db/queries/getAllCustomers');
const customerWithId = require('./db/queries/getCustomerById');
const ordersByCustomer = require('./db/queries/getOrdersByCustomerId');

const dashboardRouter = require('./routes/dashboard');
const customersRouter = require('./routes/customers');
const invoicesRouter = require('./routes/invoices');


const app = express();


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/dashboard', dashboardRouter(db));
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
    photo:req.body.data.photo,
    firstname:req.body.data.firstname,
    lastname:req.body.data.lastname,
    phonenumber:req.body.data.phonenumber,
    email:req.body.data.email,
    customersince:req.body.data.date,
    company_name:req.body.data.company_name,
    company_logo:req.body.data.company_logo,
    taxnumber:req.body.data.taxnumber,
    street:req.body.data.street,
    city:req.body.data.city,
    zipcode:req.body.data.zipcode,
    province:req.body.data.province,
    country:req.body.data.country
  }
  const customersQuery=addToCustomers.addToCustomers(formData);
  const companiesQuery=addToCompanies.addToCompanies(formData);
  Promise.all([customersQuery,companiesQuery])
  .then((response)=>{
    res.send(response);
  })
  .catch((error) => res.send(error));
})
// Retrieve particular Customer
app.get('/customers/:id',(req,res)=>{
  const customer = req.params;
  const orders =ordersByCustomer.getOrdersByCustomerId(customer);
  const customerById =customerWithId.getCustomerById(customer);

  Promise.all([customerById,orders])
  .then((response)=>{
  res.send(response)}
  );
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
    customerId:req.body.customerId,
    companyId:req.body.customerId,
    photo:req.body.data.photo,
    firstname:req.body.data.firstname,
    lastname:req.body.data.lastname,
    phonenumber:req.body.data.phonenumber,
    email:req.body.data.email,
    customersince:req.body.data.date,
    company_name:req.body.data.company_name,
    company_logo:req.body.data.company_logo,
    taxnumber:req.body.data.taxnumber,
    street:req.body.data.street,
    city:req.body.data.city,
    zipcode:req.body.data.zipcode,
    province:req.body.data.province,
    country:req.body.data.country
  }
const updateCustomersQuery=updateCustomers.updateCustomers(formData);
const updateCompaniesQuery=updateCompanies.updateCompanies(formData);
Promise.all([updateCustomersQuery,updateCompaniesQuery])
.then(()=>{
  customers.getAllCustomers().then(data => {
    res.send(data);
  })

})
.catch((error) => res.send(error));

});
// Add the Invoice
app.post('/invoices/add',(req,res)=>{
  console.log("request.body.data:",req.body.data)
  let formData = {
    orderId:req.body.data.orderId,
    name:req.body.data.name,
    email:req.body.data.email,
    photo:req.body.data.photo,
    logo:req.body.data.logo,
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
    `INSERT INTO invoices (orderId,name,email,photo,logo,country,street,city,province,zipcode,company,taxnumber,date,duedate,notes,phone,title,subtotal,balance,message,tabledata)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21) RETURNING *`,
    [formData.orderId,formData.name,formData.email,formData.photo,formData.logo,formData.country,formData.street,formData.city,formData.province,formData.zipcode,formData.company,formData.taxnumber,formData.date,formData.duedate,formData.notes,formData.phone,formData.title,formData.subtotal,formData.balance,formData.message,formData.tabledata])
  .then((response) => {
    console.log("response:",response);
    res.send(response)
  })
  .catch((error) => res.send(error));
})
// Retrieve particular Invoice
app.get('/invoices/:id',(req,res)=>{
  const invoice = req.params;
  db.query(`SELECT * FROM invoices WHERE invoice_id = $1`, [invoice.id])
    .then(response =>{
      res.send(response.rows[0])
    })
    .catch(e => console.error(e.stack));
})
//Remove the invoice
app.put('/invoices/:id/delete',(req, res) => {
  db.query(`DELETE FROM invoices WHERE invoice_id = $1;`, [req.body.invoiceId])
    .then((response) => res.send(response))
    .catch((error) => res.send(error));
});

//Update the invoice
app.put('/invoices/:id/update',(req, res) => {
  let formData = {
    orderId:req.body.data.orderId,
    name:req.body.data.name,
    email:req.body.data.email,
    photo:req.body.data.photo,
    logo:req.body.data.logo,
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
  db.query(`UPDATE invoices SET orderId=$2 name=$3, email=$4, photo=$5, logo=$6, country=$7, street=$8, city=$9, province=$10, zipcode=$11, company=$12, taxnumber=$13, date=$14, duedate=$15, notes=$16, phone=$17, title=$18, message=$19, tabledata=$20
  WHERE invoice_id = ($1) RETURNING *;`, [req.body.invoiceId,formData.orderId,formData.name,formData.email,formData.photo,formData.logo,formData.country,formData.street,formData.city,formData.province,formData.zipcode,formData.company,formData.taxnumber,formData.date,formData.duedate,formData.notes,formData.phone,formData.title,formData.message,formData.tabledata])
    .then((response) => {
      console.log(response);
      res.send(response)
    })
    .catch((error) => res.send(error));
});


module.exports = app;

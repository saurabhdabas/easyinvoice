const router = require('express').Router();

const customers = require('../db/queries/getAllCustomers');
module.exports = (db) => {
  // all routes will go here 
  
  router.get('/', (req, res) => {
    customers.getAllCustomers().then(data => {
      res.json(data);
    })
  });
  return router;
}
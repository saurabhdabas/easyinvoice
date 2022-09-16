const router = require('express').Router();

const invoices = require('../db/queries/getAllInvoices');
module.exports = (db) => {
  // all routes will go here 
  
  router.get('/', (req, res) => {
    invoices.getAllInvoices().then(data => {
      res.json(data);
    })
  });
  return router;
}
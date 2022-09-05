const router = require('express').Router();
const axios = require("axios").default;
const customers = require('../db/queries/getAllCustomers');
module.exports = (db) => {
  // all routes will go here 
  
  router.get('/', (req, res) => {
    customers.getAllCustomers().then(data => {
      res.json({customers: data});
    })
  });
  return router;
}
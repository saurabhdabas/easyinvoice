const router = require('express').Router();

const orders = require('../db/queries/getAllOrders');
module.exports = (db) => {
  // all routes will go here 
  
  router.get('/', (req, res) => {
    orders.getAllOrders().then(data => {
      res.json(data);
    })
  });
  return router;
}
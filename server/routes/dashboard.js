const router = require('express').Router();

const unpaidInvoices = require('../db/queries/getUnpaidInvoices');
const invoicesWithOrders = require('../db/queries/getInvoicesWithOrderStatus');
module.exports = (db) => {
  // all routes will go here 
  
  router.get('/', (req, res) => {
    const invoices = unpaidInvoices.getUnpaidInvoices();
    const invoicesWithOrdersStatus = invoicesWithOrders.getInvoicesWithOrderStatus(); 
    Promise.all([invoices,invoicesWithOrdersStatus])
    .then(data => {
      console.log(data)
      res.json(data);
    })
  });
  return router;
}
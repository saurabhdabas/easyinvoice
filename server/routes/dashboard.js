const router = require('express').Router();

const paidInvoices = require('../db/queries/getPaidInvoices');
const unpaidInvoices = require('../db/queries/getUnpaidInvoices');
const partialInvoices = require('../db/queries/getPartialInvoices');
const invoicesWithOrders = require('../db/queries/getInvoicesWithOrderStatus');
module.exports = (db) => {
  // all routes will go here 
  
  router.get('/', (req, res) => {
    const invoices = unpaidInvoices.getUnpaidInvoices();
    const paidOffInvoices = paidInvoices.getPaidInvoices();
    const partials = partialInvoices.getPartialInvoices();
    const invoicesWithOrdersStatus = invoicesWithOrders.getInvoicesWithOrderStatus(); 
    Promise.all([invoices,invoicesWithOrdersStatus,paidOffInvoices,partials])
    .then(data => {
      console.log(data)
      res.json(data);
    })
  });
  return router;
}
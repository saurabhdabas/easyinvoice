const db = require('../../configs/db.config');

const getUnpaidInvoices = () => {
	return db.query(
    "SELECT * FROM invoices JOIN customers ON customers.id = invoices.customerId JOIN payments on payment_id = invoice_id WHERE payment_status = 'UnPaid';")
    .then(data => {
		return data.rows;
	})
}
module.exports = {getUnpaidInvoices}
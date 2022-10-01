const db = require('../../configs/db.config');

const getPartialInvoices = () => {
	return db.query(
    "SELECT * FROM invoices JOIN customers ON customers.id = invoices.customerId JOIN orders on orders.order_id = invoice_id WHERE payment_status = 'Partial';")
    .then(data => {
		return data.rows;
	})
}
module.exports = {getPartialInvoices}
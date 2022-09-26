const db = require('../../configs/db.config');

const getPaidInvoices = () => {
	return db.query(
    "SELECT * FROM invoices JOIN orders ON orderId = orders.order_id JOIN customers ON customers.id = orders.customer_id JOIN payments on payment_id = invoice_id WHERE payment_status = 'Paid';")
    .then(data => {
		return data.rows;
	})
}
module.exports = {getPaidInvoices}
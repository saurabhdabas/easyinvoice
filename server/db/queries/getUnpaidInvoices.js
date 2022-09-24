const db = require('../../configs/db.config');

const getUnpaidInvoices = () => {
	return db.query(
    "SELECT * FROM invoices JOIN orders ON orderId = orders.order_id JOIN customers ON customers.id = orders.customer_id WHERE order_status = 'Unpaid';")
    .then(data => {
		return data.rows;
	})
}
module.exports = {getUnpaidInvoices}
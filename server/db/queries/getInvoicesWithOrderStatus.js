const db = require('../../configs/db.config');

const getInvoicesWithOrderStatus = () => {
	return db.query(
    "SELECT * FROM invoices JOIN orders ON orderId = orders.order_id JOIN customers ON customers.id = orders.customer_id;")
    .then(data => {
		return data.rows;
	})
}
module.exports = {getInvoicesWithOrderStatus}
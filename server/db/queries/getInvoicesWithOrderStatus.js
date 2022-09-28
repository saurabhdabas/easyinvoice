const db = require('../../configs/db.config');

const getInvoicesWithOrderStatus = () => {
	return db.query(
    "SELECT * FROM invoices JOIN customers ON customers.id = customerId JOIN payments on payment_id = invoice_id;")
    .then(data => {
		return data.rows;
	})
}
module.exports = {getInvoicesWithOrderStatus}
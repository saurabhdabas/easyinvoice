const db = require('../../configs/db.config');

const getAllOrders = () => {
	return db.query("SELECT * FROM orders JOIN payments ON order_id = payments.orderId JOIN customers ON customerId = customers.id;").then(data => {
		return data.rows;
	})
}
module.exports = {getAllOrders}
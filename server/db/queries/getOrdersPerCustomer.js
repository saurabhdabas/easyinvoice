const db = require('../../configs/db.config');

const getOrdersPerCustomer = (customer) => {
	return db.query("SELECT * FROM orders JOIN customers ON customer_id = id WHERE id = $1",[customer.id]).then(data => {
		return data.rows;
	})
}
module.exports = {getOrdersPerCustomer}
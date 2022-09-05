const db = require('../../configs/db.config');

const getAllCustomers = () => {
	return db.query("SELECT * FROM customers;").then(data => {
		return data.rows;
	})
}
module.exports = {getAllCustomers}
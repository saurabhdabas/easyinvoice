const db = require('../../configs/db.config');

const getAllCustomers = () => {
	return db.query("SELECT * FROM customers JOIN companies ON id = company_id;").then(data => {
		return data.rows;
	})
}
module.exports = {getAllCustomers}
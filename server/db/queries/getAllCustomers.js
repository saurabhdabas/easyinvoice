const db = require('../../configs/db.config');

const getAllCustomers = () => {
	return db.query("SELECT * FROM customers JOIN companies ON company_id = companyid;").then(data => {
		return data.rows;
	})
}
module.exports = {getAllCustomers}
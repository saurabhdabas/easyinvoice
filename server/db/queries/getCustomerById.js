const db = require('../../configs/db.config');

const getCustomerById = (customer) => {
	return db.query(`SELECT * FROM customers JOIN companies ON id = company_id WHERE id = $1`, [customer.id])
  .then(data => {
		return data.rows[0];
	})
  .catch(e => console.error(e.stack));
}
module.exports = {getCustomerById}
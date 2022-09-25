const db = require('../../configs/db.config');

const getAllOrders = () => {
	return db.query("SELECT * FROM orders;").then(data => {
		return data.rows;
	})
}
module.exports = {getAllOrders}
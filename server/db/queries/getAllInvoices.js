const db = require('../../configs/db.config');

const getAllInvoices = () => {
	return db.query("SELECT * FROM invoices;").then(data => {
		return data.rows;
	})
}
module.exports = {getAllInvoices}
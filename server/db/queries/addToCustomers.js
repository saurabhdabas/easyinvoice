const db = require('../../configs/db.config');

const addToCustomers = (formData) => {
	return db.query(
    `INSERT INTO customers(photo,firstname,lastname,phonenumber,email,customersince)
    VALUES($1, $2, $3, $4, $5, $6) RETURNING *`,
    [formData.photo,formData.firstname,formData.lastname,formData.phonenumber,formData.email,formData.customersince]).then(data => {
		return data.rows;
	})
}
module.exports = {addToCustomers}
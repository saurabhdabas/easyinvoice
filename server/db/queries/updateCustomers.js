const db = require('../../configs/db.config');

const updateCustomers = (formData) => {
	return db.query(
  `UPDATE customers SET photo=$2,firstname=$3, lastname=$4, phonenumber=$5,email=$6,customersince=$7
  WHERE id = ($1) RETURNING *;`, [formData.customerId,formData.photo,formData.firstname,formData.lastname,formData.phonenumber,formData.email,formData.customersince])
  .then(data => {
		return data.rows;
	})
}
module.exports = {updateCustomers}
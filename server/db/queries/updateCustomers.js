const db = require('../../configs/db.config');

const updateCustomers = (formData) => {
	return db.query(
  `UPDATE customers SET photo=$2,fullname=$3,phonenumber=$4,email=$5
  WHERE id = ($1) RETURNING *;`, [formData.customerId,formData.photo,formData.fullname,formData.phonenumber,formData.email])
  .then(data => {
		return data.rows;
	})
}
module.exports = {updateCustomers}
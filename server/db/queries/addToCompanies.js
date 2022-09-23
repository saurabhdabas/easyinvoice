const db = require('../../configs/db.config');

const addToCompanies = (formData) => {
	return db.query(
    `INSERT INTO companies(company_name,company_logo,taxnumber,street,city,zipcode,province,country)
    VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
    [formData.company_name,formData.company_logo,formData.taxnumber,formData.street,formData.city,formData.zipcode,formData.province,formData.country]).then(data => {
		return data.rows;
	})
}
module.exports = {addToCompanies}
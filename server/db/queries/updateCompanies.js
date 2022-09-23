const db = require('../../configs/db.config');

const updateCompanies = (formData) => {
	return db.query(
  `UPDATE companies SET company_name=$2, company_logo=$3, taxnumber=$4, street=$5, city=$6, zipcode=$7, province=$8, country=$9  
  WHERE company_id = ($1) RETURNING *;`, [formData.companyId,formData.company_name,formData.company_logo,formData.taxnumber,formData.street,formData.city,formData.zipcode,formData.province,formData.country])
  .then(data => {
    console.log(data.rows);
		return data.rows;
	})
}
module.exports = {updateCompanies}
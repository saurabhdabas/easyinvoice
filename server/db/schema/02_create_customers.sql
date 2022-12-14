-- schema/02_create_customers.sql
DROP TABLE IF EXISTS customers CASCADE;
-- CREATE CUSTOMERS
CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  photo VARCHAR(255) NOT NULL,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  phonenumber VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  customersince VARCHAR(255) NOT NULL,
  companyid INTEGER REFERENCES companies(company_id) ON DELETE CASCADE
);

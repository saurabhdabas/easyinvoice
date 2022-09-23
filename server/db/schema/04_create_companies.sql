-- schema/02_create_companies.sql
DROP TABLE IF EXISTS companies CASCADE;
-- CREATE COMPANIES
CREATE TABLE companies (
  company_id SERIAL PRIMARY KEY,
  company_name VARCHAR(255) NOT NULL,
  company_logo VARCHAR(255) NOT NULL,
  taxnumber VARCHAR(255) NOT NULL,
  street VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  zipcode VARCHAR(255) NOT NULL,
  province VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL
);

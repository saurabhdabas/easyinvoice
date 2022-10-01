-- schema/02_create_orders.sql
DROP TABLE IF EXISTS orders CASCADE;
-- CREATE ORDERS
CREATE TABLE orders (
  order_id SERIAL PRIMARY KEY,
  order_date VARCHAR(255) NOT NULL,
  order_description VARCHAR(255) NOT NULL,
  order_amount INTEGER NOT NULL,
  customer_id INTEGER  NOT NULL,
  customername VARCHAR(255) NOT NULL,
  customerphoto VARCHAR(255) NOT NULL,
  payment_id INTEGER  NOT NULL,
  payment_date VARCHAR(255) NOT NULL,
  payment_method VARCHAR(255) NOT NULL,
  payment_amount INTEGER NOT NULL,
  payment_status VARCHAR(255) NOT NULL
);
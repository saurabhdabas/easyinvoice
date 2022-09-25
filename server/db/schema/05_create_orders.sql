-- schema/02_create_orders.sql
DROP TABLE IF EXISTS orders CASCADE;
-- CREATE ORDERS
CREATE TABLE orders (
  order_id SERIAL PRIMARY KEY,
  order_date VARCHAR(255) NOT NULL,
  order_description VARCHAR(255) NOT NULL,
  order_amount INTEGER NOT NULL,
  customer_id INTEGER  NOT NULL REFERENCES customers(id) ON DELETE CASCADE
);
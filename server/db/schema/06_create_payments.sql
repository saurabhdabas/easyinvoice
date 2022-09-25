-- schema/02_create_orders.sql
DROP TABLE IF EXISTS payments CASCADE;
-- CREATE Payments
CREATE TABLE payments (
  payment_id SERIAL PRIMARY KEY,
  payment_date VARCHAR(255) NOT NULL,
  payment_method VARCHAR(255) NOT NULL,
  payment_amount INTEGER NOT NULL,
  payment_status VARCHAR(255) NOT NULL,
  orderId INTEGER  NOT NULL REFERENCES orders(order_id) ON DELETE CASCADE,
  customerId INTEGER  NOT NULL REFERENCES customers(id) ON DELETE CASCADE
);
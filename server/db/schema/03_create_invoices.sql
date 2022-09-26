-- schema/02_create_invoices.sql
DROP TABLE IF EXISTS invoices CASCADE;
-- CREATE Invoices
CREATE TABLE invoices (
  invoice_id SERIAL PRIMARY KEY,
  orderId INTEGER REFERENCES Orders(order_id) ON DELETE CASCADE,
  paymentId INTEGER REFERENCES Payments(payment_id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  photo VARCHAR(255) NOT NULL,
  logo VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL,
  street VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  province VARCHAR(255) NOT NULL,
  zipcode VARCHAR(255) NOT NULL,
  company VARCHAR(255) NOT NULL,
  taxnumber VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  date VARCHAR(255) NOT NULL,
  duedate VARCHAR(255) NOT NULL,
  notes VARCHAR(255) NOT NULL,
  subtotal INT NOT NULL,
  balance INT NOT NULL,
  message VARCHAR(255) NOT NULL,
  tabledata JSONB
);
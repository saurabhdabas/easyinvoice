-- seeds/05_payments.sql
-- payments
INSERT INTO payments (payment_date,payment_method,payment_amount,payment_status,orderId,customerId) VALUES ('Sep 18, 2022','Debit card',4350,'Partial',1,1);
INSERT INTO payments (payment_date,payment_method,payment_amount,payment_status,orderId,customerId) VALUES ('Sep 18, 2022','Debit card',0,'UnPaid',2,1);
INSERT INTO payments (payment_date,payment_method,payment_amount,payment_status,orderId,customerId) VALUES ('Sep 18, 2022','Debit card',3350,'Paid',3,1);
INSERT INTO payments (payment_date,payment_method,payment_amount,payment_status,orderId,customerId) VALUES ('Sep 18, 2022','Debit card',0,'UnPaid',4,2);
INSERT INTO payments (payment_date,payment_method,payment_amount,payment_status,orderId,customerId) VALUES ('Sep 18, 2022','Debit card',4350,'Paid',5,2);
INSERT INTO payments (payment_date,payment_method,payment_amount,payment_status,orderId,customerId) VALUES ('Sep 18, 2022','Debit card',550,'Partial',6,2);


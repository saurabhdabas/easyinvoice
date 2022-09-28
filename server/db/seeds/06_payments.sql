-- seeds/05_payments.sql
-- payments
INSERT INTO payments (payment_date,payment_method,payment_amount,payment_status,orderId,invoiceId) VALUES ('Sep 18, 2022','Debit card',150,'Partial',1,1);
INSERT INTO payments (payment_date,payment_method,payment_amount,payment_status,orderId,invoiceId) VALUES ('Sep 18, 2022','Debit card',0,'UnPaid',2,2);
INSERT INTO payments (payment_date,payment_method,payment_amount,payment_status,orderId,invoiceId) VALUES ('Sep 18, 2022','Demand Draft',2100,'Paid',3,3);
INSERT INTO payments (payment_date,payment_method,payment_amount,payment_status,orderId,invoiceId) VALUES ('Sep 18, 2022','Debit card',0,'UnPaid',4,4);
INSERT INTO payments (payment_date,payment_method,payment_amount,payment_status,orderId,invoiceId) VALUES ('Sep 18, 2022','Cheque',2100,'Paid',5,5);
INSERT INTO payments (payment_date,payment_method,payment_amount,payment_status,orderId,invoiceId) VALUES ('Sep 18, 2022','Debit card',850,'Partial',6,6);


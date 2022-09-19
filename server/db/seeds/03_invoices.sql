--seeds/03_invoices.sql
--invoices
INSERT INTO invoices (id, name,photo, logo, email, country, street, city, province, zipcode, company, taxnumber, phone, title, date, duedate, notes, subtotal, balance, message,tabledata) VALUES (1,'Saurabh','https://i.pravatar.cc/150?img=3','https://www.computronix.com/wp-content/uploads/2017/08/cx-icon@2x.png', 'saurabhdabas@gmail.com','Canada', '56 ST NW', 'Calgary', 'Alberta','T3N 0P3', 'Computronix', '063-8765','648-621-8902','Website redesign', '2022-09-17','2022-10-17','Pay by the earliest!',2000,2100,'Thank you','{
    "rOne": {
      "description": "Website Redesign",
      "quantity": "0",
      "unitprice": "0",
      "total": "0"
    },
    "rTwo": { "description": "2", "quantity": "0", "unitprice": "0", "total": "0" },
    "rThree": { "description": "2", "quantity": "0", "unitprice": "0", "total": "0" }
  }'
);
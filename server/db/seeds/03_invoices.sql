-- -- --seeds/03_invoices.sql
-- -- --invoices
INSERT INTO invoices (orderid,customerid, name,photo, logo, email, country, street, city, province, zipcode, company, taxnumber, phone, title, date, duedate, notes, subtotal, balance, message,tabledata) VALUES (1,1,'Jackson','https://i.pravatar.cc/150?img=6','https://i.pinimg.com/736x/15/a7/92/15a7927a228b1e25f2db48e98dcde4a0--pepsi-logo-brand-identity.jpg', 'jacksonwilton@gmail.com','Canada', '56 ST NW', 'Calgary', 'Alberta','T3N 0P3', 'Pepsi', '063-8765','645-271-0840','Website redesign', '2022-09-17','2022-10-17','Pay by the earliest!',4350,4350,'Thank you','{
    "rOne": {
      "description": "Website Redesign",
      "quantity": 1,
      "unitprice": 4350,
      "total":4350
    },
    "rTwo": { "description": "None", "quantity": 0, "unitprice": 0,"total":0},
    "rThree": { "description": "None", "quantity": 0, "unitprice": 0,"total":0}
  }'
);
INSERT INTO invoices (orderid,customerid, name,photo, logo, email, country, street, city, province, zipcode, company, taxnumber, phone, title, date, duedate, notes, subtotal, balance, message,tabledata) VALUES (2,2,'Eleanor','https://i.pravatar.cc/150?img=5','https://avatars.githubusercontent.com/u/6154722?s=280&v=4', 'eleanormartine@gmail.com','Canada', '56 ST NW', 'Calgary', 'Alberta','T3N 0P3', 'Microsoft', '063-8765','645-271-0040','Website Security', '2022-09-17','2022-10-17','Pay by the earliest!',1350,1350,'Thank you','{
    "rOne": {
      "description": "Website Security",
      "quantity": 1,
      "unitprice": 1350,
      "total":1350
      
    },
    "rTwo": { "description": "None", "quantity": 0, "unitprice": 0,"total":0},
    "rThree": { "description": "None", "quantity": 0, "unitprice": 0,"total":0}
  }'
);
INSERT INTO invoices (orderid,customerid, name,photo, logo, email, country, street, city, province, zipcode, company, taxnumber, phone, title, date, duedate, notes, subtotal, balance, message,tabledata) VALUES (3,3,'Enrique','https://i.pravatar.cc/150?img=11','https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Shell_logo.svg/1200px-Shell_logo.svg.png', 'enriqueiglesias@gmail.com','Canada', '56 ST NW', 'Lethbridge', 'Alberta','T3N 0P3', 'Shell', '063-8765','648-621-8902','Website Maintenance', '2022-09-17','2022-10-17','Pay by the earliest!',3350,3350,'Thank you','{
    "rOne": {
      "description": "Website Maintenance",
      "quantity": 1,
      "unitprice": 3350
    },
    "rTwo": { "description": "None", "quantity": 0, "unitprice": 0,"total":0},
    "rThree": { "description": "None", "quantity": 0, "unitprice": 0,"total":0}
  }'
);
INSERT INTO invoices (orderid,customerid, name,photo, logo, email, country, street, city, province, zipcode, company, taxnumber, phone, title, date, duedate, notes, subtotal, balance, message,tabledata) VALUES (4,4,'Oliver','https://i.pravatar.cc/150?img=8','https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png', 'olivermartin@gmail.com','Canada', '56 ST NW', 'Calgary', 'Alberta','T3N 0P3', 'McDonalds', '063-8765','648-621-8902','Website redesign', '2022-09-17','2022-10-17','Pay by the earliest!',2350,2350,'Thank you','{
    "rOne": {
      "description": "Website Redesign",
      "quantity": 1,
      "unitprice": 2350,
      "total": 2350
    },
    "rTwo": { "description": "None", "quantity": 0, "unitprice": 0,"total":0},
    "rThree": { "description": "None", "quantity": 0, "unitprice": 0,"total":0}
  }'
);
INSERT INTO invoices (orderid,customerid, name,photo, logo, email, country, street, city, province, zipcode, company, taxnumber, phone, title, date, duedate, notes, subtotal, balance, message,tabledata) VALUES (5,2,'Eleanor','https://i.pravatar.cc/150?img=5','https://avatars.githubusercontent.com/u/6154722?s=280&v=4', 'eleanormartine@gmail.com','Canada', '56 ST NW', 'Calgary', 'Alberta','T3N 0P3', 'Microsoft', '063-8765','645-271-0040','New Website', '2022-09-17','2022-10-17','Pay by the earliest!',4350,4350,'Thank you','{
    "rOne": {
      "description": "New Website",
      "quantity": 1,
      "unitprice": 4350,
      "total": 4350
    },
    "rTwo": { "description": "None", "quantity": 0, "unitprice": 0,"total":0},
    "rThree": { "description": "None", "quantity": 0, "unitprice": 0,"total":0}
  }'
);
INSERT INTO invoices (orderid,customerid, name,photo, logo, email, country, street, city, province, zipcode, company, taxnumber, phone, title, date, duedate, notes, subtotal, balance, message,tabledata) VALUES (6,3,'Enrique','https://i.pravatar.cc/150?img=11','https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Shell_logo.svg/1200px-Shell_logo.svg.png', 'enriqueiglesias@gmail.com','Canada', '56 ST NW', 'Lethbridge', 'Alberta','T3N 0P3', 'Shell', '063-8765','648-621-8902','Website Security', '2022-09-17','2022-10-17','Pay by the earliest!',1350,1350,'Thank you','{
    "rOne": {
      "description": "Website Security",
      "quantity": "1",
      "unitprice": 1350,
      "total": 1350
    },
    "rTwo": { "description": "None", "quantity": 0, "unitprice": 0,"total":0},
    "rThree": { "description": "None", "quantity": 0, "unitprice": 0,"total":0}
  }'
);
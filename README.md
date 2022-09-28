# Easy Invoice

## Overview
An Invoicing platform for businesses.

## User Stories

### Login (username: easyinvoice@gmail.com : password: 1234)
- User can login <br />
![""]()

### Dashboard
- A Bar chart displaying total Invoices, paid Invoices and Unpaid Invoices
- Last three invoices with payment status
- A Message displaying total unpaid invoices
- Unpaid invoices with a send reminder button to send an automatic email to the customer<br />
![""]()

### Customers
- Voice search a customer
- We add customers to database via a form
- We can edit customer details
- We can delete customers from our database <br />
![""]()

### Invoices 
- Voice search an invoice
- We add invoices to database via a form
- We can edit and delete invoice from database
- We can download an invoice as a pdf<br />
![""]()

### Orders
- Voice search an Order
- We can browse received orders
- We can view details for an order
- We can download an order as a pdf<br />
![""]()

## Setup
List of dependencies

### Client Side:
- "axios": "^0.26.1",
- "chart.js": "^3.9.1",
- "react": "^18.0.0",
- "react-chartjs-2": "^4.1.0",
- "react-dom": "^18.0.0",
- "react-router-dom": "^6.3.0",
- "react-scripts": "5.0.1",
-  "html2canvas": "^1.4.1",
- "jspdf": "^2.5.1"


**cd** into client folder to execute **npm** **install** the dependencies.


### Server Side:

- "axios": "^0.27.2",
- "cookie-parser": "~1.4.4",
- "cors": "^2.8.5",
- "debug": "~2.6.9",
- "dotenv": "^16.0.1",
- "express": "~4.16.1",
- "morgan": "~1.9.1",
- "nodemon": "^2.0.19",
- "pg": "^8.8.0"


**cd** into server folder to execute **npm** **install** the dependencies.

# Create and seed the databases
- **npm run db:reset**


## Getting Started 
- Create the .env by using .env.example as a reference
- npm run local
- Client will run on http://localhost:3000/ and server on http://localhost:8081/

# Wallet Transaction System API

## Overview

This project implements a simple **wallet-based transaction system** built using **Node.js, Express, and Microsoft SQL Server**.

The system allows:

- **Admin users** to credit or debit wallet balances.
- **Clients** to create orders.
- When an order is created:
  - The order amount is deducted from the client's wallet.
  - A **Fulfillment API** is called.
  - The returned **Fulfillment ID** is stored with the order.

The application uses:

- **JWT Authentication**
- **Service Pattern Architecture**
- **MSSQL Stored Procedures**
- **Swagger API Documentation**
- **Postman for API Testing**

---

# Tech Stack

- Node.js
- Express.js
- Microsoft SQL Server
- JWT Authentication
- Swagger
- Postman
- Nodemon

---

# Project Structure

src/
│
├── controllers
│ └── order.controller.ts
│ └── wallet.controller.ts
│
├── routes
│ └── order.routes.ts
│ └── wallet.routes.ts
│ └── auth.routes.ts
│
├── services
│ └── order.service.ts
│ └── wallet.service.ts
│
├── middleware
│ └── auth.middleware.ts
│
├── db
│ └── db.connection.ts
│
├── swagger
│ └── swagger.ts
│
└── server.ts


Architecture Flow:

---

# Features

## Authentication
- JWT based login
- Protected routes

## Wallet Management
Admin can:
- Credit wallet balance
- Debit wallet balance

## Order System
Clients can:
- Create orders
- Deduct amount from wallet
- Trigger Fulfillment API
- Store Fulfillment ID

## API Documentation
Swagger documentation is provided.

---

# Environment Setup

Create a `.env` file in the root directory.

Example:

---

# Installation

Clone the repository

Install dependencies

Server will run on:http://localhost:5000



Using Swagger you can:

- View all API endpoints
- Test APIs directly
- Check request/response formats

---

# Testing APIs

You can test APIs using:

- Swagger UI
- Postman

Typical Flow:

1. Login → get JWT token
2. Admin credits wallet
3. Client creates order
4. Wallet balance is deducted
5. Fulfillment API returns fulfillment ID

---

# Stored Procedures

Database operations are handled through **SQL Server Stored Procedures**.

Examples:



Advantages:

- Better performance
- Centralized DB logic
- Reduced SQL injection risk

---

# Error Handling

The system handles:

- Insufficient wallet balance
- Unauthorized requests
- Invalid payloads
- Database failures
- Fulfillment API failures

Proper HTTP status codes are returned.

---

# Evaluation Criteria Addressed

## Completeness
All required APIs and flows implemented.

## Correctness
Wallet validation is done before order creation.

## Scalability
Service pattern architecture improves maintainability.

## Reliability
Error handling and authentication implemented.

---

# AI Assistance

AI tools were used for:

- Architecture design
- Documentation generation
- Swagger formatting



# Swagger API Documentation

Swagger UI is available at:
http://localhost:5000/api-docs/swagger

Example prompt:
Generate a README for a Node.js Express project using MSSQL stored procedures with JWT authentication and Swagger documentation.


---

# Author

Ankur Tiwari  
Jr. Full Stack Developer Candidate


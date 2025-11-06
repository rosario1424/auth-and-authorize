# #Node.js Authentication & Authorization with JWT (Bearer Token)

This task demonstrates how to implement **user authentication and authorization** using **Bearer tokens (JWT)** in a Node.js application built with **Express.js** and **MongoDB (Mongoose)**.  
It follows the **MVC pattern** and includes routes for registration, login, and fetching user information with JWT protection.

## MVC Structure

models/ → Mongoose schema (e.g., User.js)

controllers/ → Business logic (e.g., authController.js)

routes/ → API routes (e.g., authRoutes.js)

app.js → Main entry point

## Features

User Registration
Hash password before saving (e.g., bcrypt)
Return success message
User Login
Validate credentials
Generate and return JWT
Token Verification Middleware
Check Bearer token in headers
Decode and attach user info to req
Protected Route
Returns user info from verified token
Error Handling & Validation

 ## Documentation

Use Postman for API testing & documentation
Include sample requests/responses
Deployment
Deploy backend on Render
Push source code to GitHub

## Tech Stack

Node.js
Express.js
MongoDB (Mongoose)
JWT for authentication
Postman for documentation
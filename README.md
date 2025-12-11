📘 Student Management System (AWS Serverless Project)

A fully serverless Student Management System built using AWS Lambda, DynamoDB, API Gateway, S3, and CloudFront, with a modern HTML/JavaScript frontend.

This project supports:

Add Student

Load Students

Edit Student

Delete Student

Search

Sort

Modern UI

Fully deployed on AWS

🚀 Features
✔ Add new student

Stores student records in DynamoDB using AWS Lambda (POST method).

✔ View all students

Loads data via Lambda (GET) and displays in a UI table.

✔ Update student details

Modifies existing records using Lambda (PUT).

✔ Delete student

Removes selected student using Lambda (DELETE).

✔ Search students

Real-time search by name or ID.

✔ Table sorting

Click any column header to sort.

✔ Modern UI

Clean, responsive design built with pure HTML, CSS, and jQuery.

✔ 100% Serverless

No backend server required — all handled by AWS.

🏗️ Architecture Diagram
Frontend (HTML + JS)
        │
    CloudFront
        │
        ▼
      S3 Bucket (Static Website)
        │
        ▼
  API Gateway (CRUD Routes)
        │
        ▼
   Lambda Functions (Python)
        │
        ▼
     DynamoDB Table

🛠️ AWS Services Used
Service	Purpose
S3	Hosts the frontend (HTML, CSS, JS)
CloudFront	CDN to deliver the website globally
API Gateway	Exposes REST endpoints (GET/POST/PUT/DELETE)
Lambda (Python)	Backend logic for CRUD operations
DynamoDB	Stores student records
IAM	Permissions for Lambda to access DynamoDB
🧠 DynamoDB Table Design

Table Name:

studentData

Attribute	Type	Description
studentid	STRING	Primary Key
name	STRING	Student name
class	STRING	Class / grade
age	NUMBER	Student age
💻 Frontend Code Includes

Modern styled UI

Edit/delete buttons

Search bar

Loading indicator

Dynamic table rendering

AJAX calls to API Gateway

🧪 How to Deploy
1️⃣ Upload frontend to S3 bucket

Turn on static website hosting

2️⃣ Create API Gateway REST API

Configure GET, POST, PUT, DELETE routes

3️⃣ Attach Lambda functions

Enable Lambda Proxy Integration

4️⃣ Add CORS support

Allow: *

Methods: GET, POST, PUT, DELETE, OPTIONS

5️⃣ Create DynamoDB table

Name: studentData

Primary Key: studentid

6️⃣ Attach IAM policies

Allow Lambda to use DynamoDB (PutItem, UpdateItem, DeleteItem, Scan)

7️⃣ Setup CloudFront

Origin = S3 bucket website URL

Invalidation: /* after update

📦 Future Improvements (Optional)

Student photo upload (S3)

Pagination

Export to CSV/Excel

Login system (Cognito)

Dashboard charts (Chart.js)

Dark mode UI

👤 Author

Sumit Chowdhuary
Built with 💙 using AWS Serverless Architecture.
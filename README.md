# 📘 Student Management System (AWS Serverless)

A fully serverless Student Management System built using AWS services to manage student records efficiently. This project demonstrates how scalable cloud architecture can replace traditional backend systems.

---

## 🎯 Problem Statement
Managing student records manually or using traditional backend systems can be inefficient, hard to scale, and costly.

---

## 💡 Solution
Developed a **serverless student management system** using AWS that handles CRUD operations without managing any servers.

---

## 🚀 Key Features
- ➕ Add new student records  
- 📋 View all students  
- ✏️ Update student details  
- ❌ Delete student records  
- 🔍 Search students by name or ID  
- 📊 Sort table columns  
- 🎨 Modern responsive UI  
- ☁️ 100% serverless architecture  

---

## 🛠️ Tech Stack

**AWS Services:**
- AWS Lambda  
- DynamoDB  
- API Gateway  
- S3  
- CloudFront  
- IAM  

**Frontend:**
- HTML, CSS, JavaScript (jQuery)

---

## 🏗️ Architecture

Frontend (HTML + JS)
│
CloudFront
│
▼
S3 Bucket
│
▼
API Gateway
│
▼
Lambda (Python)
│
▼
DynamoDB

---

## 🧠 Database Design

**Table Name:** `studentData`

| Attribute | Type | Description |
|----------|------|------------|
| studentid | STRING | Primary Key |
| name | STRING | Student Name |
| class | STRING | Class/Grade |
| age | NUMBER | Student Age |

---

## ⚙️ How It Works
- Frontend sends API requests via API Gateway  
- Lambda functions process requests  
- Data is stored and retrieved from DynamoDB  
- Results are displayed dynamically in UI  

---

## 🚀 Deployment Steps
1. Upload frontend to S3 (Enable static hosting)  
2. Create API Gateway (GET, POST, PUT, DELETE)  
3. Connect Lambda functions  
4. Configure CORS  
5. Create DynamoDB table  
6. Attach IAM permissions  
7. Setup CloudFront  

---

## 📈 Impact
- Reduced manual data handling  
- Scalable and cost-efficient system  
- Faster data access and operations  

---

## 🔮 Future Improvements
- Student image upload (S3)  
- Authentication (AWS Cognito)  
- Dashboard analytics  
- Export to CSV/Excel  

---

## 📫 Connect With Me
- 📧 sumitchowdhuary4@gmail.com  
- 💼 LinkedIn: https://www.linkedin.com/in/sumit-chowdhuary  

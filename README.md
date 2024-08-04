# Student CRUD Application

A simple CRUD application built with React for the frontend and Node.js with Express and MySQL for the backend. This project is intended as a practice exercise to demonstrate basic CRUD operations.

---

## Table of Contents

- [Features](#features)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contriubtion](#contribution)
---


## Features

- Create, Read, Update, Delete (CRUD) operations for student records
- RESTful API using Express.js
- MySQL database for data storage

---

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)
- [Git](https://git-scm.com/)

--- 
### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/harelmarin/CrudApp.git
   cd /backend
   npm install 
   ```

   Configure the MySQL Database named 'crud-app'
   Copy the file '.env.example' to '.env' and fill in appropriate values

---


2. Start the backend server :
   ```bash
   cd /backend
   npm start
    ```

---

3. Frontend setup :

   ```bash
   cd /frontend
   npm install
   npm start
    ```

---

## Usage

- The frontend will be running on http://localhost:3000.
- The backend API will be running on http://localhost:8001

---

### CRUD Operations :

- Create: Add a new student using the "Add Student" form.
- Read: View the list of students on the homepage.
- Update: Edit student details using the "Edit" button.
- Delete: Remove a student using the "Delete" button.

---

## API Endpoints 

- GET / => Fetch all students.

- POST /create => Create a new student.

- POST /update/:id => Update a student's details.

- DELETE /student/:id => Delete a student by ID

--- 

## Contribution

Harel Marin => https://github.com/harelmarin
   
  

   


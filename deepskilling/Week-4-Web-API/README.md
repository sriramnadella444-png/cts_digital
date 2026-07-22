# Week 5 - ASP.NET Core Web API

## Overview
This repository contains the hands-on exercises completed for **Week 5 - ASP.NET Core Web API** as part of the **Cognizant Digital Nurture 5.0 Deepskilling Program**.

## Topics Covered

### Lab 1 - Basic CRUD Web API
- Created ASP.NET Core Web API project
- Configured Swagger
- Implemented CRUD operations
  - GET
  - POST
  - PUT
  - DELETE

### Lab 2 - Web API using Models
- Created Employee model
- Created Department model
- Created Skill model
- Implemented CRUD operations using custom model classes
- Used FromBody attribute
- Used AllowAnonymous attribute
- Added ProducesResponseType attribute

### Hands-on 1 - Custom Model Class
- Created Employee, Department, and Skill models
- Implemented GetStandardEmployeeList()
- Returned List<Employee> from API
- Tested APIs using Swagger

### Hands-on 2 - Custom Authorization Filter
- Created Filters folder
- Implemented CustomAuthFilter
- Validated Authorization header
- Validated Bearer token
- Applied filter to EmployeeController

### Hands-on 3 - Custom Exception Filter
- Implemented IExceptionFilter
- Logged exceptions to ErrorLog.txt
- Returned HTTP 500 Internal Server Error
- Registered filter in Program.cs
- Tested exception handling using Swagger

## Project Structure

```
Week-5-Web-API
│
├── FirstWebApi
├── Solutions
├── Screenshots
└── README.md
```

## Technologies Used

- ASP.NET Core Web API
- C#
- .NET 8
- Swagger (OpenAPI)
- Visual Studio Code

## Learning Outcomes

- RESTful API development
- CRUD operations
- Model creation
- Action Filters
- Authorization Filters
- Exception Filters
- Swagger API testing
- ASP.NET Core fundamentals

## Status

✅ Completed
# Week-5 – Microservices

## Cognizant Digital Nurture 5.0

This repository contains the solutions and implementation for the Week-5 Microservices hands-on exercises using ASP.NET Core Web API and JWT Authentication.

---

## Project

**Project Name:** JwtAuthMicroservice

**Technology Stack**

- ASP.NET Core Web API (.NET 8)
- C#
- JWT (JSON Web Token)
- Swagger UI
- Visual Studio Code

---

## Hands-on Exercises

### Question 1 – JWT Authentication

Implemented JWT-based authentication using ASP.NET Core Web API.

**Features**
- User Login API
- JWT Token Generation
- Secure Authentication
- Swagger Testing

**API**

```
POST /api/Auth/login
```

**Credentials**

```
Username : admin
Password : admin123
```

---

### Question 2 – Secure Endpoint

Implemented endpoint protection using JWT Authentication.

**API**

```
GET /api/Secure
```

Only authenticated users with a valid JWT token can access this endpoint.

---

### Question 3 – Role-Based Authorization

Implemented Role-Based Authorization using JWT Role Claims.

**API**

```
GET /api/Secure/admin
```

Only users with the **Admin** role can access this endpoint.

---

### Question 4 – Expired Token Handling

Configured short-lived JWT tokens to test expired token validation.

**Result**

- Valid Token → 200 OK
- Expired Token → 401 Unauthorized

---

## Project Structure

```
Week-5-Microservices
│
├── JwtAuthMicroservice
│
├── Solutions
│   ├── Question-1-JWT-Authentication
│   ├── Question-2-Secure-Endpoint
│   ├── Question-3-Role-Based-Authorization
│   └── Question-4-Expired-Token
│
├── Screenshots
│
└── README.md
```

---

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/Auth/login` | Generate JWT Token |
| GET | `/api/Secure` | Protected Endpoint |
| GET | `/api/Secure/admin` | Role-Based Protected Endpoint |

---

## Screenshots

- Swagger Home
- Login Request
- JWT Token Generated
- Authorize Button
- Secure Endpoint
- Role-Based Authorization
- Expired Token Validation

---

## Learning Outcomes

- ASP.NET Core Web API Development
- JWT Authentication
- Secure API Development
- Authorization using JWT
- Role-Based Access Control (RBAC)
- Swagger Integration
- Token Validation
- Expired Token Handling

---

## Author

**Bharath Narra**

**CTC Digital Nurture 5.0**
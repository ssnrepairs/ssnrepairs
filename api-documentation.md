# SSN Repairs API Documentation

This document provides comprehensive documentation for the SSN Repairs API.

## Authentication

The API uses JWT (JSON Web Token) authentication. To authenticate requests, include an `Authorization` header with a Bearer token:

\`\`\`
Authorization: Bearer <your_jwt_token>
\`\`\`

### Getting a Token

To get a token, use the `/api/auth/login` endpoint:

\`\`\`
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "your_password"
}
\`\`\`

Response:

\`\`\`json
{
  "data": {
    "token": "your_jwt_token",
    "user": {
      "id": "user_id",
      "email": "user@example.com",
      "role": "customer",
      "first_name": "John",
      "last_name": "Doe"
    }
  }
}
\`\`\`

## Error Handling

All API errors follow a consistent format:

\`\`\`json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error message",
    "status": 400,
    "details": {} // Optional additional details
  }
}
\`\`\`

Common error codes:
- `BAD_REQUEST`: Invalid request parameters
- `UNAUTHORIZED`: Missing or invalid authentication
- `FORBIDDEN`: Insufficient permissions
- `NOT_FOUND`: Resource not found
- `CONFLICT`: Resource already exists
- `VALIDATION_ERROR`: Input validation failed
- `INTERNAL_ERROR`: Server error
- `SERVICE_UNAVAILABLE`: Service temporarily unavailable
- `DATABASE_ERROR`: Database operation failed

## API Endpoints

### Authentication

#### Register a new user

\`\`\`
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123",
  "first_name": "John",
  "last_name": "Doe",
  "phone": "123-456-7890" // Optional
}
\`\`\`

Response (201 Created):

\`\`\`json
{
  "data": {
    "message": "Registration successful",
    "user": {
      "id": "user_id",
      "email": "user@example.com",
      "first_name": "John",
      "last_name": "Doe",
      "role": "customer"
    },
    "customer": {
      "id": "CUST-12345",
      "user_id": "user_id",
      "first_name": "John",
      "last_name": "Doe",
      "email": "user@example.com",
      "phone": "123-456-7890",
      "created_at": "2023-01-01T00:00:00Z"
    }
  }
}
\`\`\`

#### Login

\`\`\`
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
\`\`\`

Response (200 OK):

\`\`\`json
{
  "data": {
    "token": "your_jwt_token",
    "user": {
      "id": "user_id",
      "email": "user@example.com",
      "role": "customer",
      "first_name": "John",
      "last_name": "Doe"
    }
  }
}
\`\`\`

### Customers

#### Get all customers

\`\`\`
GET /api/customers
Authorization: Bearer <your_jwt_token>
\`\`\`

Query parameters:
- `search`: Search term for filtering customers
- `limit`: Number of results per page (default: 50)
- `page`: Page number (default: 1)

Response (200 OK):

\`\`\`json
{
  "data": {
    "customers": [
      {
        "id": "CUST-12345",
        "first_name": "John",
        "last_name": "Doe",
        "email": "john@example.com",
        "phone": "123-456-7890",
        "address": "123 Main St",
        "city": "New York",
        "state": "NY",
        "zip_code": "10001",
        "created_at": "2023-01-01T00:00:00Z",
        "updated_at": "2023-01-01T00:00:00Z"
      }
    ],
    "pagination": {
      "total": 100,
      "page": 1,
      "limit": 50,
      "pages": 2
    }
  }
}
\`\`\`

#### Get a customer by ID

\`\`\`
GET /api/customers/{id}
Authorization: Bearer <your_jwt_token>
\`\`\`

Response (200 OK):

\`\`\`json
{
  "data": {
    "id": "CUST-12345",
    "first_name": "John",
    "last_name": "Doe",
    "email": "john@example.com",
    "phone": "123-456-7890",
    "address": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zip_code": "10001",
    "created_at": "2023-01-01T00:00:00Z",
    "updated_at": "2023-01-01T00:00:00Z",
    "repairs": [
      {
        "id": "REP-12345",
        "device_type": "Smartphone",
        "brand": "Apple",
        "model": "iPhone 12",
        "status": "in_progress",
        "created_at": "2023-01-01T00:00:00Z"
      }
    ]
  }
}
\`\`\`

#### Create a new customer

\`\`\`
POST /api/customers
Authorization: Bearer <your_jwt_token>
Content-Type: application/json

{
  "first_name": "Jane",
  "last_name": "Smith",
  "email": "jane@example.com",
  "phone": "123-456-7890",
  "address": "456 Oak St",
  "city": "Los Angeles",
  "state": "CA",
  "zip_code": "90001",
  "marketing_consent": true
}
\`\`\`

Response (201 Created):

\`\`\`json
{
  "data": {
    "id": "CUST-67890",
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane@example.com",
    "phone": "123-456-7890",
    "address": "456 Oak St",
    "city": "Los Angeles",
    "state": "CA",
    "zip_code": "90001",
    "marketing_consent": true,
    "created_at": "2023-01-01T00:00:00Z",
    "updated_at": "2023-01-01T00:00:00Z"
  }
}
\`\`\`

#### Update a customer

\`\`\`
PUT /api/customers/{id}
Authorization: Bearer <your_jwt_token>
Content-Type: application/json

{
  "first_name": "Jane",
  "last_name": "Smith",
  "email": "jane.updated@example.com",
  "phone": "987-654-3210",
  "address": "789 Pine St",
  "city": "Chicago",
  "state": "IL",
  "zip_code": "60601",
  "marketing_consent": false
}
\`\`\`

Response (200 OK):

\`\`\`json
{
  "data": {
    "id": "CUST-67890",
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane.updated@example.com",
    "phone": "987-654-3210",
    "address": "789 Pine St",
    "city": "Chicago",
    "state": "IL",
    "zip_code": "60601",
    "marketing_consent": false,
    "created_at": "2023-01-01T00:00:00Z",
    "updated_at": "2023-01-02T00:00:00Z"
  }
}
\`\`\`

#### Delete a customer

\`\`\`
DELETE /api/customers/{id}
Authorization: Bearer <your_jwt_token>
\`\`\`

Response (200 OK):

\`\`\`json
{
  "data": {
    "message": "Customer deleted successfully"
  }
}
\`\`\`

### Repairs

#### Get all repairs

\`\`\`
GET /api/repairs
Authorization: Bearer <your_jwt_token>
\`\`\`

Query parameters:
- `status`: Filter by repair status
- `customer_id`: Filter by customer ID
- `technician_id`: Filter by technician ID
- `search`: Search term for filtering repairs
- `limit`: Number of results per page (default: 50)
- `page`: Page number (default: 1)

Response (200 OK):

\`\`\`json
{
  "data": {
    "repairs": [
      {
        "id": "REP-12345",
        "customer_id": "CUST-12345",
        "device_type": "Smartphone",
        "brand": "Apple",
        "model": "iPhone 12",
        "issue": "Broken screen",
        "status": "in_progress",
        "technician_id": "tech_user_id",
        "estimated_cost": 150.00,
        "created_at": "2023-01-01T00:00:00Z",
        "updated_at": "2023-01-01T00:00:00Z",
        "customer": {
          "id": "CUST-12345",
          "first_name": "John",
          "last_name": "Doe",
          "email": "john@example.com",
          "phone": "123-456-7890"
        }
      }
    ],
    "pagination": {
      "total": 100,
      "page": 1,
      "limit": 50,
      "pages": 2
    }
  }
}
\`\`\`

... (Documentation continues for all endpoints)
\`\`\`

## 8. Performance Optimization Utility

Let's create a utility for optimizing API performance:

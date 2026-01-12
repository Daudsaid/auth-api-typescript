# JWT Authentication API with TypeScript

A secure REST API for user authentication built with Express.js, TypeScript, and PostgreSQL.

## Features

- 🔐 User registration with bcrypt password hashing
- 🔑 JWT-based authentication
- 👤 Protected routes with token verification
- 📊 PostgreSQL database integration
- 🛡️ Type-safe with TypeScript

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **Database:** PostgreSQL
- **Authentication:** JWT (jsonwebtoken)
- **Password Hashing:** bcrypt

## Prerequisites

- Node.js (v18 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

## Installation

1. Clone the repository
```bash
git clone https://github.com/Daudsaid/auth-api-typescript.git
cd auth-api-typescript
```

2. Install dependencies
```bash
npm install
```

3. Create PostgreSQL database
```bash
psql -U your_username -d postgres
CREATE DATABASE auth_api_ts;
\c auth_api_ts

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

4. Configure environment variables

Create a `.env` file in the root directory:
```env
PORT=3001
JWT_SECRET=your_super_secret_key_here
DATABASE_URL=postgresql://username@localhost:5432/auth_api_ts
```

5. Run the development server
```bash
npm run dev
```

The API will be available at `http://localhost:3001`

## API Endpoints

### Public Routes

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response (201):**
```json
{
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "username": "johndoe",
    "email": "john@example.com",
    "created_at": "2026-01-12T15:30:00.000Z"
  }
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response (200):**
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "username": "johndoe",
    "email": "john@example.com"
  }
}
```

### Protected Routes

#### Get User Profile
```http
GET /api/auth/profile
Authorization: Bearer <your_jwt_token>
```

**Response (200):**
```json
{
  "user": {
    "id": 1,
    "username": "johndoe",
    "email": "john@example.com",
    "created_at": "2026-01-12T15:30:00.000Z"
  }
}
```

## Project Structure
```
auth-api-typescript/
├── src/
│   ├── server.ts           # Express app setup
│   ├── db.ts               # PostgreSQL connection
│   ├── types.ts            # TypeScript interfaces
│   ├── authRoutes.ts       # Authentication routes
│   └── authMiddleware.ts   # JWT verification middleware
├── .env                    # Environment variables (not in git)
├── .gitignore
├── package.json
├── tsconfig.json           # TypeScript configuration
└── README.md
```

## Scripts
```bash
# Development with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Security Features

- ✅ Passwords hashed with bcrypt (10 salt rounds)
- ✅ JWT tokens with 24-hour expiration
- ✅ Protected routes require valid tokens
- ✅ SQL injection protection with parameterized queries
- ✅ Environment variables for sensitive data

## Error Handling

The API returns appropriate HTTP status codes:
- `200` - Success
- `201` - Created
- `400` - Bad Request (user already exists)
- `401` - Unauthorized (invalid credentials/token)
- `403` - Forbidden (no token provided)
- `404` - Not Found
- `500` - Server Error

## Future Enhancements

- [ ] Email verification
- [ ] Password reset functionality
- [ ] Refresh tokens
- [ ] User roles and permissions
- [ ] Rate limiting
- [ ] Input validation with Zod
- [ ] Unit and integration tests
- [ ] Docker containerization

## License

MIT

## Author

Daud Abdi
- GitHub: [@Daudsaid](https://github.com/Daudsaid)
- LinkedIn: [daudabdi0506](https://linkedin.com/in/daudabdi0506)
- Email: daudsaidabdi@gmail.com

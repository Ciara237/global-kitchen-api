# The Global Kitchen API

## Tech Stack
- **Runtime:** Node.js v20
- **Framework:** Express v4
- **Database:** MongoDB Atlas + Mongoose v8
- **Configuration:** dotenv

## Features
- Create, read, update and delete recipes
- Filter recipes by category
- Schema-level validation (required fields, enums, min values)
- Category index for fast lookups
- Global error handler with proper HTTP status codes
- 404 handling for missing recipes
- Async/await throughout — no blocking I/O
- Layered architecture: Routes → Controllers → Services → Models

## Installation & Setup

1. Clone the repository:
```bash
   git clone https://github.com/Ciara237/global-kitchen-api.git
   cd global-kitchen-api
```

2. Install dependencies:
```bash
   npm install
```

3. Create a .env file in the root directory and add:
PORT=3000
MONGODB_URI=your_mongodb_atlas_connection_string

4. Start the server:
```bash
   npm run dev
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/recipes | Get all recipes |
| GET | /api/recipes?category=Cameroonian | Filter by category |
| GET | /api/recipes/:id | Get a single recipe |
| POST | /api/recipes | Create a new recipe |
| PATCH | /api/recipes/:id | Update a recipe |
| DELETE | /api/recipes/:id | Delete a recipe |

## Project Structure
src/
├── config/
│   └── db.js
├── models/
│   └── recipe.model.js
├── routes/
│   └── recipe.routes.js
├── controllers/
│   └── recipe.controller.js
└── services/
└── recipe.service.js

## Author
Ciara Fomunung 

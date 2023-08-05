# Node JS Starter Template with Prisma ORM

A starter template for any Enterprise Applications, Rest APIs or Microservices with Node.js, Express and Prisma ORM for MySQL, PostgreSQL or others.
This project offers production ready environment with all necessary supports for validation, unit testing, socket, redis and many more.
## Manual Installation

Clone the repo:

```bash
git clone https://github.com/ItzSamdam/nodejs-prisma-mysql-boilerplate.git
cd nodejs-prisma-mysql-boilerplate
```

Install the dependencies:

```bash
npm install
```

Set the environment variables:

```bash
cp .env.example .env

# open .env and modify the environment variables (if needed)
```

## Commands

Running locally:

```bash
yarn dev
```

Running in production:

```bash
npm run start
```

Testing:

```bash
# run all tests
yarn test

```

## Project Structure

```
public\
src\
 |--config\         # Environment variables and configuration related things
 |--controllers\    # Route controllers (controller layer)
 |--daom\           # Data Access Object for models
 |--middlewares\    # Provide Security Layer in app
 |--routes\         # Routes
 |--services\       # Business logic (service layer)
 |--utilities\      # Utilities classes and functions
 |--validators\     # Request data validation schemas
 |--app.js          # Express app
 |--cronJobs.js     # Job Scheduler
 |--server.js        # App entry point
```
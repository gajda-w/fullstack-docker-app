# Project Overview

This repository contains a full-stack project with:

- **Backend:** Built with [Deno](https://deno.com/), [Hono](https://hono.dev/) and [Drizzle](https://orm.drizzle.team/).
- **Frontend:** Developed with [Next.js](https://nextjs.org/).

## Getting Started

### Running the Backend

1. **Ensure** your database is running via Docker.
2. **Create** a `.env` file in the `backend` directory.
3. **Navigate** to the backend directory:
   ```bash
   cd backend
   ```
4. **Generate** necessary files:
   ```bash
   deno task generate
   ```
5. **Push** migrations
   ```bash
   deno task push
   ```
6. **Start** the backend
   ```bash
   deno task start
   ```

### Running the Frontend

1. **Create** a `.env` file.
2. **Navigate** to the frontend directory:
   ```bash
   cd frontend
   ```
3. **Start** the development server:
   ```bash
   npm run dev
   ```

### One-Command Startup

You can launch the entire project a single command using Docker Compose

```bash
docker compose up --build
```

### Useful commands:

You can run database locally for development:

```bash
docker run --name postgres -e POSTGRES_PASSWORD=mypassword -d -p 5432:5432 postgres
```

# Full-Stack Task Manager

A full-stack Todo app built with:

- **Frontend**: [React](https://reactjs.org/) using [Vite](https://vitejs.dev/)
- **Backend**: [Express.js](https://expressjs.com/) + [Prisma](https://www.prisma.io/) ORM
- **Database**: SQLite (file-based)

---

## Prerequisites

- Node.js >= 18
- npm or yarn

---

## Docker Setup

```bash
docker-compose up --build 
```

## Manual Setup

### Backend Setup

#### 1. Install dependencies

```bash
cd backend
npm install
```

#### 2. Environment Variables

Create a `.env` file in the `backend/` directory:

```env
PORT=3000
DATABASE_URL="file:./dev.db"
```

or rename `.env.example` to `.env`

#### 3. Database Setup

```bash
npx prisma generate
npx prisma db push
```

#### 4. Start Backend Server

```bash
npm run start
```

Dev mod: `npm run dev`

API will be available at: [http://localhost:3000/api](http://localhost:3000/api)

---

### Frontend Setup

#### 1. Install dependencies

```bash
cd ../client
npm install
```

#### 2. Environment Variables

Create a `.env` file in the `/client` directory:

```env
VITE_API_URL="http://localhost:3000/api"
```

or rename `.env.example` to `.env`


#### 3. Start Frontend Server

```bash
npm run build
npm run preview
```

Dev mod: `npm run dev`

Frontend runs at: [http://localhost:5173](http://localhost:5173).

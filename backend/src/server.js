import express from 'express';
import dotenv from 'dotenv';
import CORS from 'cors';
import db from './config/db.js';
import { initTables } from './config/initTables.js';
import authRoutes from './routes/auth.routes.js';

const app = express();
dotenv.config();

app.use(express.json());
app.use(CORS());

const PORT = process.env.PORT 

app.get("/" , (req ,res) =>{
    res.send("Server is running")
});

app.use('/api/auth', authRoutes)

app.get("/test-db", async (req, res) => {
  try {
    const result = await db.query("SELECT NOW()");
    res.json({ status: "ok", time: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: "DB connection failed", details: err });
  }
});

// init DB tables then start server
initTables()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to initialize tables:', err);
  });

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
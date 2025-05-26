const cors = require('cors');
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const app = express();
  

app.use(
    cors({
      origin: "http://localhost:5173", // <-- Your Vite frontend URL
       credentials: true// <-- Optional, if you're using cookies/session
    })
  );
  
app.use(express.json());

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/sessions', require('./routes/sessionRoutes'));
app.use('/api/feedback', require('./routes/feedbackRoutes'));

const PORT = process.env.PORT || 5700;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
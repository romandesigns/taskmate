const express = require("express");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();
// Create express app
const app = express();
// App port
const PORT = process.env.PORT || 5000;

// API endpoint
app.get('/api',(req,res) => {
    res.status(200).json({data:'API is running...'});
});

// Running express app
app.listen(PORT,() => console.log(`Server is running on port ${PORT}`));
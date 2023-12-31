const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
    
const mongoose = require("./config/mongoose.config");
    
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
    
const jokesRoutes = require("./routes/jokes.routes");
jokesRoutes(app);
    
app.listen(port, () => console.log(`Listening on port: ${port}`) );

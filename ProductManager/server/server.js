const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

const mongoose = require('./config/mongoose.config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const productRoutes = require('./routes/product.routes');

app.use('/', productRoutes);

app.listen(port, () => console.log(`Listening on port: ${port}`));

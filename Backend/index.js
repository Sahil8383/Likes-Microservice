const express = require('express');
const app = express();
const connectDB = require('./db');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes/route');

app.use(cors());

dotenv.config();
connectDB();

app.use(express.json());       
app.use(express.urlencoded());

app.use('/', router);

app.use(express.static('public'));


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    }
);
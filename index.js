const express =require('express');
const app = express();
require('./models/dbConfig');
const infoRoutes = require('./routes/infoController');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');


app.use(bodyParser.json());
app.use(cors());
app.use('/infos', infoRoutes);

app.listen(5500, () => console.log('server start: 5500'));
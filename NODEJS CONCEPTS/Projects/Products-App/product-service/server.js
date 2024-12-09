const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/db');
const productRoutes = require('./routes/productRoutes');

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use('/api', productRoutes);

app.listen(port, () => {
    console.log(`Product service running on port ${port}`);
});

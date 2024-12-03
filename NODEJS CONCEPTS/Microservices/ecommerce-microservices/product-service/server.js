const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost:27017/micro1', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB for Product Service');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});


const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true }
});

const Product = mongoose.model('Product', productSchema);

app.post('/products', async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        res.status(400).send(error);
    }
});


app.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send(error);
    }
});


const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
    console.log(`Product service running on port ${PORT}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost:27017/micro', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB for Order Service');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});


const orderSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    userId: { type: Number, required: true }
});

const Order = mongoose.model('Order', orderSchema);

app.post('/orders', async (req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();
        res.status(201).send(order);
    } catch (error) {
        res.status(400).send(error);
    }
});


app.get('/orders', async (req, res) => {
    try {
        const orders = await Order.find().populate('productId');
        res.status(200).send(orders);
    } catch (error) {
        res.status(500).send(error);
    }
});


const PORT = process.env.PORT || 3006;
app.listen(PORT, () => {
    console.log(`Order service running on port ${PORT}`);
});

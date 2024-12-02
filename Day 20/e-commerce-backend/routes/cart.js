const express = require('express');
const router = express.Router();
const Cart = require('../models/cart');

// Get cart by user ID
router.get('/:userId', async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId }).populate('products.productId');
        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add product to cart
router.post('/:userId', async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });
        cart.products.push(req.body);
        const updatedCart = await cart.save();
        res.status(201).json(updatedCart);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;

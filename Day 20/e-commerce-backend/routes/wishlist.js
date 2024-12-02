const express = require('express');
const router = express.Router();
const Wishlist = require('../models/wishlist');

// Get wishlist by user ID
router.get('/:userId', async (req, res) => {
    try {
        const wishlist = await Wishlist.findOne({ userId: req.params.userId }).populate('products');
        res.json(wishlist);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add product to wishlist
router.post('/:userId', async (req, res) => {
    try {
        const wishlist = await Wishlist.findOne({ userId: req.params.userId });
        wishlist.products.push(req.body.productId);
        const updatedWishlist = await wishlist.save();
        res.status(201).json(updatedWishlist);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;

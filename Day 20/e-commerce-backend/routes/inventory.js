const express = require('express');
const router = express.Router();
const Inventory = require('../models/inventory');

// Get inventory
router.get('/', async (req, res) => {
    try {
        const inventory = await Inventory.find().populate('productId');
        res.json(inventory);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update inventory
router.patch('/:productId', async (req, res) => {
    try {
        const inventory = await Inventory.findOne({ productId: req.params.productId });
        inventory.quantity = req.body.quantity;
        const updatedInventory = await inventory.save();
        res.json(updatedInventory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;

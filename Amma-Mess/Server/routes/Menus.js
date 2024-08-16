const express = require('express');
const router = express.Router();
const Menu = require('../models/Menu');


router.get('/menus', async (req, res) => {
  try {
    const menus = await Menu.find();
    res.json(menus);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.get('/getmenus/:id', async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.id);
    res.json(menu);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.post('/create', async (req, res) => {
  const { day, breakfast, lunch, dinner } = req.body;
  try {
    const newMenu = new Menu({ day, breakfast, lunch, dinner });
    await newMenu.save();
    res.status(201).json(newMenu);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.put('/edit/:id', async (req, res) => {
  try {
    const menu = await Menu.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(menu);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.delete('/delete/:id', async (req, res) => {
  try {
    await Menu.findByIdAndDelete(req.params.id);
    res.json({ message: 'Menu deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

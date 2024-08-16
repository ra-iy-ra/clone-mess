const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();

// Register route
router.post('/register', async (req, res) => {
  const { name, email, password, cluster } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, cluster, role: 'user' });

    await newUser.save();
    res.status(201).json('User registered successfully');
  } catch (err) {
    res.status(500).json('Server error');
  }
});


// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json('User not found');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json('Invalid credentials');

    const token = jwt.sign({ id: user._id, role: user.role }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token, role: user.role });
  } catch (err) {
    res.status(500).json('Server error');
  }
});


router.get('/users', async (req, res) => {
    try {
      const users = await User.find().populate('cluster', 'name'); // Populate cluster name
      res.json(users);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });



// Get user profile
router.get('/user-profile', async (req, res) => {
    try {
      const user = await User.findById(req.user.id).populate('cluster');
      res.json(user);
    } catch (err) {
      res.status(500).send('Server Error');
    }
  });


// Update meal plan and payment status
router.post('/make-payment', async (req, res) => {
    const { mealPlan, amount } = req.body;
  
    try {
      const user = await User.findById(req.user.id);
  
      // Assuming payment process is successful
      user.mealPlan = mealPlan;
      user.paymentStatus = 'Paid';
  
      await user.save();
  
      res.json({ msg: 'Payment successful and updated!' });
    } catch (err) {
      res.status(500).send('Server Error');
    }
  });

// Fetch all users for admin dashboard
router.get('/users', async (req, res) => {
    try {
        const users = await User.find().populate('cluster');
        res.json(users);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});



// // Get all customers (for admin)
// router.get('/customers', async (req, res) => {
//     try {
//       const customers = await User.find().populate('cluster');
//       res.json(customers);
//     } catch (err) {
//       res.status(500).send('Server Error');
//     }
//   });

module.exports = router;

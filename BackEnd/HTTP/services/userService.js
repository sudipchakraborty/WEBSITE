const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Create (Register)
exports.registerUser = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await User.create({ username, password: hashedPassword });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Read (Get All Users)
exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// Update User Password
exports.updateUserPassword = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    await User.updateOne({ username }, { password: hashedPassword });
    res.json({ message: 'Password updated' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete User
exports.deleteUser = async (req, res) => {
  const { username } = req.body;
  try {
    await User.deleteOne({ username });
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Login (Authenticate)
exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(401).json({ error: 'User not found' });

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) return res.status(401).json({ error: 'Invalid credentials' });

  const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1d' });
  res.json({ message: 'Login successful', token });
};

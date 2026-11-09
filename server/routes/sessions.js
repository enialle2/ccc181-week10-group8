const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const users = require('../data/users');

router.post('/', (req, res) => {
  const { email, password } = req.body || {};

  const looksLikeEmail = typeof email === 'string' && /^\S+@\S+\.\S+$/.test(email.trim());
  if (!looksLikeEmail || typeof password !== 'string' || !password) {
    return res.status(400).json({ error: 'Email and password are required.' });
  }

  const user = users.find(u => u.email === email.trim().toLowerCase());

  if (!user || !bcrypt.compareSync(password, user.passwordHash)) {
    return res.status(401).json({ error: 'Invalid email or password.' });
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.status(200).json({ token, user: { id: user.id, name: user.name, email: user.email } });
});

module.exports = router;
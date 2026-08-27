const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  res.json({
    message: 'Login endpoint ready',
    body: req.body,
  });
});

router.post('/refresh', (req, res) => {
  res.json({
    message: 'Refresh token endpoint ready',
  });
});

module.exports = router;

const express = require('express');
const auth = require('../middlewares/auth');
const router = express.Router();

const validateCreatedAt = require('../middlewares/validateCreatedAt');
const validateDescription = require('../middlewares/validateDescription');
const validateDifficulty = require('../middlewares/validateDifficulty');
const validateName = require('../middlewares/validateName');
const validatePrice = require('../middlewares/validatePrice');
const validateRating = require('../middlewares/validateRating');

router.get('/', (_req, res) => {
  res.send('Welcome to the Eco API!');
});

router.post(
  '/',
  validateDifficulty,
  validateRating,
  validateCreatedAt,
  validateDescription,
  validateName,
  validatePrice,
  (_req, res) => {
    res.status(201).json({ message: 'Atividade registrada com sucesso!' });
  }
);

module.exports = router;

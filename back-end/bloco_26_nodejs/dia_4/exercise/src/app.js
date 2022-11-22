const express = require('express');
const app = express();
const activities = require('./routes/activitiesRoute');
const generateToken = require('./utils/generateToken');

app.use(express.json());

app.use('/activities', activities);

app.use('/signup', (req, res) => {
  const { firstName, email, password, phone } = req.body;
  if ([firstName, email, password, phone].includes(undefined)) {
    return res.status(401).json({ message: 'Invalid entries. Try again.' });
  }

  const token = generateToken();

  return res.status(200).json({ token });
});

module.exports = app;

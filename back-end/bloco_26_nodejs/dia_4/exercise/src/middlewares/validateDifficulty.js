module.exports = (req, res, next) => {
  const { difficulty } = req.body.description;
  const classifications = ['Fácil', 'Médio', 'Difícil'];

  if (!classifications.includes(difficulty)) {
    return res
      .status(400)
      .json({
        message: 'O campo "difficulty" deve ser "easy", "medium" ou "hard"',
      });
  }
  next();
};

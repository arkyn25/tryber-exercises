module.exports = (req, res, next) => {
  const { price } = req.body;
  if (!price) {
    return res.status(400).json({ message: 'O campo "price" é obrigatório' });
  }
  if (price < 0) {
    return res
      .status(400)
      .json({ message: 'O "price" deve ser um número positivo' });
  }
  next();
};

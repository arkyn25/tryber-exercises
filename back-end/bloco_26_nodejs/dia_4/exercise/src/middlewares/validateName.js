module.exports = (req, res, next) => {
  const { firstName } = req.body;
  if (!firstName) {
    return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  }
  if (firstName.length < 5) {
    return res
      .status(400)
      .json({ message: 'O "name" deve ter pelo menos 5 caracteres' });
  }
  next();
};

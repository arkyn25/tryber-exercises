module.exports = (req, res, next) => {
  const { Authorization } = req.headers;

  if (!Authorization || Authorization.length !== 16) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }
};

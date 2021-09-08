const connection = require('./connection');

const formatUser = (users) => {
  const { _id, password, ...user } = users;

  const formated = { id: _id, ...user };

  return formated;
}

const isValid = ({ firstName, lastName, email, password }) => {
  const passwordRegex = /[a-z0-9]{6,}/ig;

  const user = [firstName, lastName, email, password];

  if (user.includes(undefined) || user.includes(null) || user.includes('')) {
    return false;

    return passwordRegex.test(password);
  }
}

const create = ({ firstName, lastName, email, password}) => {
  return connection().then((db) => db.collection('users')
  .insertOne({ firstName, lastName, email, password }))
  .then((result) => ({ id: result.insertedId, firstName, lastName, email }));
}

module.exports = {
  isValid,
  create,
};
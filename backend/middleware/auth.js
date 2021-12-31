const jwt = require('jsonwebtoken');

const dotenv = require("dotenv").config();

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.RAMDOMTOKEN);
    const userId = decodedToken.userId;
    req.auth = { userId };
    if (req.body.userId && req.body.userId !== userId) {
      throw 'User ID non valide';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('requête non authentifié!')
    });
  }
};
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");

module.exports.checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        try {
          let user = UserModel.findById(decodedToken.id);  // await
          res.locals.user = user;
          next();
        } catch (err) {
          res.status(500).json({ error: 'Erreur lors de la recherche de l\'utilisateur' });
        }
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

module.exports.requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        console.log(err);
        res.send(400).json("No Token");
      } else {
        console.log(decodedToken.id);
        next();
      }
    });
  } else {
    console.log("No Token");
  }
};

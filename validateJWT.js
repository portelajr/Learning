// middleware autenticação
// ideia: por todas as rotas na camada controller

const jwt = require('jsonwebtoken');
const secret = "super-senha";

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token)
    return res.status(401).json({ message: "Token não informado" });
  
  next();
};

module.exports = validateJWT;

// passado no index / router e aplicado antes da req p/ verificação

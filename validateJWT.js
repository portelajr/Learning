// middleware autenticação
// ideia: por todas as rotas na camada controller

const jwt = require('jsonwebtoken');
const secret = "super-senha";

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token)
    return res.status(401).json({ message: "Token não informado" });
  
  // const payload = jwt.verify(token, secret)
  //função verify verificada em um bloco try catch

  try {
    const payload = jwt.verify(token, secret)
    req.user = payload.data.userName;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Erro: token inválido'})
  }
  
  next();
};

module.exports = validateJWT;

// passado no index / router e aplicado antes da req p/ verificação

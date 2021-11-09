// npm install jsonwebtoken

const User = require('./models/user') // simulação conexão banco
const jwt = require('jsonwebtoken');

const secret = "super-senha";  // definição da secret
const jwtConfiguration = { // configurações adicionais do token
  expiresIn: '15m',
  algorithm: 'HS265',
}

module.exports = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password )
      return res.status(401).json({ message: 'É necessario usuário e senha para fazer login'});
    
    const user = await User.findUser(username);

    if (!user || user.password !== password) 
      return res.status(401).json({ message: 'Usuário não existe ou senha inválida'});
    
    const userWithoutPassword = {
      id: user._id,
      username: user.username,
    }

    //criação do token recebendo payload, secret e configuração
    const token = jwt.sign({data: userWithoutPassword}, secret, jwtConfiguration)

    //TOKEN
    return res.status(200).json(token)
  } catch (e) {
    return res.status(500).json({ message: 'Erro interno', error: e })
  }
};


//SITE: jwt.io consegue mostrar header e payload (descriptografia)
// token: só expira com a data ou redefinição de secret (LOGOUT NAO MUDA o TOKLEN, por exemplo)

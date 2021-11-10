// configuração index api

const express = require('express');
const multer = require('multer');
const app = express();

const upload = multer({ dest: 'uploads/'})
// pasta definida localmente

app.post('/files', upload, (req, res) => {
//   req.file consegue infos do arquivo adicionado
  return res.status(201).json({ message: 'Arquivo'})
})

app.listen(3000, () => console.log('Api rodando na porta 3000'));

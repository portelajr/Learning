// configuração index api

const express = require('express');
const multer = require('multer');
const app = express();

const upload = multer({ dest: 'uploads/'})
// pasta definida localmente

app.post('/files', upload.single('file') , (req, res) => {
  // .single('nome1') é o nome da prop nome1 na req
  // o valor de nome1 é o arquivo
  // metodo .array a chave é a mesma na req p/ todos arquivos

//   req.file consegue infos do arquivo adicionado
  return res.status(201).json({ message: 'Arquivo'})
})

app.listen(3000, () => console.log('Api rodando na porta 3000'));

// 22

// configuração index api

const express = require('express');
const multer = require('multer');
const fs = require('fs');
var path = require('path'); // para diferenças de dir em SO diferentes
const app = express();

// funcao pra nomer arquivo novo* plus*
const getDate = () => {
  const date = new Date();
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}

const storage = multer.diskStorage({
  // permite adicionar especificaçõs dinâmicas
  // em cada upload, define destino
  // porem nao cria pasta auto; usar modulo fs

  // destination: (req, file, callback) => {
  //   return callback(null, 'uploads/')
  // }


  destination: (req, file, callback) => {
    const folderPath = `uploads/${getDate()}`;
    fs.mkdirSync(folderPath, { recursive: true })
    callback(null, folderPath)
  },
  filename: (req, file, callback) => {
    return callback(null, file.originalname)
  }
})


const upload = multer({ storage })
// const upload = multer({ dest: 'uploads/'})

// path.resolve('uploads')
// path.join('uploads', 'arquivos', 'dta...')

app.use('/arquvios', express.static(path.resolve('uploads')));
//tudo que estiver nesse diretorio, ta disponivel acesso
// app.use(express.static(`${__dirname}/uploads`));


app.post('/files', upload.single('file') , (req, res) => {
//   req.file consegue infos do arquivo adicionado
  return res.status(201).json({ message: 'Arquivo'})
})


app.listen(3000, () => console.log('Api rodando na porta 3000'));

// Exmplo upload multiplos arquivos
// app.post('/files/', upload.array('file', 2), (req, res) => {
//   return res.status(201).json({ message: "Arquivo" })
// });
// .single('nome1') é o nome da prop nome1 na req
// o valor de nome1 é o arquivo
// metodo .array a chave é a mesma na req p/ todos arquivos

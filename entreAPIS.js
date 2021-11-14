const FormData = require('form-data');
const axios = require('axios');
const fs = require('fs');

const stream = fs.createWriteStream('./arquivo-a-enviar');

// construação da estrutura a ser enviada
const formInfo = new FormData(); 
formInfo.append('file', stream) 
// param1: nome da chave que recebe arquivo
// param2: arquivo (porém com método stream - em partes)


// getHeaders() pré configura cabeçalho p/ req
const formHeader = formInfo.getHeaders();
const URL = 'http://localhost:3000/files';

// requisição HTTP com axios
axios.post(URL, formInfo, { headers: { ...formHeader } })
  .then(() => console.log('Enviado com sucesos'));

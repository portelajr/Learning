### JSON Web Token - JWT
- opção de ferramenta de token de autenticação
- autenticação: restringir acesso a rotas específicas da aplicação

- token é recebido num momento de login (res da requisição)
- na pratica é um JWS (JSON web signature - só criptografa a signature)

## Especificações
- estrutura dividida nos pontos.
- composição: header, payload e signature
- conversão base64 - criptografia mais simples
- header e payload: não criptografados ( motivo: performance)
- HMAC é uma hash function -> a mesma entrada retorna mesma saída
- porém uma saída não consegue 'retornar' a entrada.

- header: infos algoritmo hash(HS256) e tipo de token (JWT)
- payload: infos de acesso e usuário do token
- signature: base 64header + base64payload + senha (secret) > GERA UMA HASH
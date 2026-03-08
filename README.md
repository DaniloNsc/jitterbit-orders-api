# Jitterbit Orders API

API desenvolvida em Node.js para gerenciamento de pedidos.

## Tecnologias utilizadas

- Node.js
- Express
- PostgreSQL
- Docker
- dotenv

## Como rodar o projeto

1. Instalar dependências

npm install

2. Subir banco de dados com Docker

docker compose up -d

3. Rodar a aplicação

node server.js

A API irá rodar em:

http://localhost:3000

## Endpoints

POST /order  
Cria um pedido.

GET /order/:id  
Busca um pedido pelo ID.

GET /order/list  
Lista todos os pedidos.

## Estrutura do projeto

src
- config
- controllers
- routes
- services

## Testes

Os testes da API foram realizados utilizando Postman.
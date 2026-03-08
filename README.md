# Jitterbit Orders API

API REST desenvolvida em Node.js para gerenciamento de pedidos.

Este projeto foi criado como parte de um desafio técnico e permite:

- criar pedidos
- buscar pedidos por ID
- listar pedidos cadastrados

## Tecnologias utilizadas

- Node.js
- Express
- PostgreSQL
- Docker
- dotenv
- Postman

## Estrutura do projeto

```text
src
├── config
│   └── db.js
├── controllers
│   └── orderController.js
├── routes
│   └── orderRoutes.js
├── services
│   └── orderMapper.js
└── app.js

server.js

## Como executar o projeto

1. Clonar o repositório
git clone https://github.com/DaniloNsc/jitterbit-orders-api.git

2. Entrar na pasta do projeto
cd jitterbit-orders-api

3. Instalar as dependências
npm install

4. Subir o banco com Docker
docker compose up -d

5. Rodar a aplicação
node server.js

A API ficará disponível em:

http://localhost:3000
Variáveis de ambiente

Crie um arquivo .env na raiz do projeto com este conteúdo:

PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=admin
DB_PASSWORD=admin
DB_NAME=orders
Endpoints
Criar pedido
POST /order

Exemplo de body:

{
  "numeroPedido": "v10089015vdb-01",
  "valorTotal": 10000,
  "dataCriacao": "2023-07-19T12:24:11.5299601+00:00",
  "items": [
    {
      "idItem": "2434",
      "quantidadeItem": 1,
      "valorItem": 1000
    }
  ]
}
Buscar pedido por ID
GET /order/:id

Exemplo:

GET /order/v10089015vdb-01
Listar pedidos
GET /order/list
Respostas esperadas
Pedido criado com sucesso
{
  "message": "Pedido criado com sucesso",
  "order": {
    "orderId": "v10089015vdb-01",
    "value": 10000,
    "creationDate": "2023-07-19T12:24:11.529Z",
    "items": [
      {
        "productId": 2434,
        "quantity": 1,
        "price": 1000
      }
    ]
  }
}
Pedido encontrado
{
  "orderId": "v10089015vdb-01",
  "value": 10000,
  "creationDate": "2023-07-19T12:24:11.529Z",
  "items": [
    {
      "productId": 2434,
      "quantity": 1,
      "price": 1000
    }
  ]
}
Pedido não encontrado
{
  "error": "Pedido não encontrado"
}
Pedido duplicado
{
  "error": "Já existe um pedido com esse ID"
}
Status codes
201 Created  -> pedido criado com sucesso
200 OK       -> consulta realizada com sucesso
404 Not Found -> pedido não encontrado
409 Conflict -> pedido duplicado
500 Internal Server Error -> erro interno
Testes realizados

A API foi testada com Postman nos seguintes cenários:

criação de pedido

busca por ID

listagem de pedidos

pedido inexistente

pedido duplicado

Autor

Desenvolvido por Danilo Gabriel.

GitHub:
https://github.com/DaniloNsc
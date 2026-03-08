
## Description

Jitterbit Orders API

API REST desenvolvida em **Node.js** para gerenciamento de pedidos.

Este projeto foi desenvolvido como parte de um **desafio técnico**, com o objetivo de demonstrar habilidades em:

- Desenvolvimento de APIs REST
- Estruturação de projetos backend
- Manipulação e transformação de dados
- Persistência em banco de dados
- Uso de Docker
- Boas práticas com Git e GitHub

# 🛠Technologies used
- Node.js
- Express
- PostgreSQL
- Docker
- dotenv
- Postman

## Project structure
src
│
├── config
│ └── db.js
│
├── controllers
│ └── orderController.js
│
├── routes
│ └── orderRoutes.js
│
├── services
│ └── orderMapper.js
│
└── app.js

server.js

#  Description of folders
| Pasta | Função |
|------|------|
| config | Configuração de conexão com o banco |
| controllers | Lógica das requisições |
| routes | Definição das rotas da API |
| services | Manipulação e transformação de dados |
| app.js | Configuração principal do Express |
| server.js | Inicialização da aplicação |


# ⚙️ Como executar o projeto

## 1️⃣ Clonar o repositório
git clone https://github.com/DaniloNsc/jitterbit-orders-api.git

## 2️⃣ Entrar na pasta do projeto
cd jitterbit-orders-api

## 3️⃣ Instalar dependências
npm install

## 4️⃣ Subir o banco com Docker
docker compose up -d

## 5️⃣ Executar a aplicação
node server.js

# A API ficará disponível em:
http://localhost:3000


# 🔑 Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=admin
DB_PASSWORD=admin
DB_NAME=orders

---

# 📡 Endpoints da API

## Criar pedido
POST /order

### Exemplo de Body

```json
{
  "numeroPedido": "v10089015vdb-01",
  "valorTotal": 10000,
  "dataCriacao": "2023-07-19T12:24:11.529Z",
  "items": [
    {
      "idItem": 2434,
      "quantidadeItem": 1,
      "valorItem": 1000
    }
  ]
}
Buscar pedido por ID

GET /order/:id

Exemplo:
GET /order/v10089015vdb-01

Listar pedidos:
GET /order/list


# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov


## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
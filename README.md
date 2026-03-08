# 🚀 Jitterbit Orders API

API REST desenvolvida com Node.js para gerenciamento de pedidos.

Este projeto foi criado como parte de um **desafio técnico** e demonstra habilidades em:

- Desenvolvimento de APIs REST
- Estruturação de projetos backend
- Manipulação e transformação de dados
- Persistência em banco de dadosgit add .
- Uso de Docker
- Boas práticas com Git e GitHub

---

## 📌 1) Visão geral
## 🛠 Tecnologias Utilizadas

- **Node.js**
- **Express**
- **PostgreSQL**
- **Docker**
- **dotenv**
- **Postman**

---

## 🧱 2) Estrutura do projeto
## 📂 Estrutura do Projeto

```txt

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
```

### Descrição das Pastas e Arquivos

| Pasta/Arquivo | Descrição |
|---|---|
| `config` | Configuração da conexão com o banco de dados |
| `controllers` | Lógica de requisições e respostas |
| `routes` | Definição das rotas da API |
| `services` | Manipulação e transformação de dados |
| `app.js` | Configuração da aplicação Express |
| `server.js` | Ponto de entrada da aplicação |

---

## ⚙️ 3) Funcionamento interno
## ⚙️ Como Executar o Projeto


1. **Clone o repositório**
```bash
git clone https://github.com/DaniloNsc/jitterbit-orders-api.git
```

2. **Acesse a pasta do projeto**
```bash
cd jitterbit-orders-api
```

3. **Instalar as dependências**
```bash
Instalar as dependências
```

4. **Iniciar o banco de dados com Docker**
```bash
Idocker compose up -d
```

5. **Executar a aplicação**
```bash
node server.js
```
A API estará disponível em:
```
http://localhost:3000
```

## 🔑 4) Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com a seguinte configuração:

Este projeto **não altera** registro do Windows, serviços do sistema ou arquivos críticos.
```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=admin
DB_PASSWORD=admin
DB_NAME=orders
```
---

## 🚀 5) Como criar um repositório separado só para este projeto
## 📡 Endpoints da API

Se hoje o código está em um repositório geral/perfil, faça assim:
### 1) Criar Pedido

- **Método:** `POST`
- **Rota:** `/order`

**Exemplo de body:**

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
```

### 2) Buscar Pedido por ID

- **Método:** `GET`
- **Rota:** `/order/:id`

**Exemplo de requisição:**

```http
GET /order/v10089015vdb-01
```

4. Pronto: projeto isolado, documentação técnica e histórico próprio.
### 3) Listar Pedidos

- **Método:** `GET`
- **Rota:** `/order/list`

---

## 📥 Respostas da API

### Pedido criado com sucesso

```json
{
  "message": "Order created successfully",
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
```

### Pedido encontrado

```json
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
```

### Pedido não encontrado

```json
{
  "error": "Order not found"
}
```

### Pedido duplicado

```json
{
  "error": "An order with this ID already exists"
}
```

---

## 📊 Status Codes

| Código | Descrição |
|---|---|
| `201` | Pedido criado com sucesso |
| `200` | Requisição concluída com sucesso |
| `404` | Pedido não encontrado |
| `409` | Pedido duplicado |
| `500` | Erro interno no servidor |

---

## 🧪 Testes

A API foi validada com Postman nos seguintes cenários:

- Criação de pedido
- Busca de pedido por ID
- Listagem de pedidos
- Busca de pedido inexistente
- Tentativa de criação de pedido duplicado

---

## 👨‍💻 Autor

Desenvolvido por **Danilo Gabriel**.

Uso educacional e demonstração técnica.
- LinkedIn: https://www.linkedin.com/in/danilo-gabriel-4b37ba2b1/
- GitHub: https://github.com/DaniloNsc

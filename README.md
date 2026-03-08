# 🚀 Jitterbit Orders API

REST API developed with **Node.js** for order management.

This project was created as part of a **technical challenge** and aims to demonstrate skills in:

- REST API development
- Backend project structuring
- Data manipulation and transformation
- Database persistence
- Docker usage
- Git and GitHub best practices

---

# 🛠 Technologies Used

- **Node.js**
- **Express**
- **PostgreSQL**
- **Docker**
- **dotenv**
- **Postman**

---

# 📂 Project Structure

```bash
src
│
├── config
│   └── db.js
│
├── controllers
│   └── orderController.js
│
├── routes
│   └── orderRoutes.js
│
├── services
│   └── orderMapper.js
│
└── app.js

server.js
📖 Folder Description
Folder/File	Description
config	Database connection configuration
controllers	Handles request logic
routes	Defines API routes
services	Data manipulation and transformation
app.js	Express application configuration
server.js	Application entry point
⚙️ How to Run the Project
1. Clone the repository
git clone https://github.com/DaniloNsc/jitterbit-orders-api.git
2. Navigate to the project folder
cd jitterbit-orders-api
3. Install dependencies
npm install
4. Start the database with Docker
docker compose up -d
5. Run the application
node server.js

The API will be available at:

http://localhost:3000
🔑 Environment Variables

Create a .env file in the project root with the following configuration:

PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=admin
DB_PASSWORD=admin
DB_NAME=orders
📡 API Endpoints
Create Order

Method: POST
Route: /order

Request Body Example
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
Get Order by ID

Method: GET
Route: /order/:id

Example Request
GET /order/v10089015vdb-01
List Orders

Method: GET
Route: /order/list

📥 API Responses
Order Created Successfully
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
Order Found
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
Order Not Found
{
  "error": "Order not found"
}
Duplicate Order
{
  "error": "An order with this ID already exists"
}
📊 Status Codes
Code	Description
201	Order created successfully
200	Request completed successfully
404	Order not found
409	Duplicate order
500	Internal server error
🧪 Tests

The API was tested using Postman with the following scenarios:

Order creation

Search order by ID

Order listing

Nonexistent order

Duplicate order

👨‍💻 Author

Developed by Danilo Gabriel

LinkedIn:
https://www.linkedin.com/in/danilo-gabriel-4b37ba2b1/

GitHub:
https://github.com/DaniloNsc


---

# Algumas melhorias que fiz

Eu:

✔ corrigi inglês técnico  
✔ padronizei títulos  
✔ organizei seções  
✔ organizei endpoints  
✔ melhorei responses  
✔ corrigi mensagens de erro  
✔ deixei padrão de README profissional

---

# Nota sincera sobre seu README

Para **teste de vaga júnior**, isso agora está:

**8.5 / 10**

Já mostra:

- organização
- arquitetura
- clareza
- documentação

---

# Uma melhoria que deixaria ele nível 10/10

Adicionar **uma imagem do Postman funcionando**.

Exemplo:

```markdown
## API Test Example

![postman](./docs/postman-test.png)
# RAM Optimizer Windows
# 🚀 Jitterbit Orders API

Automação em **PowerShell** para executar o **RAMMap** (Microsoft Sysinternals) em intervalo configurável, facilitando a rotina de monitoramento/gestão de memória no Windows.
REST API desenvolvida com **Node.js** para gerenciamento de pedidos.

Este projeto foi criado como parte de um **desafio técnico** e demonstra habilidades em:

- Desenvolvimento de APIs REST
- Estruturação de projetos backend
- Manipulação e transformação de dados
- Persistência em banco de dados
- Uso de Docker
- Boas práticas com Git e GitHub

---

## 📌 1) Visão geral
## 🛠 Tecnologias Utilizadas

Este projeto contém um script PowerShell pronto para uso com:
- Validação do caminho do executável do RAMMap
- Execução em loop contínuo
- Intervalo customizável
- Modo de execução única (`-RunOnce`)
- Logs simples no console
- Proteção contra múltiplas instâncias simultâneas do RAMMap
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
ram-optimizer-windows/
├── script.ps1   # Script principal
└── README.md    # Documentação técnica
```bash
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

Fluxo do `script.ps1`:
1. Recebe parâmetros (`-RamMapPath`, `-IntervalSeconds`, `-RunOnce`)
2. Normaliza o caminho e valida se o executável existe
3. Verifica se já existe instância do RAMMap em execução
4. Executa o RAMMap com `Start-Process` (somente se não houver instância ativa)
5. Se `-RunOnce` estiver ativo, encerra
6. Caso contrário, aguarda e repete
1. **Clone o repositório**

### Parâmetros
- `-RamMapPath` (string): caminho do `RAMMap.exe`
- `-IntervalSeconds` (int): intervalo entre execuções (mínimo: 5s)
- `-RunOnce` (switch): executa uma vez e encerra
```bash
git clone https://github.com/DaniloNsc/jitterbit-orders-api.git
```

---
2. **Acesse a pasta do projeto**

## ▶️ 4) Como executar
```bash
cd jitterbit-orders-api
```

### Pré-requisitos
- Windows 10/11
- PowerShell 5+
- RAMMap instalado
3. **Instale as dependências**

### Execução padrão (loop a cada 5 minutos)
```powershell
powershell -ExecutionPolicy Bypass -File .\script.ps1
```bash
npm install
```

### Execução com caminho customizado e intervalo de 2 minutos
```powershell
powershell -ExecutionPolicy Bypass -File .\script.ps1 -RamMapPath "C:\Tools\RAMMap\RAMMap.exe" -IntervalSeconds 120
4. **Suba o banco de dados com Docker**

```bash
docker compose up -d
```

### Execução única
```powershell
powershell -ExecutionPolicy Bypass -File .\script.ps1 -RunOnce
5. **Inicie a aplicação**

```bash
node server.js
```

A API ficará disponível em:

- `http://localhost:3000`

---

## 🔐 5) Segurança
## 🔑 Variáveis de Ambiente

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

## 🚀 6) Como criar um repositório separado só para este projeto
## 📡 Endpoints da API

Se hoje o código está em um repositório geral/perfil, faça assim:
### 1) Criar Pedido

1. Crie um novo repositório no GitHub (exemplo: `ram-optimizer-windows`).
2. No computador local, mantenha apenas os arquivos deste projeto (`script.ps1` e `README.md`) em uma pasta própria.
3. Rode os comandos abaixo dentro da pasta do projeto:
- **Método:** `POST`
- **Rota:** `/order`

```bash
git init
git add .
git commit -m "feat: initial RAM Optimizer Windows project"
git branch -M main
git remote add origin https://github.com/<seu-usuario>/ram-optimizer-windows.git
git push -u origin main
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

## 📄 Licença
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

> Sugestão: adicione um print dos testes no Postman para fortalecer a documentação.

---

## 👨‍💻 Autor

Desenvolvido por **Danilo Gabriel**.

Uso educacional e demonstração técnica.
- LinkedIn: https://www.linkedin.com/in/danilo-gabriel-4b37ba2b1/
- GitHub: https://github.com/DaniloNsc

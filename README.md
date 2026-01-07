
# 💰 Finance Manager

Sistema completo para gestão de finanças pessoais, permitindo controle de receitas, despesas e visualização de dashboard.

O projeto é estruturado como um monorrepo contendo uma API RESTful em .NET e um Frontend moderno em React.

## 🛠️ Tecnologias Utilizadas

### Backend (API)
- **.NET 8** (C#)
- **Entity Framework Core** (ORM)
- **PostgreSQL** (Banco de Dados)
- **Swagger** (Documentação da API)

### Frontend (Web)
- **React** (via Vite)
- **TypeScript**
- **Tailwind CSS v3** (Estilização)
- **Axios** (Integração API)
- **React Router DOM** (Navegação)

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- .NET SDK 8.0+
- Node.js (v18 ou superior)
- PostgreSQL rodando localmente

### 1️⃣ Configurando o Backend

1. Navegue até a pasta da API:
   ```bash
   cd FinanceManager.Api



2. Configure a string de conexão no `appsettings.json` para apontar para seu banco PostgreSQL local.
3. Aplique as migrations para criar o banco:
```bash
dotnet ef database update

```


4. Execute a aplicação:
```bash
dotnet run

```


*A API estará rodando em: `https://localhost:7061` (ou porta similar).*

### 2️⃣ Configurando o Frontend

1. Navegue até a pasta do frontend:
```bash
cd frontend

```


2. Instale as dependências:
```bash
npm install

```


3. Execute o servidor de desenvolvimento:
```bash
npm run dev

```


*O site estará disponível em: `http://localhost:5173`.*

---

## 📌 Status do Projeto

### ✅ Concluído

* [x] Configuração inicial da Solution .NET
* [x] Configuração do Banco de Dados (EF Core + Postgres)
* [x] Endpoints base de Autenticação (Swagger funcional)
* [x] Setup do Frontend com Vite + TypeScript
* [x] Configuração do Tailwind CSS

### 🚧 Em Desenvolvimento

* [ ] Tela de Login e Integração com API
* [ ] Contexto de Autenticação (Frontend)
* [ ] Proteção de Rotas

### 📅 Futuro

* [ ] Dashboard com Gráficos
* [ ] CRUD de Transações (Receitas/Despesas)
* [ ] Relatórios Mensais

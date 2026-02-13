# 🔐 Login API

API de autenticação desenvolvida em **Node.js**, responsável por gerenciar login de usuários e geração de token JWT.

Este projeto foi criado com foco em organização de código, boas práticas e estrutura escalável para aplicações reais.

---

## 🚀 Tecnologias Utilizadas

- 🟢 Node.js  
- 🚂 Express  
- 🗄️ TypeORM 
- 🐬 MySQL  
- 🔐 JWT (JSON Web Token)  
- 🔑 Bcrypt (hash de senha)  
- 📦 TypeScript  

---

## 📂 Estrutura do Projeto
```
├── dist/
├── node_modules/
├── src/
│ ├── controllers/
│ │ ├── AuthController.ts
│ │ └── UserController.ts
│ │
│ ├── database/
│ │ ├── entities/
│ │ │ └── User.ts
│ │ ├── migrations/
│ │ │ └── 170765206197-createUsers.ts
│ │ └── data-source.ts
│ │
│ ├── middleware/
│ │ └── authJws.ts
│ │
│ ├── routes/
│ │ ├── auth.routes.ts
│ │ └── user.routes.ts
│ │
│ ├── services/
│ │ ├── AuthService.ts
│ │ └── UserService.ts
│ │
│ └── index.ts
│
├── .env
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── tsconfig.json

```
## ⚙️ Funcionalidades

- ✅ getAll, getOne, create, delete e update de Usuário  
- ✅ Login com validação de credenciais  
- ✅ Hash de senha com bcrypt  
- ✅ Geração de token JWT  
- ✅ Tratamento de erros  
- ✅ Estrutura organizada por camadas  

---

## 🔌 Endpoints

### 🔐 Login
POST /login

### Body

```json
{
  "email": "usuario@email.com",
  "password": "123456"
}
```

### Resposta de sucesso
```json
{
  "user": {
    "id": 1,
    "email": "usuario@email.com"
  },
  "token": "jwt_token_aqui"
}
```

### 🔐 Create User
POST /users

### Body

```json
{
	"nome" : "user",
	"email" : "user@gmail.com",
	"password" : "user123"
}
```

### Resposta de sucesso
```json
{
	"id": 1,
	"username": "user",
	"email": "user@gmail.com",
	"createdAt": "2026-02-12T22:44:36.288Z"
}
```

### 🔐 GetAll Users
GET /users

### AUTH(Bearer token)

```bearer
token: jwt_token
prefix: Bearer
```

### Resposta de sucesso
```json
{
	"id": 1,
	"username": "user",
	"email": "user@gmail.com",
	"createdAt": "2026-02-12T22:44:36.288Z"
}
...
```

### 🔐 GetOne User
GET /users/1

### AUTH(Bearer token)

```bearer
token: jwt_token
prefix: Bearer
```

### Resposta de sucesso
```json
{
	"id": 1,
	"username": "user",
	"email": "user@gmail.com",
	"createdAt": "2026-02-12T22:44:36.288Z"
}
```

### 🔐 Update User
PUT /users/1

### AUTH(Bearer token)

```bearer
token: jwt_token
prefix: Bearer
```

### Resposta de sucesso
```json
{
	"atualizado": {
		"id": 1,
		"username": "user",
		"email": "user@gmail.com",
		"createdAt": "2026-02-12T22:44:36.288Z"
	},
	"message": "Sucesso"
}
```

### 🔐 Delete User
PUT /users/1

### AUTH(Bearer token)

```bearer
token: jwt_token
prefix: Bearer
```

### Resposta de sucesso
```json
{
	"user": {
		"username": "user",
		"email": "user@gmail.com",
		"createdAt": "2026-02-12T22:44:36.000Z"
	},
	"message": "Sucesso"
}
```

## 🛠️ Como rodar o projeto

### 1️⃣ Clone o repositório
```bash
git clone https://github.com/VinioVnz/api_login
```

### 2️⃣ Instale as dependências
```bash
npm install
```

## 3️⃣ Configure as variáveis de ambiente

### Crie um arquivo .env na raiz do projeto:
```
PORT=3333
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco

#gerar chave openssl rand -hex 64
JWT_SECRET=sua_chave_secreta

#1m ou 1h ou 1d
JWT_EXPIRE=1d
```

## 4️⃣ Rode as migrations (se estiver usando TypeORM)

```bash
npm run migration:run
```

## 5️⃣ Inicie o servidor

```bash
npm run dev
```

### A API estará disponível em:
```bash
http://localhost:3333
```

## 🔒 Segurança
### - Senhas armazenadas com hash (bcrypt)
### - Autenticação baseada em JWT
### - Separação de responsabilidades (controller/service)

## 📌 Melhorias Futuras

### - Refresh token
### - Testes automatizados
### - Documentação com Swagger
### - Middleware de autorização por role
### - Deploy em ambiente cloud

## 👨‍💻 Autor
### Desenvolvido por Vinicius Bornhofen

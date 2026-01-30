# Product Management System

API REST desenvolvida com Node.js + NestJS + TypeScript, seguindo Clean Architecture, utilizando Prisma ORM com PostgreSQL, autenticação com JWT, criptografia com bcrypt e validação de dados com Joi.

Projeto focado em boas práticas de arquitetura, separação de responsabilidades e escalabilidade.

[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](https://opensource.org/licenses/MIT)

## Resumo

- [Requisitos](#Requisitos)
- [Instalação](#Instalação)
- [Testes](#Testes)
- [Arquitetura](##Arquitetura)
- [Banco de Dados](#BancodeDados)
- [Tecnologias](#Tecnologias)

---

## Requisitos

- [NodeJs](https://nodejs.org/en/download/current)
- Editor de Texto (e.g [VsCode](http://code.visualstudio.com/download))
- [Git](https://git-scm.com/install/windows)

## ▶️ Instalação

```bash
git clone https://github.com/joabesimao/Product-Management-System.git
npm install
```

#### ⚙️ Variáveis de ambiente

Este projeto utiliza variáveis de ambiente para acesso ao bando de dados e para o secret do token jwt.
Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/database"
JWT_SECRET="super-secret-key"
```

### Configuração do Prisma

```bash
npx prisma migrate dev (para a primeira vez, mas como a base já está configurada, não é necessário rodar)
npx prisma generate
```

### Rodando o projeto

Após realizar os passos acima, execute o comando abaixo para rodar o projeto:

```bash
npm run start:dev
```

## Testes

Para rodar os testes do projeto, execute os seguintes comandos:

**Unit Tests**

```bash
$ npm run test:unit
```

or

```bash
$ yarn test:unit
```

**Lint**

```bash
$ npm run lint
```

or

```bash
$ yarn lint
```

**Style Check**

```bash
npm run style:check
npm run style:fix
yarn style:check
yarn style:fix
```

**All Tests**

```bash
npm test
```

or

```bash
yarn test
```

### Servidor padrão

```bash
http://localhost:3000

```

## Arquitetura

O projeto segue os princípios da **Clean Architecture**:

```
src/
├── domain/ # Regras de negócio (entities, usecases, interfaces)
├── data/ # Implementações dos use cases
├── infra/ # Banco de dados, criptografia, validação, NestJS
├── presentation/ # Controllers Clean (independentes do Nest)
└── main/ # Bootstrap da aplicação
```

### 📌 Camadas

- **Domain**: não depende de nenhuma outra camada
- **Data**: implementa regras do domínio
- **Infra**: detalhes externos (Prisma, bcrypt, JWT, Nest)
- **Presentation**: controllers independentes de framework

## 🔐 Autenticação

- Cadastro de usuário (**signup**)
- Login (**login**)
- Autenticação via **JWT**

### Rotas

| Método | Rota           | Descrição   |
| ------ | -------------- | ----------- |
| POST   | `/auth/signup` | Criar conta |
| POST   | `/auth/login`  | Autenticar  |

## 📦 Produtos

CRUD completo de produtos.

### Rotas

| Método | Rota            | Descrição         |
| ------ | --------------- | ----------------- |
| POST   | `/products`     | Criar produto     |
| GET    | `/products`     | Listar produtos   |
| GET    | `/products/:id` | Buscar produto    |
| PUT    | `/products/:id` | Atualizar produto |
| DELETE | `/products/:id` | Remover produto   |

## 🧪 Validação

A validação dos dados é feita com **Joi**, usando Pipes customizados no NestJS.

Exemplo:

- Email obrigatório
- Senha mínima
- Campos desconhecidos removidos

## 🗄️ Banco de Dados

### Prisma

- ORM responsável pela comunicação com o PostgreSQL
- Migrations versionadas
- Prisma Client gerado automaticamente

---

## Exemplos de Utilização da API:

Para fins de validação, seguem CURLs de exemplo de utilização dos endpoints da API.
Copie e cole o CURL no seu client preferido e.g. [Insomnia](https://insomnia.rest/download), [Postman](https://www.postman.com/downloads/).

### Login Usuario:

```javascript
curl --location 'http://localhost:3000/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
"email":"exemplo@email.com",
"password": "12345678"
}'
```

Obs: O serviço valida autenticação em todas as rotas /product, logo, após realizar o login, adicione o token retornado no campo `accessToken` no header de nome `authorization` de todas as requisições abaixo, para garantir a autenticação.

### Buscar todos os produtos:

```javascript
curl --request GET \
 --url http://localhost:3000/products \
 --header 'User-Agent: insomnia/12.3.0'
```

### Buscar um produto por id :

```javascript
curl --request GET \
 --url http://localhost:3000/products \:id
--header 'User-Agent: insomnia/12.3.0'
```

### Criar um produto:

```javascript
curl --location 'http://localhost:3000/products/' \
--header 'Content-Type: application/json' \
--data '{
"name": "produto",
"description": "novo produto",
"price": 19.9,
"stock": 10,
"category":"eletronicos",
"status": true
}'
```

### Atualizar um produto:

```javascript
curl --location --request PUT 'http://localhost:3000/products/1' \
--header 'Content-Type: application/json' \
--data '{
"name": "produto 2",
"description": "novo produto",
"price": 19.9,
"stock": 10,
"category":"eletronicos",
"status": true
}'
```

### Deletar um produto:

```javascript
curl --request DELETE \
  --url http://localhost:3000/products/1 \
  --header 'Content-Type: application/json' \
  --header 'authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTc2OTc0MzA1MiwiZXhwIjoxNzY5NzQ2NjUyfQ.PyrLQ-gWGd4tAGBCWyCRKRwI6qnIIQNa4vaxIbTZzAA'
```

### Cadastrar um Usuario:

```javascript
curl --location 'http://localhost:3000/auth/signup' \
--header 'Content-Type: application/json' \
--data-raw '{
"name": "user",
"email":"exemplo@email.com",
"password": "12345678"
}'
```

---

## Autor

- [@JoabeSimao](https://github.com/joabesimao)

## Tecnologias

Neste projeto foram usadas as seguintes tecnologias

- Node.js

- NestJS

- TypeScript

- Prisma ORM

- PostgreSQL

- JWT (@nestjs/jwt)

- bcrypt

- Joi (validação)

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/VisualStudioCode-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

- [Node.js](https://nodejs.org/)
- [Visual Studio Code](https://code.visualstudio.com/)- editor de texto com os plugins instalados: - [DotENV](https://github.com/mikestead/vscode-dotenv), [ESLint](https://github.com/Microsoft/vscode-eslint), [GitLens](https://github.com/eamodio/vscode-gitlens) e [vscode-icons](https://github.com/vscode-icons/vscode-icons).
- [Jest](https://jestjs.io/) - Javascript Test Framework.
- [ESLint](https://github.com/eslint/eslint) - ESLint para padronização.
- [Prettier](https://prettier.io/) - para formatação.

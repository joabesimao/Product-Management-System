# Product Management System

API REST desenvolvida com Node.js + NestJS + TypeScript, seguindo Clean Architecture, utilizando Prisma ORM com PostgreSQL, autenticação com JWT, criptografia com bcrypt e validação de dados com Joi.

Projeto focado em boas práticas de arquitetura, separação de responsabilidades e escalabilidade.

[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](https://opensource.org/licenses/MIT)

# Summary

- [Requirements](#Requirements)
- [Installation](#Installation)
- [Test](#Test)
- [Techs](#Techs)
- [References](#References)

## ▶️ Run the Project

```bash
npm install
npm run start:dev
```

# Test

To execute this project tests, you must run the following commands:

- **Unit Tests**

  ```
  $ npm run test:unit
  ```

  or

  ```
  $ yarn test:unit
  ```

- **Functional Tests**

```
$ npm run test:functional
```

```
$ yarn test:functional
```

- **Lint**

```
$ npm run lint
```

or

```
$ yarn lint
```

- **Style Check**
  ``npm run style:check` ``npm run style:fix`or`yarn style:check` `yarn style:fix`

- **All Tests**
  ```npm test`
  or
  `yarn test`

Default Server:

```
http://localhost:3000
```

## Architecture

O projeto segue os princípios da **Clean Architecture**:

```
src/
├── domain/         # Regras de negócio (entities, usecases, interfaces)
├── data/           # Implementações dos use cases
├── infra/          # Banco de dados, criptografia, validação, NestJS
├── presentation/   # Controllers Clean (independentes do Nest)
└── main/           # Bootstrap da aplicação
```

### 📌 Layers

- **Domain**: não depende de nenhuma outra camada
- **Data**: implementa regras do domínio
- **Infra**: detalhes externos (Prisma, bcrypt, JWT, Nest)
- **Presentation**: controllers independentes de framework

## 🔐 Autentication

- Cadastro de usuário (**signup**)
- Login (**login**)
- Autenticação via **JWT**

### Routes

| Método | Rota           | Descrição   |
| ------ | -------------- | ----------- |
| POST   | `/auth/signup` | Criar conta |
| POST   | `/auth/login`  | Autenticar  |

## 📦 Products

CRUD completo de produtos.

### Rotas

| Método | Rota            | Descrição         |
| ------ | --------------- | ----------------- |
| POST   | `/products`     | Criar produto     |
| GET    | `/products`     | Listar produtos   |
| GET    | `/products/:id` | Buscar produto    |
| PUT    | `/products/:id` | Atualizar produto |
| DELETE | `/products/:id` | Remover produto   |

## 🧪 Validation

A validação dos dados é feita com **Joi**, usando Pipes customizados no NestJS.

Exemplo:

- Email obrigatório
- Senha mínima
- Campos desconhecidos removidos

## 🗄️ Database

### Prisma

- ORM responsável pela comunicação com o PostgreSQL
- Migrations versionadas
- Prisma Client gerado automaticamente

### Useful commands

```bash
npx prisma migrate dev
npx prisma generate
npx prisma studio
```

## ⚙️ Environment Variables

Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/database"
JWT_SECRET="super-secret-key"
```

---

## Authors

- [@JoabeSimao](https://github.com/joabesimao)

# Techs

Node.js

NestJS

TypeScript

Prisma ORM

PostgreSQL

JWT (@nestjs/jwt)

bcrypt

Joi (validação)

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/VisualStudioCode-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

In this project, we used the following technologies:

- [Node.js](https://nodejs.org/)
- [Visual Studio Code](https://code.visualstudio.com/)- Text editor with following plugins installed: [DotENV](https://github.com/mikestead/vscode-dotenv), [ESLint](https://github.com/Microsoft/vscode-eslint), [GitLens](https://github.com/eamodio/vscode-gitlens) e [vscode-icons](https://github.com/vscode-icons/vscode-icons).
- [Jest](https://jestjs.io/) - Javascript Test Framework.
- [ESLint](https://github.com/eslint/eslint) - ESLint to padronize the project code.
- [Prettier](https://prettier.io/) - To format code automatically.

# References

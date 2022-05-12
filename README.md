<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

Backend for an Order Management system. Uses [Nest](https://github.com/nestjs/nest) with TypeScript.

## Installation

```bash
$ npm install
```

## Add .env file with these variables

DATABASE_PREFIX=mongodb+srv://
DATABASE_ADDRESS=@cluster0.qv49r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
DATABASE_USERNAME=<USERNAME>
DATABASE_PASSWORD=<PASSWORD>
PORT=<NUMBER>

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

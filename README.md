# Simple API Express JS

## APIs

With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy.

## Features

- Express

## Requirements

- [node & npm](https://nodejs.org/en/)
- [git](https://www.robinwieruch.de/git-essential-commands/)

## Installation

- `git clone git@github.com:rwieruch/node-express-server-rest-api.git`
- `cd node-express-server-rest-api`
- `npm install`
- `npm start`
- optional: include _.env_ in your _.gitignore_

#### GET Routes

- visit http://localhost:3003
  - /products
  - /products/1
  
#### Postman

- Install [Postman](https://www.getpostman.com/apps) to interact with REST API
- Create a message with:
  - URL: http://localhost:3003/products
  - Method: POST
  - Body: raw + JSON (application/json)
  - Body Content: `{ "name": "Iphone 11" }`
- Delete a message with:
  - URL: http://localhost:3003/products/1
  - Method: DELETE
  
#### Post Example
  
![Postman Example](https://github.com/cassiorsfreitas/Simple-API-Express.js/blob/main/img/postman.png)


Feito com ♥ by [Cássio Freitas](https://www.linkedin.com/in/cassiorsfreitas/)

const express = require('express');
const { routeLogin, routeUser } = require('./routes');
// const { newUser } = require('./middlewares/newUser');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`

app.use('/login', routeLogin);
app.use('/user', routeUser);
module.exports = app;

const express = require('express');
const { routeLogin, routeUser, routeCategory, routePost } = require('./routes');
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
app.use('/categories', routeCategory);
app.use('/post', routePost);

module.exports = app;

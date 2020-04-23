const express = require('express');
const routes = require('./src/routes')
const connection = require('./src/database/index')

const app = express();

app.use(express.json());
app.use(routes);


app.listen(3333,() => {
    console.log('Api funcionando na porta 3333')
})
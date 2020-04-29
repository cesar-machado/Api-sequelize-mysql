const express = require('express');
const routes = require('./routes')
const connection = require('./database')

const app = express();

app.use(express.json());
app.use(routes);

//catch all
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({error: error.message})
})


app.listen(3333,() => {
    console.log('Api funcionando na porta 3333')
})
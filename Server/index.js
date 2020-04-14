const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Gabi'
    });
});

app.listen(3333); //app roda na porta 3333

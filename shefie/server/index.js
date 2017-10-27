const express = require('express'),
    { json } = require('body-parser'),
    cors = require('cors'),
    massive = require('massive'),
    { getShelf, getBin, create, update, deleteBin } = require('./shelf-controller'),
    port = process.env.PORT || 3000;

require('dotenv').config();

const app = express();

app.use(json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
})

app.get('/api/shelf/:id', getShelf); 
app.get('/api/bin/:id', getBin);
app.put('/api/bin/:id', update);
app.post('/api/bin/:id', create); 
app.delete('/api/bin/:id', deleteBin);//change function 
















app.listen(port, console.log(`I'm up boss check out ${port}`));
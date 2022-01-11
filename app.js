const express = require('express')
const db = require('./core/queries')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({extended: true})
)

app.get('/', (req, res) => {res.json({info: 'Sevents server running normally'})} );

app.get('/events', db.fetchAllEvents);

app.get('/ticket/:phone', db.fetchUsersTickets);

app.post('/book', db.bookPlace);

app.listen(port, () => console.log(`Sevents server running normally on port ${port}!`));
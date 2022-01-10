const {Client} = require('pg');

// const client = new Client({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'sevents',
//     password: 'root',
//     port: 5432
// });

const client = new Client({
    user: 'xxyqkxysrwkdji',
    host: 'ec2-3-225-41-234.compute-1.amazonaws.com',
    database: 'dj4rl5cpovk42',
    password: '74c9b26de5458220e7dad3a0d49cca937bc8376ac8432fb301210c520d86ad37',
    port: 5432
})

client.connect();

module.exports = {client};
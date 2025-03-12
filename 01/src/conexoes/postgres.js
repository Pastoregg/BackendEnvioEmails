const knex = require('knex')({
    client: 'pg',
    conection: {

        host: 'localhost',
        part: 5432,
        user:'postgres',
        password: '1989',
        database: 'newsletter'

    }
});
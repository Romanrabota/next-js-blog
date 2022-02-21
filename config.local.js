if (typeof document !== 'undefined') {
    throw new Error('Do not import `config.js` from inside the client-side code.');
}

module.exports = {
    baseUrl: 'http://localhost:3000',

    db: {
        username: 'Roman',
        password: 'qwerty_1',
        database: 'Nedviga',
        host: 'localhost',
        dialect: 'mysql',
        logging: false,
    },

};
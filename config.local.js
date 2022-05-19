if (typeof document !== 'undefined') {
    throw new Error('Do not import `config.js` from inside the client-side code.');
}

module.exports = {
   

    db: {
        username: 'Roman',
        password: 'qwerty_1',
        database: 'nedviga',
        host: 'localhost',
        dialect: 'mysql',
        logging: false,
    },

};
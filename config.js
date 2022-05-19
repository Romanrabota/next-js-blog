/*let localConfig = {};
if (isDev) {
    try {
        localConfig = require('./config.local');
    } catch (ex) {
        console.log('ex', ex)
        console.log('config.local does not exist.');
    }
}

module.exports = merge(prodConfig, localConfig);*/


const merge = require('lodash/merge');

const isDev = process.env.NODE_ENV !== 'production';
const isJest = process.env.JEST_WORKER_ID !== undefined;

if (typeof document !== 'undefined' && !isJest) {
    throw new Error('Do not import `config.js` from inside the client-side code.');
}

const prodConfig = {

    siteName: 'Some Web Site',
    baseUrl: 'http://localhost',
    dev: isDev,
    jest: isJest,
    port: process.env.PORT || 3000,
    jwtSecret: 'ubfaWS62u9LXbBVXaCfG263zecqcm692npKdsKG98cpubxfqR6vFJhf3qUbdaj8z',

    db: {
        username: 'Roman',
        password: 'qwerty_1',
        database: 'nedviga',
        host: 'localhost',
        dialect: 'mysql',
        logging: false,
    },

};

let localConfig = {};
if (isDev) {
    try {
        localConfig = require('./config.local');
    } catch (ex) {
        console.log('ex', ex)
        console.log('config.local does not exist.');
    }
}

module.exports = merge(prodConfig, localConfig);
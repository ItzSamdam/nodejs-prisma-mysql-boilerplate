const config = require('./config');

module.exports = {
    //dev credentials
    development: {
        databaseUrl: config.dbUrl,
        dialect: 'mysql',
        dialectOptions: {
            bigNumberStrings: true,
        },
    },
    //staging credentials
    test: {
        databaseUrl: config.dbUrl,
        dialect: 'mysql',
        dialectOptions: {
            bigNumberStrings: true,
        },
    },
    //live credentials
    production: {
        databaseUrl: config.dbUrl,
        port: config.port,
        dialect: 'mysql',
        dialectOptions: {
            bigNumberStrings: true,
        },
    },
};

const { User, DeathFact } = require('../models/index.js');
const chalk = require('chalk');
const path = require('path');

const options = {
    mongodb: {
        host: 'localhost',
        port: 27017,
        dbname: 'mongoose-seed-plus-dev'
    },
    dump: {
        enable: true
    },
    models: [
        { path: '../models/User.js', name: 'User', clear: true },
        { path: '../models/DeathFact.js', name: 'DeathFact', clear: true }
    ],
    path: path.join(__dirname, '/migrations')
};

new User(options, function(err, result) {
    if (err) {
        throw err.message;
    }

    console.log(`Successfully connected to MongoDB: ${chalk.grey(result.cleared)}\n`);

    if (result.cleared) {
        console.log(`Cleared models: ${chalk.grey(result.cleared)}\n`);
    }

    console.log(chalk.cyan('Seeding Results'));

    for (var prop in result.populate) {
        console.log(`${prop}: ${chalk.grey(result.populate[prop])}`);
    }

    process.exit(1);
})

new DeathFact(options, function(err, result) {
    if (err) {
        throw err.message;
    }

    console.log(`Successfully connected to MongoDB: ${chalk.grey(result.cleared)}\n`);

    if (result.cleared) {
        console.log(`Cleared models: ${chalk.grey(result.cleared)}\n`);
    }

    console.log(chalk.cyan('Seeding Results'));

    for (var prop in result.populate) {
        console.log(`${prop}: ${chalk.grey(result.populate[prop])}`);
    }

    process.exit(1);
})
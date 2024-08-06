const { Client } = require ('pg');
const client = new Client (process.env.DATABASE_URL || 'postgres://localhost:5432//acme_icecream_shop');
client.connect();

module.exports = client;
const config = require('config');

module.exports = {
  client: config.get('db.client'),
  connection: config.get('db.connection'),
  migrations: {
    directory: './build/db/migrations',
    tableName: 'knex_migrations',
  },
  seeds: {
    directory: './build/db/seeds',
  },
};

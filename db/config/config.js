require('dotenv').config();

module.exports = {
  development: {
    database: 'SS16',
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
  test: {
    database: 'SS16',
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
  production: {
    database: 'SS16',
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
} 
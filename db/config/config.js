require('dotenv').config();

module.exports = {
  development: {
    database: 'SS9',
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
  test: {
    database: 'SS9',
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
  production: {
    database: 'SS9',
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
} 
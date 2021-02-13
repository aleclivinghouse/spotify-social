require('dotenv').config();

module.exports = {
  development: {
    database: 'SS10',
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
  test: {
    database: 'SS10',
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
  production: {
    database: 'SS10',
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
} 
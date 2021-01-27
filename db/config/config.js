require('dotenv').config();

module.exports = {
  development: {
    database: 'SS2',
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
  test: {
    database: 'SS2',
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
  production: {
    database: 'SS2',
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
} 
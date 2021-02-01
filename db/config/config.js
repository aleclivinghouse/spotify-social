require('dotenv').config();

module.exports = {
  development: {
    database: 'SS5',
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
  test: {
    database: 'SS5',
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
  production: {
    database: 'SS5',
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
} 
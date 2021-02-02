require('dotenv').config();

module.exports = {
  development: {
    database: 'SS7',
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
  test: {
    database: 'SS7',
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
  production: {
    database: 'SS7',
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
} 
require('dotenv').config();

module.exports = {
  development: {
    database: 'spotifySocial',
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
  test: {
    database: 'spotifySocial',
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
  production: {
    database: 'SpotifySocial',
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
} 
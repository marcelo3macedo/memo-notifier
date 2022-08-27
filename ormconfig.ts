module.exports = [
  {
    "name": process.env.NOTIFIER_NAME,
    "type": process.env.NOTIFIER_TYPE,
    "default": true,
    "host": process.env.NOTIFIER_HOST,
    "port": process.env.NOTIFIER_PORT,
    "username": process.env.NOTIFIER_USERNAME,
    "password": process.env.NOTIFIER_PASSWORD,
    "database": process.env.NOTIFIER_DATABASE,
    "entities": [ process.env.NOTIFIER_ENTITIES ],
    "migrations": [ process.env.NOTIFIER_MIGRATIONS ],
    "cli": {
      "migrationsDir":  process.env.NOTIFIER_CLI_MIGRATIONSDIR
    }
  },
  {
    "name": process.env.API_NAME,
    "type": process.env.API_TYPE,
    "host": process.env.API_HOST,
    "port": process.env.API_PORT,
    "username": process.env.API_USERNAME,
    "password": process.env.API_PASSWORD,
    "database": process.env.API_DATABASE,
    "entities": [ process.env.API_ENTITIES ],
  }
]
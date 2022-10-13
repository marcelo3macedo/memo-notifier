import VariableManager from "@lib/VariableManager"

VariableManager.load()

export default {
    notifier_name: process.env.NOTIFIER_NAME,
    notifier_type: process.env.NOTIFIER_TYPE,
    notifier_host: process.env.NOTIFIER_HOST,
    notifier_port: parseInt(process.env.NOTIFIER_PORT),
    notifier_username: process.env.NOTIFIER_USERNAME,
    notifier_password: process.env.NOTIFIER_PASSWORD,
    notifier_database: process.env.NOTIFIER_DATABASE,
    notifier_entities: process.env.NOTIFIER_ENTITIES,
    notifier_migrations: process.env.NOTIFIER_MIGRATIONS,
    notifier_cli_migrationsdir:  process.env.NOTIFIER_CLI_MIGRATIONSDIR,
    api_name: process.env.API_NAME,
    api_type: process.env.API_TYPE,
    api_host: process.env.API_HOST,
    api_port: parseInt(process.env.API_PORT),
    api_username: process.env.API_USERNAME,
    api_password: process.env.API_PASSWORD,
    api_database: process.env.API_DATABASE,
    api_entities: process.env.API_ENTITIES
}
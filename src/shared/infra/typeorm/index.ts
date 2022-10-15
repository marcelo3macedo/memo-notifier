import databases from '@config/databases';
import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
    type: "mysql",
    name: databases.notifier_name,
    host: databases.notifier_host,
    port: databases.notifier_port,
    username: databases.notifier_username,
    password: databases.notifier_password,
    database: databases.notifier_database,
    entities: [ databases.notifier_entities ],
    migrations: [ databases.notifier_migrations ],
})

const ApiDataSource = new DataSource({
    type: "mysql",
    name: databases.api_name,
    host: databases.api_host,
    port: databases.api_port,
    username: databases.api_username,
    password: databases.api_password,
    database: databases.api_database,
    entities: [ databases.api_entities ]
})

AppDataSource.initialize()
ApiDataSource.initialize()

export {
    ApiDataSource,
    AppDataSource
}
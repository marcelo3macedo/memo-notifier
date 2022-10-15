
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

AppDataSource.initialize()

export default AppDataSource
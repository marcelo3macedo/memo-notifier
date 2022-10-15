
import databases from '@config/databases';
import { DataSource } from 'typeorm';

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

ApiDataSource.initialize()

export default ApiDataSource
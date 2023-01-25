import {DataSource} from "typeorm";
import {Card} from "~/src/entity/Card";

export const AppDataSource = new DataSource({
    url: "localhost:5432",
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "nopassword",
    database: "smileAtMe",
    synchronize: true,
    logging: true,
    entities: [Card],
    subscribers: [],
    migrations: [/*...*/],
    cli: {
        entitiesDir: "~/src/entity",
        migrationsDir: "~/migration",
    }
})
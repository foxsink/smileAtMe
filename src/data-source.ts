import {DataSource} from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "nopassword",
    database: "smileAtMe",
    synchronize: true,
    logging: true,
    entities: ["src/entity/*.ts"],
    subscribers: [],
    migrations: ["migrations/*.ts"],
})
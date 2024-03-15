import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Articles } from "./entity/Articles"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "karapay02",
    database: "micro_app",
    synchronize: true,
    logging: false,
    entities: ["src/entity/*.ts"],
    migrations: [],
    subscribers: [],
})

import { Sequelize } from "sequelize";

const db = new Sequelize(
    String(process.env.MYSQLDB_DATABASE),
    String(process.env.MYSQLDB_USER),
    String(process.env.MYSQLDB_ROOT_PASSWORD),
    {
        host: process.env.MYSQLDB_HOST,
        dialect: 'mariadb',
        logging: false,
        port: Number(process.env.MYSQLDB_DOCKER_PORT),
        define: {
            timestamps: true,
            freezeTableName: true,
        },
    }
);

export default db;
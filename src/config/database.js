import 'dotenv/config';
import { Sequelize } from "sequelize";



const sequelize = process.env.DATABASE_URL
    ? new Sequelize(process.env.DATABASE_URL, {
          dialect: 'mysql',
          logging: false,
      })
    : new Sequelize(
          process.env.DATABASE_NAME,
          process.env.DATABASE_USER,
          process.env.DATABASE_PASSWORD,
          {
              host: process.env.DATABASE_HOST,
              dialect: 'mysql',
              port: Number(process.env.DATABASE_PORT),
              logging: false,
          }
      );

export default sequelize;


